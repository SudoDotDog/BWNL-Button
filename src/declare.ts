/**
 * @author WMXPY
 * @namespace Button
 * @description Declare
 */

import * as React from "react";

export type CoreButtonProps = {

    readonly onMouseEnter: (event: MouseEvent | React.MouseEvent) => void;
    readonly onMouseLeave: (event: MouseEvent | React.MouseEvent) => void;

    readonly onContextMenu?: (event: MouseEvent) => void;

    readonly disabled?: boolean;
    readonly hovering?: boolean;
    readonly children?: any;
};
