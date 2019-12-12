/**
 * @author WMXPY
 * @namespace Button
 * @description Util
 */

export const fixBackgroundImage = (link?: string): string | undefined => {

    if (link) {
        return `url(${link})`;
    }
    return undefined;
};

export const parseKeyName = (key: string): string => {

    switch (key) {
        case 'mouse1': return 'Mouse Left';
        case 'mouse2': return 'Mouse Center';
        case 'mouse3': return 'Mouse Right';
    }

    return String(key).toUpperCase();
};
