/**
 * @author WMXPY
 * @namespace Button
 * @description Square Button
 */

import * as React from "react";
import { CoreButton, CoreButtonProps, HoldConfig } from "./components/button";
import { Hoverable, HoverableProps } from "./components/hoverable";
import { OperationFunctionElement, OperationWidget } from "./widgets/operation";

export type SquareButtonProps = {

    readonly buttonProps?: CoreButtonProps;
    readonly operationWidgetStyle?: React.CSSProperties;
    readonly operationWidgetClassName?: string;
    readonly width?: string;
} & HoverableProps & Pick<CoreButtonProps, 'holds' | 'allowRepeat'>;

export type SquareButtonStates = {

    readonly processing: boolean;
    readonly duration: number;
};

export class SquareButton extends React.Component<SquareButtonProps, SquareButtonStates> {

    public readonly state: SquareButtonStates = {

        processing: false,
        duration: 0,
    };

    public constructor(props: SquareButtonProps) {

        super(props);

        this._handleStartHold = this._handleStartHold.bind(this);
        this._handleStopHold = this._handleStopHold.bind(this);
    }

    public render() {

        return (<Hoverable
            render={this._renderHoverableContent()}
            zIndex={this.props.zIndex}
            position={this.props.position}
            className={this.props.className}
            style={{
                ...this.props.style,
                width: this.props.width,
            }}
        >
            <CoreButton
                {...this.props.buttonProps}
                width={this.props.width}
                holds={this.props.holds}
                onStartHold={this._handleStartHold}
                onStopHold={this._handleStopHold}
                allowRepeat={this.props.allowRepeat}
            >
                {this.props.children}
            </CoreButton>
        </Hoverable>);
    }

    private _handleStartHold(key: string, config: HoldConfig) {

        if (this.props.buttonProps && this.props.buttonProps.onStartHold) {
            this.props.buttonProps.onStartHold(key, config);
        }

        this.setState({
            processing: true,
            duration: config.duration,
        });
    }

    private _handleStopHold(key: string, config: HoldConfig) {

        if (this.props.buttonProps && this.props.buttonProps.onStopHold) {
            this.props.buttonProps.onStopHold(key, config);
        }

        this.setState({
            processing: false,
            duration: 0,
        });
    }

    private _renderHoverableContent() {

        if (!this.props.holds) {
            return this.props.render;
        }

        return (<React.Fragment>
            {this.props.render}
            <OperationWidget
                style={this.props.operationWidgetStyle}
                className={this.props.operationWidgetClassName}
                duration={`${this.state.duration}ms`}
                processing={this.state.processing}
                elements={this._getElements(this.props.holds)}
            />
        </React.Fragment>);
    }

    private _getElements(holds: Record<string, HoldConfig>): OperationFunctionElement[] {

        const keys: string[] = Object.keys(holds);
        return keys.map((key: string) => ({
            key,
            text: (holds[key] as HoldConfig).name,
        }));
    }
}
