/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { PluginNative } from "@utils/types";

export function getNative(): PluginNative<typeof import("../native")> {
    if (IS_WEB) {
        const Native = {
            getCommitHash: async () => ({ ok: true, value: "" }),
            getRepoInfo: async () => ({ ok: true, value: { repo: "", gitHash: "" } }),
            getNewCommits: async () => ({ ok: true, value: [] }),
            update: async () => ({ ok: true, value: "" }),
            d3soxUpdaterUniqueIdThingyIdkMan: async () => { },
        } satisfies PluginNative<typeof import("../native")>;

        return Native;
    }
    return Object.values(VencordNative.pluginHelpers)
        .find(m => m.d3soxUpdaterUniqueIdThingyIdkMan) as PluginNative<typeof import("../native")>;
}
