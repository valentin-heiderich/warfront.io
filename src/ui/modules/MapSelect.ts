import {startGame} from "../../game/Game";
import {mapFromId} from "../../map/MapRegistry";
import {closeMenu} from "../ModuleLoader";
import {openMenu} from "../ModuleLoader";
import {FFAGameMode} from "../../game/mode/FFAGameMode";

(window as any).mapEurope = function () {
    closeMenu();
    openMenu("GameHud");
    startGame(mapFromId(0), new FFAGameMode());
};
(window as any).mapEuropeTerrain = function () {
    closeMenu();
    openMenu("GameHud");
    startGame(mapFromId(1), new FFAGameMode());
};
(window as any).mapWorld = function () {
    closeMenu();
    openMenu("GameHud");
    startGame(mapFromId(2), new FFAGameMode());
};