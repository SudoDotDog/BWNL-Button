/**
 * @author WMXPY
 * @namespace Button
 * @description Declare
 */

import * as React from "react";

export type CoreButtonProps = {

    readonly onMouseEnter: (event: React.MouseEvent) => void;
    readonly onMouseLeave: (event: React.MouseEvent) => void;

    readonly disabled?: boolean;
    readonly children?: any;
};