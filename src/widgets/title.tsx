/**
 * @author WMXPY
 * @namespace Widgets
 * @description Title
 */

import { Classes } from "jss";
import * as React from "react";
import { TitleWidgetStyle } from "../style/widgets/title";

export type TitleWidgetProps = {

    readonly title: string;
    readonly icon?: React.ReactNode;
    readonly iconContainerStyle?: React.CSSProperties;
};

export class TitleWidget extends React.PureComponent<TitleWidgetProps> {

    private readonly _titleStyle: Classes = TitleWidgetStyle.use();

    public render() {

        return (<div className={this._titleStyle.wrapper}>
            {this._renderIcon()}
            <div className={this._titleStyle.text}>
                <div className={this._titleStyle.title}>{this.props.title}</div>
                <div className={this._titleStyle.content}>{this.props.children}</div>
            </div>
        </div>);
    }

    private _renderIcon() {

        if (!this.props.icon) {
            return null;
        }
        return (<div
            className={this._titleStyle.icon}
            style={this.props.iconContainerStyle}
        >
            {this.props.icon}
        </div>);
    }
}
