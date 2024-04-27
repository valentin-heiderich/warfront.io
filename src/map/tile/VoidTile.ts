import {TileType} from "./TileType";

export class VoidTile extends TileType {
    colorR: number = 85;
    colorG: number = 85;
    colorB: number = 85;
    isSolid: boolean = false;

    render(context: CanvasRenderingContext2D, x: number, y: number): void {
        //TODO sprite ?
    }
}