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
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        padding: 0,
        height: '100%',
        width: '100%',
        outline: 0,
        fontSize: '16px',
        transition: '0.3s all',
        '&:disabled': {
            cursor: 'not-allowed',
        },
    },
};

export const CoreButtonStyle: StyleManager = StyleManager.create(CoreButtonStyleBase, 'core-button').setPrefix('BWNL-Button-');
