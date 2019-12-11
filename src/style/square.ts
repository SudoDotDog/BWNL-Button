/**
 * @author WMXPY
 * @namespace Style
 * @description Square
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const SquareStyleBase: JSSStyle = {

    wrapper: {
        boxSizing: 'border-box',
        position: 'relative',
        width: '100%',
        paddingBottom: '100%',
    },
    content: {
        boxSizing: 'border-box',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
};

export const SquareStyle: StyleManager = StyleManager.create(SquareStyleBase, 'square').setPrefix('BWNL-Button-');
