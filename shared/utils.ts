/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

type MemoizedFunction<T extends (...args: any[]) => any> = {
    (...args: Parameters<T>): ReturnType<T>;
    clear(): void;
};

export function memoize<T extends (...args: any[]) => any>(func: T): MemoizedFunction<T> {
    const cache = new Map<string, ReturnType<T>>();

    const memoizedFunc = (...args: Parameters<T>): ReturnType<T> => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key)!;
        }

        const result = func(...args);
        cache.set(key, result);
        return result;
    };

    memoizedFunc.clear = () => cache.clear();

    return memoizedFunc;
}
