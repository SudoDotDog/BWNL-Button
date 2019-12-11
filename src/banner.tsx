/**
 * @author WMXPY
 * @namespace Button
 * @description Banner
 */

import * as React from "react";

export type BannerProps = {

    readonly className?: string;
    readonly style?: React.CSSProperties;
};

export type BannerStates = {


};

export class Banner extends React.Component<BannerProps, BannerStates> {

    public readonly state: BannerStates = {

    };

    public render() {

        return (<div
            className={this.props.className}
            style={this.props.style}
        >
            {this.props.children}
        </div>);
    }
}
