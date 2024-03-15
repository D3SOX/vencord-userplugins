/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { definePluginSettings, migratePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { Button, React } from "@webpack/common";

import { openUpdaterModal } from "./components/UpdaterModal";
import { checkForUpdatesAndNotify } from "./updater";

export const settings = definePluginSettings({
    checkForUpdate: {
        type: OptionType.COMPONENT,
        description: "Check for updates",
        component: () =>
            <Button onClick={() => openUpdaterModal()}>
                Check for updates
            </Button>
    },
    autoCheckForUpdates: {
        default: true,
        type: OptionType.BOOLEAN,
        description: "Automatically check for updates on startup.",
    },
});

migratePluginSettings("D3SOXUpdateNotifier", "D3SOXUpdater");
export default definePlugin({
    name: "D3SOXUpdater",
    description: "Get notifications and update D3SOX's userplugins",
    authors: [Devs.D3SOX],
    required: true,
    tags: ["updater", "notifier"],

    settings,

    start() {
        checkForUpdatesAndNotify(settings.store.autoCheckForUpdates);
    }
});
