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
    readonly onMidClick?: () => void;
    readonly onRightClick?: () => void;
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
        window.addEventListener('mouseup', this._handleMouseUp);
        window.addEventListener('keydown', this._handleKeyDown);
        window.addEventListener('keyup', this._handleKeyUp);
    }

    private _handleMouseOut() {

        window.removeEventListener('mousedown', this._handleMouseDown);
        window.removeEventListener('mouseup', this._handleMouseUp);
        window.removeEventListener('keydown', this._handleKeyDown);
        window.removeEventListener('keyup', this._handleKeyUp);
    }

    private _handleMouseDown(e: MouseEvent) {

        this._stopDefault(e);
        switch (e.which) {
            case 1: this._trigger(this.props.onClick); break;
            case 2: this._trigger(this.props.onMidClick); break;
            case 3: this._trigger(this.props.onRightClick); break;
        }
    }

    private _handleMouseUp(e: MouseEvent) {

        this._stopDefault(e);
        console.log(e);
    }

    private _handleKeyDown(e: KeyboardEvent) {

        this._stopDefault(e);
        console.log(e);
    }

    private _handleKeyUp(e: KeyboardEvent) {

        this._stopDefault(e);
        console.log(e);
    }

    private _stopDefault(e: MouseEvent | KeyboardEvent) {

        e.stopPropagation();
        e.preventDefault();
    }

    private _trigger(action?: () => void): boolean {

        if (action) {
            action();
            return true;
        }
        return false;
    }
}
