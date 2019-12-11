/**
 * @author WMXPY
 * @namespace Button
 * @description Widgets
 */

import { DescriptionWidget } from "./widgets/descriptions";
import { ImageWidget } from "./widgets/image";
import { OperationWidget } from "./widgets/operation";
import { TitleWidget } from "./widgets/title";

export const Widgets = {
    Description: DescriptionWidget,
    Image: ImageWidget,
    Operation: OperationWidget,
    Title: TitleWidget,
};

export * from "./widgets/descriptions";
export * from "./widgets/image";
export * from "./widgets/operation";
export * from "./widgets/title";

