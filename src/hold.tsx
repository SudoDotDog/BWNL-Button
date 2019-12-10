/**
 * @author WMXPY
 * @namespace Button
 * @description Hold
 */

import { Classes } from "jss";
import * as React from "react";
import { HoldStyle } from "./style/hold";

export type HoldableButtonProps = {

    readonly wrapperStyle?: React.CSSProperties;
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

        return (<div style={{
            width: this.props.width,
        }}>
            <div
                style={{
                    ...this.props.wrapperStyle,
                    borderColor: this.props.borderColor,
                }}
                className={this._holdStyle.wrapper}
            >
                <div className={this._holdStyle.content}>
                    <button
                        className={this._holdStyle.button}
                    >
                        {this.props.children}
                    </button>
                </div>
            </div>
        </div>);
    }
}
