/**
 * @author WMXPY
 * @namespace Button
 * @description Square Button
 */

import * as React from "react";
import { CoreButton, CoreButtonProps } from "./components/button";
import { Hoverable, HoverableProps } from "./components/hoverable";

export type SquareButtonProps = {

    readonly buttonProps?: CoreButtonProps;
    readonly width?: string;
} & HoverableProps;

export type SquareButtonStates = {


};

export class SquareButton extends React.Component<SquareButtonProps, SquareButtonStates> {

    public readonly state: SquareButtonStates = {

    };

    public render() {

        return (<Hoverable
            render={this.props.render}
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
            >
                {this.props.children}
            </CoreButton>
        </Hoverable>);
    }
}
