/**
 * @author WMXPY
 * @namespace Widgets
 * @description Template
 */

import { Classes } from "jss";
import * as React from "react";
import { TemplateWidgetStyle } from "../style/widgets/template";

export type TemplateWidgetProps = {

    readonly title: string;
    readonly icon?: React.ReactNode;
    readonly iconContainerStyle?: React.CSSProperties;
};

export class TemplateWidget extends React.PureComponent<TemplateWidgetProps> {

    private readonly _templateStyle: Classes = TemplateWidgetStyle.use();

    public render() {

        return (<div>
        </div>);
    }
}
