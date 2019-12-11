/**
 * @author WMXPY
 * @namespace Button
 * @description Square
 */

import { mergeClasses } from "@sudoo/jss";
import { Classes } from "jss";
import * as React from "react";
import { SquareStyle } from "../style/square";

export type SquareProps = {

    readonly style?: React.CSSProperties;
    readonly className?: string;
    readonly wrapperStyle?: React.CSSProperties;
    readonly wrapperClassName?: string;
    readonly contentStyle?: React.CSSProperties;
    readonly contentClassName?: string;
    readonly width?: string;
};

export class Square extends React.Component<SquareProps> {

    private readonly _squareStyle: Classes = SquareStyle.use();

    public render() {

        return (<div
            className={this.props.className}
            style={{
                ...this.props.style,
                width: this.props.width,
            }}
        >
            <div
                className={mergeClasses(this._squareStyle.wrapper, this.props.wrapperClassName)}
                style={this.props.wrapperStyle}
            >
                <div
                    className={mergeClasses(this._squareStyle.content, this.props.contentClassName)}
                    style={this.props.contentStyle}
                >
                    {this.props.children}
                </div>
            </div>
        </div>);
    }
}
