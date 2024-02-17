/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { showNotification } from "@api/Notifications";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { Button, React, Toasts } from "@webpack/common";

import { VERSION } from "../index";

// Thank you Syncxv for the original code

const repoName = "vencord-userplugins";
const user = "D3SOX";
const branch = "master";

async function getUpdateVersion() {
    const indexTs = await (await fetch(`https://raw.githubusercontent.com/${user}/${repoName}/${branch}/index.ts`, { cache: "no-cache" })).text();
    const res = indexTs.match(/export const VERSION = "(.+)";/);
    if (!res) return false;

    const [_, version] = res;
    const [major, minor, patch] = version.split(".").map(m => parseInt(m));
    if (Number.isNaN(major) || Number.isNaN(minor) || Number.isNaN(patch)) return false;

    const [currentMajor, currentMinor, currentPatch] = VERSION.split(".").map(m => parseInt(m));

    if (major > currentMajor || minor > currentMinor || patch > currentPatch) return version;

    return false;
}


async function checkForUpdates(delay = 0, showNoUpdateToast = true) {
    const updateVersion = await getUpdateVersion();
    if (!updateVersion) {
        if (showNoUpdateToast)
            Toasts.show({
                message: "No updates found!",
                id: Toasts.genId(),
                type: Toasts.Type.MESSAGE,
                options: {
                    position: Toasts.Position.BOTTOM
                }
            });
        return;
    }

    setTimeout(() => showNotification({
        title: `Update available for D3SOX userplugins: ${updateVersion}`,
        body: "Click here to update",
        permanent: true,
        noPersist: true,
        onClick() {
            VencordNative.native.openExternal("https://github.com/D3SOX/vencord-userplugins#update");
        }
    }), delay);
}

export const settings = definePluginSettings({
    checkForUpdate: {
        type: OptionType.COMPONENT,
        description: "Check for updates",
        component: () =>
            <Button onClick={() => checkForUpdates()}>
                Check for updates
            </Button>
    },
    autoCheckForUpdates: {
        default: true,
        type: OptionType.BOOLEAN,
        description: "Automatically check for updates on startup.",
    },
});

export default definePlugin({
    name: "D3SOXUpdateNotifier",
    description: "Get notifications when there's an update for D3SOX's userplugins",
    authors: [Devs.D3SOX],
    required: true,
    tags: ["update", "notifier"],

    settings,

    start() {
        if (settings.store.autoCheckForUpdates)
            checkForUpdates(10_000, false);
    }
});
