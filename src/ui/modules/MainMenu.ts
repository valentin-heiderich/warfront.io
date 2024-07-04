import {closeMenu} from "../ModuleLoader";
import {openMenu} from "../ModuleLoader";

(window as any).commandStartGame = function () {
	closeMenu();
	openMenu("MapSelect");
};

(window as any).commandShowCommunity = function () {
	openMenu("CommunityPanel");
};