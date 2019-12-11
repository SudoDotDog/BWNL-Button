/**
 * @author WMXPY
 * @namespace Button
 * @description Button
 */

import { Classes } from "jss";
import * as React from "react";
import { CoreButtonStyle } from "../style/components/button";
import { Square } from "./square";

export type CoreButtonProps = {

    readonly style?: React.CSSProperties;
    readonly width?: string;
    readonly block?: boolean;
    readonly borderColor?: string;

    readonly onClick?: () => void;
};

export type CoreButtonStates = {


};

export class CoreButton extends React.Component<CoreButtonProps, CoreButtonStates> {

    public readonly state: CoreButtonStates = {

    };

    private readonly _coreButtonStyle: Classes = CoreButtonStyle.use();
    private _holdTimer: any;

    public constructor(props: CoreButtonProps) {

        super(props);

        this._handleMouseIn = this._handleMouseIn.bind(this);
        this._handleMouseOut = this._handleMouseOut.bind(this);

        this._handleMouseDown = this._handleMouseDown.bind(this);
        this._handleMouseUp = this._handleMouseUp.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this._handleKeyUp = this._handleKeyUp.bind(this);
    }

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
                onContextMenu={(e) => e.preventDefault()}
                onMouseEnter={this._handleMouseIn}
                onMouseLeave={this._handleMouseOut}
            >
                {this.props.children}
            </button>
        </Square>);
    }

    private _handleMouseIn() {

        window.addEventListener('mousedown', this._handleMouseDown);
        window.removeEventListener('mouseup', this._handleMouseUp);
    }

    private _handleMouseOut() {

        window.removeEventListener('mousedown', this._handleMouseDown);
        window.removeEventListener('mouseup', this._handleMouseUp);
    }

    private _handleMouseDown(e: MouseEvent) {

        e.stopPropagation();
        e.preventDefault();
        console.log(e);
    }

    private _handleMouseUp(e: MouseEvent) {

        console.log(e);
    }

    private _handleKeyDown() {


    }

    private _handleKeyUp() {


    }
}
