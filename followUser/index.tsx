/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import {
    addContextMenuPatch,
    NavContextMenuPatchCallback,
    removeContextMenuPatch,
} from "@api/ContextMenu";
import { definePluginSettings, useSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs } from "@utils/constants";
import { LazyComponent } from "@utils/lazyReact";
import { classes } from "@utils/misc";
import definePlugin, { OptionType } from "@utils/types";
import { filters, find, findByPropsLazy } from "@webpack";
import { Menu, React, UserStore } from "@webpack/common";
import type { Channel, User } from "discord-types/general";
import type { PropsWithChildren, SVGProps } from "react";

const HeaderBarIcon = LazyComponent(() => {
    const filter = filters.byCode(".HEADER_BAR_BADGE");
    return find(m => m.Icon && filter(m.Icon)).Icon;
});

interface BaseIconProps extends IconProps {
    viewBox: string;
}

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    height?: string | number;
    width?: string | number;
}

function Icon({ height = 24, width = 24, className, children, viewBox, ...svgProps }: PropsWithChildren<BaseIconProps>) {
    return (
        <svg
            className={classes(className, "vc-icon")}
            role="img"
            width={width}
            height={height}
            viewBox={viewBox}
            {...svgProps}
        >
            {children}
        </svg>
    );
}

function FollowIcon(props: IconProps) {
    return (
        <Icon
            {...props}
            className={classes(props.className, "vc-follow-icon")}
            viewBox="0 -960 960 960"
        >
            <path
                fill="currentColor"
                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"
            />
        </Icon>
    );
}

function UnfollowIcon(props: IconProps) {
    return (
        <Icon
            {...props}
            className={classes(props.className, "vc-unfollow-icon")}
            viewBox="0 -960 960 960"
        >
            <path
                fill="currentColor"
                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"
            />
        </Icon>
    );
}

interface VoiceState {
  userId: string;
  channelId?: string;
  oldChannelId?: string;
  deaf: boolean;
  mute: boolean;
  selfDeaf: boolean;
  selfMute: boolean;
  selfStream: boolean;
  selfVideo: boolean;
  sessionId: string;
  suppress: boolean;
  requestToSpeakTimestamp: string | null;
}

export const settings = definePluginSettings({
    followLeave: {
        type: OptionType.BOOLEAN,
        description: "Also leave when the followed user leaves",
        restartNeeded: false,
        default: false,
    },
    followUserId: {
        type: OptionType.STRING,
        description: "Followed User ID",
        restartNeeded: false,
        hidden: true, // Managed via context menu and indicator
        default: "",
    },
});

const ChannelActions: {
  disconnect: () => void;
  selectVoiceChannel: (channelId: string) => void;
} = findByPropsLazy("disconnect", "selectVoiceChannel");

function toggleFollow(userId: string) {
    if (settings.store.followUserId === userId) {
        settings.store.followUserId = "";
    } else {
        settings.store.followUserId = userId;
    }
}

interface UserContextProps {
  channel: Channel;
  guildId?: string;
  user: User;
}

const UserContext: NavContextMenuPatchCallback =
  (children, { user, guildId }: UserContextProps) =>
      () => {
          if (!user || !guildId || user.id === UserStore.getCurrentUser().id) return;
          const isFollowed = settings.store.followUserId === user.id;
          const label = isFollowed ? "Unfollow User" : "Follow User";
          const icon = isFollowed ? UnfollowIcon : FollowIcon;

          children.splice(
              -1,
              0,
              <Menu.MenuGroup>
                  <Menu.MenuItem
                      id="follow-user"
                      label={label}
                      action={() => toggleFollow(user.id)}
                      icon={icon}
                  />
              </Menu.MenuGroup>
          );
      };

export default definePlugin({
    name: "FollowUser",
    description:
    "Adds a follow user option in the guild user context menu to always be in the same VC as them",
    authors: [Devs.D3SOX],

    settings,

    patches: [
        {
            find: "toolbar:function",
            replacement: {
                match: /(function \i\(\i\){)(.{1,200}toolbar.{1,100}mobileToolbar)/,
                replace: "$1$self.addIconToToolBar(arguments[0]);$2",
            },
        },
    ],

    start() {
        addContextMenuPatch("user-context", UserContext);
    },

    stop() {
        removeContextMenuPatch("user-context", UserContext);
    },

    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: { voiceStates: VoiceState[] }) {
            if (!settings.store.followUserId) {
                return;
            }
            for (const state of voiceStates) {
                const { userId, channelId, oldChannelId } = state;
                const isFollowed = settings.store.followUserId === userId;

                if (!isFollowed) {
                    continue;
                }

                if (channelId !== oldChannelId) {
                    if (channelId) {
                        // move or join new channel -> also join
                        ChannelActions.selectVoiceChannel(channelId);
                    } else if (oldChannelId && settings.store.followLeave) {
                        // leave -> disconnect
                        ChannelActions.disconnect();
                    }
                }
            }
        },
    },

    FollowIndicator() {
        const {
            plugins: {
                FollowUser: { followUserId },
            },
        } = useSettings(["plugins.FollowUser.followUserId"]);
        if (followUserId) {
            return (
                <HeaderBarIcon
                    className="vc-follow-user-indicator"
                    tooltip={`Following ${
                        UserStore.getUser(followUserId).username
                    } (click to unfollow)`}
                    icon={UnfollowIcon}
                    onClick={() => {
                        settings.store.followUserId = "";
                    }}
                />
            );
        }

        return null;
    },

    addIconToToolBar(e: { toolbar: React.ReactNode[] | React.ReactNode }) {
        if (Array.isArray(e.toolbar)) {
            return e.toolbar.push(
                <ErrorBoundary noop={true} key="follow-indicator">
                    <this.FollowIndicator />
                </ErrorBoundary>
            );
        }

        e.toolbar = [
            <ErrorBoundary noop={true} key="follow-indicator">
                <this.FollowIndicator />
            </ErrorBoundary>,
            e.toolbar,
        ];
    },
});
