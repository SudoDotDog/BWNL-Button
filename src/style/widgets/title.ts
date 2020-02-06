/**
 * @author WMXPY
 * @namespace Style_Widgets
 * @description Title
 */

import { StyleManager, Styles } from "@sudoo/jss";

const TitleWidgetStyleBase: Styles = {

    wrapper: {
        display: 'flex',
        backgroundColor: 'transparent',
    },
    icon: {
        maxWidth: '256px',
        minWidth: '128px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    text: {
        flex: 1,
        padding: '10px',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '32px',
    },
    content: {
        fontSize: '16px',
        lineHeight: '20px',
    },
};

export const TitleWidgetStyle: StyleManager = StyleManager.create(TitleWidgetStyleBase, 'widget-title').setPrefix('BWNL-Button-');
