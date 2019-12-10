/**
 * @author WMXPY
 * @namespace Widgets
 * @description Image
 */

import { Classes } from "jss";
import * as React from "react";
import { ImageWidgetStyle } from "../style/widgets/image";

export type ImageWidgetProps = {

    readonly src: string;
    readonly alt?: string;
};

export class ImageWidget extends React.PureComponent<ImageWidgetProps> {

    private readonly _imageStyle: Classes = ImageWidgetStyle.use();

    public render() {

        return (<div className={this._imageStyle.wrapper}>
            <img
                className={this._imageStyle.image}
                src={this.props.src}
                alt={this.props.alt}
            />
        </div>);
    }
}
