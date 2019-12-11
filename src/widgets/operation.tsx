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
};

export type OperationWidgetStates = {

};

export class OperationWidget extends React.Component<OperationWidgetProps, OperationWidgetStates> {

    public readonly state: OperationWidgetStates = {

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
            }}
        >
            {this._renderFunctions()}
        </div>);
    }

    private _renderFunctions() {

        if (!Array.isArray(this.props.elements)) {
            return null;
        }
        return this.props.elements.map(this._renderFunction);
    }

    private _renderFunction(element: OperationFunctionElement) {

        return (<div>
            <span className={this._operationStyle.key}>
                {element.key}
            </span>
            <span className={this._operationStyle.text}>
                {element.text}
            </span>
        </div>);
    }
}
