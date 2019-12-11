/**
 * @author WMXPY
 * @namespace Button
 * @description Container
 */

import * as React from "react";
import { Collector, CollectorProps, HoldConfig } from "./collector";
import { Hoverable, HoverableProps } from "./components/hoverable";
import { OperationFunctionElement, OperationWidget } from "./widgets/operation";

export type ContainerProps = {

    readonly operationWidgetStyle?: React.CSSProperties;
    readonly operationWidgetClassName?: string;
    readonly width?: string;
} & HoverableProps & CollectorProps;

export type ContainerStates = {

    readonly processing: boolean;
    readonly duration: number;
};

export class Container extends React.Component<ContainerProps, ContainerStates> {

    public readonly state: ContainerStates = {

        processing: false,
        duration: 0,
    };

    public constructor(props: ContainerProps) {

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
            <Collector
                {...this.props}
                holds={this.props.holds}
                onStartHold={this._handleStartHold}
                onStopHold={this._handleStopHold}
                allowRepeat={this.props.allowRepeat}
            >
                {this.props.children}
            </Collector>
        </Hoverable>);
    }

    private _handleStartHold(key: string, config: HoldConfig) {

        if (this.props.onStartHold) {
            this.props.onStartHold(key, config);
        }

        this.setState({
            processing: true,
            duration: config.duration,
        });
    }

    private _handleStopHold(key: string, config: HoldConfig) {

        if (this.props.onStopHold) {
            this.props.onStopHold(key, config);
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
