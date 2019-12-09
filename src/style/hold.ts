/**
 * @author WMXPY
 * @namespace Style
 * @description Hold
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const holdStyleBase: JSSStyle = {
};

export const holdStyle: StyleManager = StyleManager.create(holdStyleBase, 'hold').setPrefix('BWNL-Button-');
