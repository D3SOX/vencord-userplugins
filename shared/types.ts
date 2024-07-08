/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export type GitValue = {
    value: any;
    stderr?: string;
    ok: true;
};

export type GitError = {
    ok: false;
    cmd: string;
    message: string;
    error: any;
};

export type GitResult = GitValue | GitError;
