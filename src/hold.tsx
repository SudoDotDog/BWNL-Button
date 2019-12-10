/**
 * @author WMXPY
 * @namespace Button
 * @description Hold
 */

import * as React from "react";

export type HoldableButtonProps = {

};

export type HoldableButtonStates = {


};

export class HoldableButton extends React.Component<HoldableButtonProps, HoldableButtonStates> {

    public readonly state: HoldableButtonStates = {

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
