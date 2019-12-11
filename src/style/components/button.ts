/**
 * @author WMXPY
 * @namespace Style
 * @description CoreButton
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const CoreButtonStyleBase: JSSStyle = {

    container: {
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: 'white',
        height: '100%',
    },
    button: {
        cursor: 'pointer',
        userSelect: 'none',
        pointerEvents: 'auto',
        borderRadius: 0,
        border: 0,
        padding: 0,
        height: '100%',
        width: '100%',
        outline: 0,
        fontSize: '16px',
        '&:hover': {

        },
    },
};

export const CoreButtonStyle: StyleManager = StyleManager.create(CoreButtonStyleBase, 'core-button').setPrefix('BWNL-Button-');
