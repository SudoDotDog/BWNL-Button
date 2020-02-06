/**
 * @author WMXPY
 * @namespace Style
 * @description SquareButton
 */

import { StyleManager, Styles } from "@sudoo/jss";

const SquareButtonStyleBase: Styles = {

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

export const SquareButtonStyle: StyleManager = StyleManager.create(SquareButtonStyleBase, 'square-button').setPrefix('BWNL-Button-');
