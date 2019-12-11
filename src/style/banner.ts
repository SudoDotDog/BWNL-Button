/**
 * @author WMXPY
 * @namespace StyleManager
 * @description Banner
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const BannerStyleBase: JSSStyle = {

    wrapper: {
        minWidth: '256px',
        maxWidth: '512px',
    },
};

export const BannerStyle: StyleManager = StyleManager.create(BannerStyleBase, 'banner').setPrefix('BWNL-Button-');
