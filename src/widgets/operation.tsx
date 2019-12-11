/**
 * @author WMXPY
 * @namespace Widgets
 * @description Operation
 */

import { mergeClasses } from "@sudoo/jss";
import { Classes } from "jss";
import * as React from "react";
import { OperationWidgetStyle } from "../style/widgets/operation";

export type OperationFunctionElement = {

    readonly key: string;
    readonly text: string;
};

export type OperationWidgetProps = {

    readonly elements: OperationFunctionElement[];
    readonly height?: string;
    readonly className?: string;
    readonly style?: React.CSSProperties;
    readonly zIndex?: number;

    readonly backgroundColor?: string;
    readonly foregroundColor?: string;
    readonly textColor?: string;
};

export type OperationWidgetStates = {

    readonly processing: boolean;
};

export class OperationWidget extends React.Component<OperationWidgetProps, OperationWidgetStates> {

    public readonly state: OperationWidgetStates = {

        processing: false,
    };

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

        return (<div
            className={this._operationStyle.progress}
            style={{
                // tslint:disable-next-line: no-magic-numbers
                zIndex: this.props.zIndex || 13,
                backgroundColor: this.props.foregroundColor || 'darkgray',
                animation: 'bwnl-button-operation-progress 7s infinite linear',
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

        return (<div style={{
            // tslint:disable-next-line: no-magic-numbers
            zIndex: this.props.zIndex + 1 || 14,
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
