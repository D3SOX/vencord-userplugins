/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { findByPropsLazy } from "@webpack";

export interface StreamerModeSettings {
    enabled: boolean;
    autoToggle: boolean;
    hideInstantInvites: boolean;
    hidePersonalInformation: boolean;
    disableSounds: boolean;
    disableNotifications: boolean;
    enableContentProtection: boolean;
}

const StreamerModeActions: {
    setEnabled(enabled: boolean): void;
    update(settings: StreamerModeSettings): void;
} = findByPropsLazy("setEnabled", "update");

export default definePlugin({
    name: "ScreenShareStreamerMode",
    description: "Automatically enables streamer mode while screen sharing",
    authors: [Devs.D3SOX],

    flux: {
        STREAM_CREATE() {
            StreamerModeActions.setEnabled(true);
        },
        STREAM_DELETE() {
            StreamerModeActions.setEnabled(false);
        },
    }
});
