/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin, { PluginDef } from "@utils/types";
import { FluxDispatcher } from "@webpack/common";
import { FluxEvents } from "@webpack/types";

type MyPluginDef = PluginDef & {
    flux: {
        UPDATE_HANG_STATUS: ({ status, saveAsDefault }: { status: string, saveAsDefault?: boolean }) => void;
    };
};

type ExtendedFluxDispatcherType = typeof FluxDispatcher & {
    // Extend the dispatch method to accept the extended event types
    dispatch(event: { [key: string]: unknown; type: FluxEvents | "CLEAR_HANG_STATUS"; }): Promise<void>;
}

const ExtendedFluxDispatcher = FluxDispatcher as unknown as ExtendedFluxDispatcherType;

export default definePlugin({
    name: "NoDefaultHangStatus",
    description: "Disable the default hang status when joining voice channels",
    authors: [Devs.D3SOX],

    flux: {
        UPDATE_HANG_STATUS: ({ status, saveAsDefault }) => {
            if (saveAsDefault === undefined && status) {
                ExtendedFluxDispatcher.dispatch({ type: "CLEAR_HANG_STATUS" });
            }
        },
    }
} as MyPluginDef);
