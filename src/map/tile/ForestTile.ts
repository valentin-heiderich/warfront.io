import {TileType} from "./TileType";
import {TileTypeIds} from "./TileTypeIds";
import {HSLColor} from "../../util/HSLColor";

export class ForestTile extends TileType {
    readonly id: number = TileTypeIds.FOREST;
    readonly internalName = "forest";
    readonly baseColor: HSLColor = HSLColor.fromRGB(10, 119, 39);
    readonly isSolid: boolean = true;

    readonly expansionTime: number = 70;
    readonly expansionCost: number = 100;

    render(context: CanvasRenderingContext2D, x: number, y: number): void {
        //TODO sprite ?
    }
}