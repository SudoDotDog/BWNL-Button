/**
 * @author WMXPY
 * @namespace Style_Widgets
 * @description Image
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const ImageWidgetStyleBase: JSSStyle = {

    wrapper: {
        display: 'flex',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '128px',
        maxHeight: '256px',
    },
};

export const ImageWidgetStyle: StyleManager = StyleManager.create(ImageWidgetStyleBase, 'widget-image').setPrefix('BWNL-Button-');
