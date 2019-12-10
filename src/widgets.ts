/**
 * @author WMXPY
 * @namespace Button
 * @description Widgets
 */

import { DescriptionWidget } from "./widgets/descriptions";
import { ImageWidget } from "./widgets/image";
import { TitleWidget } from "./widgets/title";

export const Widgets = {
    Description: DescriptionWidget,
    Image: ImageWidget,
    Title: TitleWidget,
};

export * from "./widgets/descriptions";
export * from "./widgets/image";
export * from "./widgets/title";

