/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { getNative } from "./shared/native";

// needs to stay here to notify users of the old version
export const VERSION = "2.0.0";

export const Native = getNative();

import Plugins from "~plugins";

const PLUGINS = [
    require("./d3soxUpdater").default,
    require("./followUser").default,
    require("./ignoreTerms").default,
    require("./memberListActivities").default,
    require("./notifyUserChanges").default,
    require("./screenShareStreamerMode").default,
    require("./serverProfilesToolbox").default,
    require("./silentTyping").default,
    require("./voiceChatUtilities").default,
];

if (IS_DISCORD_DESKTOP) {
    PLUGINS.push(require("./blockKrisp.discordDesktop").default);
}

for(const plugin of PLUGINS) {
    (plugin.tags ??= []).push("D3SOX");
}

const name = Symbol("D3SOX-userplugins");
export default { name };

// This is called from api/Badges.ts, which is the first place that imports ~plugins
Set = new Proxy(Set, {
    construct(target, args) {
        if(Plugins && Plugins[name as any]) {
            Set = target;
            delete Plugins[name as any];
            for(const plugin of PLUGINS)
                Plugins[plugin.name] = plugin;
        }
        return Reflect.construct(target, args);
    }
});
