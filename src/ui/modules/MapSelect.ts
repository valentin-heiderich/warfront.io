import {startGame} from "../../game/Game";
import {mapFromId} from "../../map/MapRegistry";
import {closeMenu} from "../ModuleLoader";
import {openMenu} from "../ModuleLoader";
import {FFAGameMode} from "../../game/mode/FFAGameMode";

let container = (document as any).getElementById("container");
let mapCount = 0;

(window as any).commandLoadMaps = function () {
    let i = 0;
    let error = false;
    container.innerHTML = "<button class=\"wf-btn wf-btn-primary wf-btn-featured wf-btn-block\" onclick=\"window.commandLoadMap()\">Random</button>";
    while(!error){
        try {
            let map = mapFromId(i);
            container.innerHTML += "<button class=\'wf-btn wf-btn-primary wf-btn-featured wf-btn-block\' onclick=window.commandLoadMap(" + i +")>" + map.name + "</button>";
            i++;
        } catch (e) {
            error = true;
            mapCount = i;
        }
    }
};

(window as any).commandLoadMap = function (id: number = Math.floor(Math.random() * mapCount)) {
    closeMenu();
    openMenu("GameHud");
    startGame(mapFromId(id), new FFAGameMode());
};