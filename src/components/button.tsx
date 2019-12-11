/**
 * @author WMXPY
 * @namespace Button
 * @description Button
 */

import { Classes } from "jss";
import * as React from "react";
import { CoreButtonStyle } from "../style/button";
import { Square } from "./square";

export type CoreButtonProps = {

    readonly style?: React.CSSProperties;
    readonly width?: string;
    readonly block?: boolean;
    readonly borderColor?: string;
};

export type CoreButtonStates = {


};

export class CoreButton extends React.Component<CoreButtonProps, CoreButtonStates> {

    public readonly state: CoreButtonStates = {

    };

    private readonly _coreButtonStyle: Classes = CoreButtonStyle.use();

    public render() {

        return (<Square
            width={this.props.width}
            contentClassName={this._coreButtonStyle.container}
            contentStyle={{
                ...this.props.style,
                borderColor: this.props.borderColor,
            }}
        >
            <button
                className={this._coreButtonStyle.button}
            >
                {this.props.children}
            </button>
        </Square>);
    }
}
