/**
 * @author WMXPY
 * @namespace Button
 * @description Button
 */

import { Classes } from "jss";
import * as React from "react";
import { CoreButtonProps } from "../declare";
import { SquareButtonStyle } from "../style/components/square-button";
import { Square } from "./square";

export type SquareButtonProps = {

    readonly style?: React.CSSProperties;
    readonly width?: string;
    readonly block?: boolean;
    readonly borderColor?: string;
    readonly hoverBorderColor?: string;
    readonly borderRadius?: string | number;
} & CoreButtonProps;

export class SquareButton extends React.Component<SquareButtonProps> {

    private readonly _SquareButtonStyle: Classes = SquareButtonStyle.use();

    public render() {

        return (<Square
            width={this.props.width}
            contentClassName={this._SquareButtonStyle.container}
            contentStyle={{
                ...this.props.style,
                borderColor: this.props.borderColor,
                borderRadius: this.props.borderRadius,
            }}
        >
            <button
                className={this._SquareButtonStyle.button}
                style={{
                    borderColor: this.props.hovering ? this.props.hoverBorderColor : 'transparent',
                    borderRadius: this.props.borderRadius,
                }}
                disabled={this.props.disabled}
                onContextMenu={(e) => e.preventDefault()}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
            >
                {this.props.children}
            </button>
        </Square>);
    }
}
