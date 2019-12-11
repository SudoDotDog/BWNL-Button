/**
 * @author WMXPY
 * @namespace Button
 * @description Square Button
 */

import * as React from "react";
import { CollectorProps } from "../collector";
import { HoverableProps } from "../components/hoverable";
import { SquareButton, SquareButtonProps } from "../components/square-button";
import { Container } from "../container";

export type SquareButtonPrebuiltProps = {

    readonly buttonProps?: SquareButtonProps;
    readonly operationWidgetStyle?: React.CSSProperties;
    readonly operationWidgetClassName?: string;
    readonly width?: string;
} & HoverableProps & CollectorProps;

export type SquareButtonPrebuiltStates = {

    readonly processing: boolean;
    readonly duration: number;
};

export class SquareButtonPrebuilt extends React.Component<SquareButtonPrebuiltProps, SquareButtonPrebuiltStates> {

    public readonly state: SquareButtonPrebuiltStates = {

        processing: false,
        duration: 0,
    };

    public render() {

        return (<Container
            component={SquareButton}
            {...this.props}
        >
            {this.props.children}
        </Container>);
    }
}
