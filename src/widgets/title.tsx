/**
 * @author WMXPY
 * @namespace Widgets
 * @description Title
 */

import { mergeClasses } from "@sudoo/jss";
import { Classes } from "jss";
import * as React from "react";
import { TitleWidgetStyle } from "../style/widgets/title";
import { fixBackgroundImage } from "../util";

export type TitleWidgetProps = {

    readonly title: string;
    readonly icon?: React.ReactNode;
    readonly iconImage?: string;
    readonly iconWidth?: string;
    readonly iconContainerStyle?: React.CSSProperties;
    readonly style?: React.CSSProperties;
    readonly className?: string;
};

export class TitleWidget extends React.PureComponent<TitleWidgetProps> {

    private readonly _titleStyle: Classes = TitleWidgetStyle.use();

    public render() {

        return (<div
            className={mergeClasses(this.props.className, this._titleStyle.wrapper)}
            style={this.props.style}
        >
            {this._renderIcon()}
            <div className={this._titleStyle.text}>
                <div className={this._titleStyle.title}>{this.props.title}</div>
                <div className={this._titleStyle.content}>{this.props.children}</div>
            </div>
        </div>);
    }

    private _renderIcon() {

        if (!this.props.icon && !this.props.iconImage) {
            return null;
        }
        return (<div
            className={this._titleStyle.icon}
            style={{
                width: this.props.iconWidth,
                ...this.props.iconContainerStyle,
                backgroundImage: fixBackgroundImage(this.props.iconImage),
            }}
        >
            {this.props.icon}
        </div>);
    }
}
