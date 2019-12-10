/**
 * @author WMXPY
 * @namespace Button
 * @description Banner
 */

import * as React from "react";

export type BannerProps = {

};

export type BannerStates = {


};

export class Banner extends React.Component<BannerProps, BannerStates> {

    public readonly state: BannerStates = {

    };

    public render() {

        return React.createElement('div',
            {

            },
            this.props.children,
            React.createElement('div', {

            }, 'hold'),
        );
    }
}
