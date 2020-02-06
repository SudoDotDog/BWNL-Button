/**
 * @author WMXPY
 * @namespace Style_Widgets
 * @description Image
 */

import { StyleManager, Styles } from "@sudoo/jss";

const ImageWidgetStyleBase: Styles = {

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
