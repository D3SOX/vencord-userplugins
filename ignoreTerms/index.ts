/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "IgnoreTerms",
    description: "Ignore Discord's new terms of service",
    authors: [Devs.D3SOX],
    patches: [
        {
            find: "Messages.NEW_TERMS_TITLE",
            replacement: {
                match: /function (\i)\((\i)\)\{let\{transitionState:(\i)\}=(\i)/g,
                replace: "function $1($2){return $self.closeModal($2);let{transitionState:$3}=$4"
            }
        }
    ],

    closeModal(event) {
        event.transitionState = null;
        event.onClose();
        return null;
    }
});
