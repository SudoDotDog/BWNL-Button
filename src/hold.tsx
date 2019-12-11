/**
 * @author WMXPY
 * @namespace Button
 * @description Hold
 */

import { Classes } from "jss";
import * as React from "react";
import { Square } from "./square";
import { HoldStyle } from "./style/hold";

export type HoldableButtonProps = {

    readonly style?: React.CSSProperties;
    readonly width?: string;
    readonly block?: boolean;
    readonly borderColor?: string;
};

export type HoldableButtonStates = {


};

export class HoldableButton extends React.Component<HoldableButtonProps, HoldableButtonStates> {

    public readonly state: HoldableButtonStates = {

    };

    private readonly _holdStyle: Classes = HoldStyle.use();

    public render() {

        return (<Square
            width={this.props.width}
            contentClassName={this._holdStyle.container}
            contentStyle={{
                ...this.props.style,
                borderColor: this.props.borderColor,
            }}
        >
            <button
                className={this._holdStyle.button}
            >
                {this.props.children}
            </button>
        </Square>);
    }
}
