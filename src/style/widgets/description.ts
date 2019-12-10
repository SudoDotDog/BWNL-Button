/**
 * @author WMXPY
 * @namespace Style_Widgets
 * @description Description
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const DescriptionWidgetStyleBase: JSSStyle = {

    title: {
        fontWeight: 'bold',
        fontSize: '20px',
        paddingLeft: '7px',
    },
    descriptions: {
        padding: '5px',
        paddingLeft: '14px',
        display: 'grid',
        rowGap: '5px',
    },
    complex: {
        display: 'flex',
        alignItems: 'center',
    },
    complexIcon: {
        display: 'inherit',
        margin: 0,
        padding: 0,
    },
    complexText: {
        paddingLeft: '5px',
        flex: 1,
    },
};

export const DescriptionWidgetStyle: StyleManager = StyleManager.create(DescriptionWidgetStyleBase, 'widget-description').setPrefix('BWNL-Button-');
