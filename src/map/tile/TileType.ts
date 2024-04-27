export abstract class TileType {
	abstract colorR: number;
	abstract colorG: number;
	abstract colorB: number;
	id: number;
	isSolid: boolean;
	attack_speed_factor: number = 1;

	abstract render(context: CanvasRenderingContext2D, x: number, y: number): void;
}