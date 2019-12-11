/**
 * @author WMXPY
 * @namespace Button
 * @description Banner
 */

import { mergeClasses } from "@sudoo/jss";
import { Classes } from "jss";
import * as React from "react";
import { BannerStyle } from "./style/banner";

export type BannerProps = {

    readonly className?: string;
    readonly width?: string;
    readonly style?: React.CSSProperties;
};

export type BannerStates = {


};

export class Banner extends React.Component<BannerProps, BannerStates> {

    public readonly state: BannerStates = {

    };

    private readonly _bannerStyle: Classes = BannerStyle.use();

    public render() {

        return (<div
            className={mergeClasses(this.props.className, this._bannerStyle.wrapper)}
            style={{
                ...this.props.style,
                width: this.props.width,
            }}
        >
            {this.props.children}
        </div>);
    }
}
