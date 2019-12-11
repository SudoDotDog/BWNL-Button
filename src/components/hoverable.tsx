/**
 * @author WMXPY
 * @namespace Button
 * @description Hoverable
 */

import * as React from "react";

export type HoverableProps = {

    readonly render?: React.ReactNode;
    readonly zIndex?: number;
    readonly position?: 'top-left' | 'bottom-right';
};

export type HoverableStates = {

    readonly hovering: boolean;
    readonly x: number;
    readonly y: number;
};

export class Hoverable extends React.Component<HoverableProps, HoverableStates> {

    public readonly state: HoverableStates = {

        hovering: false,
        x: 0,
        y: 0,
    };

    private _ref: HTMLDivElement | null = null;

    public constructor(props: HoverableProps) {

        super(props);

        this._handleMouseEnter = this._handleMouseEnter.bind(this);
        this._handleMouseMove = this._handleMouseMove.bind(this);
        this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    public render() {

        return (<React.Fragment>
            <div
                onMouseEnter={this._handleMouseEnter}
                onMouseMove={this._handleMouseMove}
                onMouseLeave={this._handleMouseLeave}
            >
                {this.props.children}
            </div>
            <div
                ref={(element: HTMLDivElement | null) => this._ref = element}
                style={{
                    position: 'fixed',
                    top: this.state.y,
                    left: this.state.x,
                    // tslint:disable-next-line: no-magic-numbers
                    zIndex: this.props.zIndex || 15,
                    userSelect: 'none',
                    pointerEvents: 'none',
                }}>
                {this._renderOverlay()}
            </div>
        </React.Fragment>);
    }

    private _renderOverlay() {

        if (this.state.hovering) {
            return this.props.render;
        }
        return null;
    }

    private _handleMouseEnter(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {

        this.setState({
            hovering: true,
            x: this._getPositionX(event.clientX),
            y: this._getPositionY(event.clientY),
        });
    }

    private _handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {

        this.setState({
            x: this._getPositionX(event.clientX),
            y: this._getPositionY(event.clientY),
        });
    }

    private _handleMouseLeave(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {

        this.setState({
            hovering: false,
            x: 0,
            y: 0,
        });
    }

    private _getPositionX(x: number): number {

        if (!this._ref) {
            return x;
        }

        const width: number = this._ref.clientWidth || 0;

        if (this.props.position === 'bottom-right') {

            const viewWidth: number = window.innerWidth;
            if (viewWidth - x > width) {
                return x;
            }
            return x - width;
        } else {

            if (x < width) {
                return x;
            }
            return x - width;
        }
    }

    private _getPositionY(y: number): number {

        if (!this._ref) {
            return y;
        }

        const height: number = this._ref.clientHeight || 0;

        if (this.props.position === 'bottom-right') {

            const viewHeight: number = window.innerHeight;
            if (viewHeight - y > height) {
                return y;
            }
            return y - height;
        } else {

            if (y < height) {
                return y;
            }
            return y - height;
        }
    }
}
