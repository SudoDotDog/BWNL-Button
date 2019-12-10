/**
 * @author WMXPY
 * @namespace Style_Widgets
 * @description Image
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const ImageWidgetStyleBase: JSSStyle = {

    wrapper: {
        display: 'flex',
    },
    image: {
        width: '100%',
        height: '100%',
    },
};

export const ImageWidgetStyle: StyleManager = StyleManager.create(ImageWidgetStyleBase, 'widget-image').setPrefix('BWNL-Button-');
