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
