import {TileType} from "./TileType";

export class MountainTile extends TileType {
    colorR: number = 183;
    colorG: number = 176;
    colorB: number = 156;
    isSolid: boolean = true;
    attack_speed_factor: number = 200;

    render(context: CanvasRenderingContext2D, x: number, y: number): void {
        //TODO sprite ?
    }
}