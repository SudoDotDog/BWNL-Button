/**
 * @author WMXPY
 * @namespace Style_Widgets
 * @description Operation
 */

import { NAVY } from "@bwnl/shiny-inline";
import { JSSStyle, StyleManager } from "@sudoo/jss";

const OperationWidgetStyleBase: JSSStyle = {

    wrapper: {
        minHeight: '32px',
        maxHeight: '64px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: '5px',
        paddingRight: '5px',
    },
    key: {
        lineHeight: '18px',
        border: `1px solid ${NAVY}`,
        borderRadius: '3px',
        borderBottom: `2px solid ${NAVY}`,
        paddingLeft: '5px',
        paddingRight: '5px',
        marginLeft: '2px',
        marginRight: '2px',
        fontSize: '13px',
    },
    text: {
        fontWeight: 'bold',
        marginLeft: '2px',
        marginRight: '2px',
    },
};

export const OperationWidgetStyle: StyleManager = StyleManager.create(OperationWidgetStyleBase, 'widget-operation').setPrefix('BWNL-Button-');
