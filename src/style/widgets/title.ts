/**
 * @author WMXPY
 * @namespace Style_Widgets
 * @description Title
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const TitleWidgetStyleBase: JSSStyle = {

    wrapper: {
        display: 'flex',
        backgroundColor: 'transparent',
    },
    icon: {
        maxWidth: '128px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
