/**
 * @author WMXPY
 * @namespace Widgets
 * @description Title
 */

import * as React from "react";

export type TitleWidgetProps = {

};

export type TitleWidgetStates = {


};

export class TitleWidget extends React.Component<TitleWidgetProps, TitleWidgetStates> {

    public readonly state: TitleWidgetStates = {

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
