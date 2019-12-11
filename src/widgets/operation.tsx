/**
 * @author WMXPY
 * @namespace Widgets
 * @description Operation
 */

import { mergeClasses } from "@sudoo/jss";
import { Classes } from "jss";
import * as React from "react";
import { OperationWidgetStyle } from "../style/widgets/operation";

enum DEFAULT_VALUES {

    FOREGROUND_Z_INDEX = 13,
    TEXT_Z_INDEX = 14,
    DURATION = '3s',
}

export type OperationFunctionElement = {

    readonly key: string;
    readonly text: string;
};

export type OperationWidgetProps = {

    readonly elements: OperationFunctionElement[];
    readonly height?: string;
    readonly className?: string;
    readonly style?: React.CSSProperties;

    readonly duration?: string;
    readonly zIndex?: number;
    readonly backgroundColor?: string;
    readonly foregroundColor?: string;
    readonly textColor?: string;

    readonly processing?: boolean;
};

export class OperationWidget extends React.Component<OperationWidgetProps> {

    private readonly _operationStyle: Classes = OperationWidgetStyle.use();

    public constructor(props: OperationWidgetProps) {

        super(props);

        this._renderFunction = this._renderFunction.bind(this);
    }

    public render() {

        return (<div
            className={mergeClasses(this.props.className, this._operationStyle.wrapper)}
            style={{
                ...this.props.style,
                height: this.props.height,
                backgroundColor: this.props.backgroundColor || 'gray',
            }}
        >
            {this._renderProgress()}
            {this._renderFunctions()}
        </div>);
    }

    private _renderProgress() {

        if (!this.props.processing) {
            return null;
        }

        const zIndex: number = this.props.zIndex || DEFAULT_VALUES.FOREGROUND_Z_INDEX;
        const duration: string = this.props.duration || DEFAULT_VALUES.DURATION;
        return (<div
            className={this._operationStyle.progress}
            style={{
                zIndex,
                backgroundColor: this.props.foregroundColor || 'darkgray',
                animationDuration: duration,
            }}
        />);
    }

    private _renderFunctions() {

        if (!Array.isArray(this.props.elements)) {
            return null;
        }
        return this.props.elements.map(this._renderFunction);
    }

    private _renderFunction(element: OperationFunctionElement) {

        const zIndex: number = this.props.zIndex ? this.props.zIndex + 1 : DEFAULT_VALUES.TEXT_Z_INDEX;
        return (<div style={{
            zIndex,
            color: this.props.textColor || 'white',
        }}>
            <span
                className={this._operationStyle.key}
                style={{
                    borderColor: this.props.textColor || 'white',
                }}
            >
                {element.key}
            </span>
            <span className={this._operationStyle.text}>
                {element.text}
            </span>
        </div>);
    }
}
