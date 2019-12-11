/**
 * @author WMXPY
 * @namespace Style_Widgets
 * @description Operation
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const operationProgressKeyframes = {

    '0%': {
        width: '0%',
    },
    '100%': {
        width: '100%',
    },
};

const OperationWidgetStyleBase: JSSStyle = {

    wrapper: {
        minHeight: '32px',
        maxHeight: '64px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: '5px',
        paddingRight: '5px',
        position: 'relative',
    },
    progress: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
    },
    key: {
        lineHeight: '18px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderBottomWidth: '2px',
        borderRadius: '3px',
        paddingLeft: '5px',
        paddingRight: '5px',
        marginLeft: '2px',
        marginRight: '2px',
        fontSize: '13px',
    },
    text: {
        zIndex: 10,
        fontWeight: 'bold',
        marginLeft: '2px',
        marginRight: '2px',
    },
    '@global': {
        '@keyframes bwnl-button-operation-progress': operationProgressKeyframes,
    },
};

export const OperationWidgetStyle: StyleManager = StyleManager.create(OperationWidgetStyleBase, 'widget-operation').setPrefix('BWNL-Button-');
