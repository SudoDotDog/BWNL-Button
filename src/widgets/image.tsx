/**
 * @author WMXPY
 * @namespace Widgets
 * @description Image
 */

import { mergeClasses } from "@sudoo/jss";
import { Classes } from "jss";
import * as React from "react";
import { ImageWidgetStyle } from "../style/widgets/image";
import { fixBackgroundImage } from "../util";

export type ImageWidgetProps = {

    readonly src: string;
    readonly className?: string;
    readonly style?: React.CSSProperties;
    readonly height?: string;
};

export class ImageWidget extends React.PureComponent<ImageWidgetProps> {

    private readonly _imageStyle: Classes = ImageWidgetStyle.use();

    public render() {

        return (<div
            className={mergeClasses(this.props.className, this._imageStyle.wrapper)}
            style={{
                ...this.props.style,
                height: this.props.height,
                backgroundImage: fixBackgroundImage(this.props.src),
            }}
        >
            {this.props.children}
        </div>);
    }
}
