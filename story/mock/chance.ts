/**
 * @author WMXPY
 * @namespace Story
 * @description Chance
 * @override Mock
 */

import * as Chance from "chance";

export const createChance: () => Chance.Chance = () => new Chance('BWNL-Button');
