import {TileType} from "./TileType";
import {TileTypeIds} from "./TileTypeIds";
import {HSLColor} from "../../util/HSLColor";

export class MountainTile extends TileType {
    readonly id: number = TileTypeIds.MOUNTAIN;
    readonly internalName = "mountain";
    readonly baseColor: HSLColor = HSLColor.fromRGB(92, 73, 73);
    readonly isSolid: boolean = true;

    readonly expansionTime: number = 200;
    readonly expansionCost: number = 200;

    render(context: CanvasRenderingContext2D, x: number, y: number): void {
        //TODO sprite ?
    }
}