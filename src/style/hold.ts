/**
 * @author WMXPY
 * @namespace Style
 * @description Hold
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const HoldStyleBase: JSSStyle = {

    wrapper: {
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: 'white',
        position: 'relative',
        boxSizing: 'border-box',
        width: '100%',
        paddingBottom: '100%',
    },
    content: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
    button: {
        cursor: 'pointer',
        borderRadius: 0,
        border: 0,
        height: '100%',
        width: '100%',
        outline: 0,
        fontSize: '16px',
        '&:hover': {

        },
    },
};

export const HoldStyle: StyleManager = StyleManager.create(HoldStyleBase, 'hold').setPrefix('BWNL-Button-');
