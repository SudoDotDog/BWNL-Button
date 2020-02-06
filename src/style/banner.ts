/**
 * @author WMXPY
 * @namespace StyleManager
 * @description Banner
 */

import { StyleManager, Styles } from "@sudoo/jss";

const BannerStyleBase: Styles = {

    wrapper: {
        minWidth: '256px',
        maxWidth: '512px',
    },
};

export const BannerStyle: StyleManager = StyleManager.create(BannerStyleBase, 'banner').setPrefix('BWNL-Button-');
