/**
 * @author WMXPY
 * @namespace Widgets
 * @description Description
 */

import { Classes } from "jss";
import * as React from "react";
import { DescriptionWidgetStyle } from "../style/widgets/description";

export type DescriptionElement = {

    readonly icon?: React.ReactNode;
    readonly text: string;
};

export type DescriptionWidgetProps = {

    readonly title: string;
    readonly descriptions: DescriptionElement[];
};

export class DescriptionWidget extends React.PureComponent<DescriptionWidgetProps> {

    private readonly _descriptionStyle: Classes = DescriptionWidgetStyle.use();

    public render() {

        return (<div>
            {this.props.title}
        </div>);
    }
}
