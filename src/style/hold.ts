/**
 * @author WMXPY
 * @namespace Style
 * @description Hold
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const HoldStyleBase: JSSStyle = {

    container: {
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: 'white',
        height: '100%',
    },
    button: {
        cursor: 'pointer',
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

export const HoldStyle: StyleManager = StyleManager.create(HoldStyleBase, 'hold').setPrefix('BWNL-Button-');
