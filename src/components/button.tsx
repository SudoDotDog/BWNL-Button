/**
 * @author WMXPY
 * @namespace Button
 * @description Button
 */

import { Classes } from "jss";
import * as React from "react";
import { CoreButtonStyle } from "../style/components/button";
import { Square } from "./square";

export type HoldConfig = {

    readonly duration: number;
    readonly action: () => void;
};

export type CoreButtonProps = {

    readonly style?: React.CSSProperties;
    readonly width?: string;
    readonly block?: boolean;
    readonly borderColor?: string;

    readonly onClick?: () => void;
    readonly onMidClick?: () => void;
    readonly onRightClick?: () => void;

    readonly allowRepeat?: boolean;
    readonly holds?: Record<string, HoldConfig>

    readonly onStartHold?: (key: string, config: HoldConfig) => void;
    readonly onStopHold?: (key: string, config: HoldConfig) => void;
};

export type CoreButtonStates = {


};

export class CoreButton extends React.Component<CoreButtonProps, CoreButtonStates> {

    public readonly state: CoreButtonStates = {

    };

    private readonly _coreButtonStyle: Classes = CoreButtonStyle.use();
    private _holding: string | null = null;
    private _lastHolden: string | null = null;
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
        this._startHold(`mouse${e.which}`);
    }

    private _handleMouseUp(e: MouseEvent) {

        this._stopDefault(e);
        this._stopHold(`mouse${e.which}`);
    }

    private _handleKeyDown(e: KeyboardEvent) {

        this._stopDefault(e);
        this._startHold(e.key);
    }

    private _handleKeyUp(e: KeyboardEvent) {

        this._stopDefault(e);
        this._stopHold(e.key);
    }

    private _stopDefault(e: MouseEvent | KeyboardEvent) {

        e.stopPropagation();
        e.preventDefault();
    }

    private _startHold(key: string) {

        if (!this.props.holds) {
            return;
        }

        if (this.props.holds[key] && !this._holding) {

            if (key === this._lastHolden && !this.props.allowRepeat) {
                return;
            }

            const config: HoldConfig = this.props.holds[key];
            this._holding = key;
            if (this.props.onStartHold) {
                this.props.onStartHold(key, config);
            }

            this._holdTimer = setTimeout(() => {
                config.action();
                this._stopHold(key);
            }, config.duration);
        }
    }

    private _stopHold(key: string) {

        if (!this.props.holds) {
            return;
        }

        if (this._holding === key) {

            clearTimeout(this._holdTimer);
            this._lastHolden = this._holding;
            this._holding = null;

            const config: HoldConfig = this.props.holds[key] as HoldConfig;
            if (this.props.onStopHold) {
                this.props.onStopHold(key, config);
            }
        }
    }

    private _trigger(action?: () => void): boolean {

        if (action) {
            action();
            return true;
        }
        return false;
    }
}
