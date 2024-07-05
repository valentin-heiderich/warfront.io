import {TileType} from "./TileType";
import {TileTypeIds} from "./TileTypeIds";
import {HSLColor} from "../../util/HSLColor";

export class ShallowWaterTile extends TileType {
    readonly id: number = TileTypeIds.SHALLOW_WATER;
    readonly internalName = "shallow_water";
    readonly baseColor: HSLColor = HSLColor.fromRGB(74, 249, 255);
    readonly isSolid: boolean = false;

    render(context: CanvasRenderingContext2D, x: number, y: number): void {
        //TODO sprite ?
    }
}