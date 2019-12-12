/**
 * @author WMXPY
 * @namespace Button
 * @description Declare
 */

import * as React from "react";

export type CoreButtonProps = {

    readonly onMouseEnter: (event: React.MouseEvent) => void;
    readonly onMouseLeave: (event: React.MouseEvent) => void;

    readonly onContextMenu?: (event: Event) => void;

    readonly disabled?: boolean;
    readonly hovering?: boolean;
    readonly children?: any;
};
