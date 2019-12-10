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

    public constructor(props: DescriptionWidgetProps) {

        super(props);

        this._renderDescription = this._renderDescription.bind(this);
    }

    public render() {

        return (<div className={this._descriptionStyle.wrapper}>
            <div className={this._descriptionStyle.title}>
                {this.props.title}
            </div>
            <div className={this._descriptionStyle.descriptions}>
                {this._renderDescriptions()}
            </div>
        </div>);
    }

    private _renderDescriptions() {

        const descriptions: DescriptionElement[] = this.props.descriptions;
        if (!Array.isArray(descriptions)) {
            return null;
        }

        return descriptions.map(this._renderDescription);
    }

    private _renderDescription(description: DescriptionElement, index: number) {

        if (description.icon) {

            return (<div
                key={index}
                className={this._descriptionStyle.complex}
            >
                <div className={this._descriptionStyle.complexIcon}>{description.icon}</div>
                <div className={this._descriptionStyle.complexText}>{description.text}</div>
            </div>);
        }

        return (<div key={index}>
            {description.text}
        </div>);
    }
}
