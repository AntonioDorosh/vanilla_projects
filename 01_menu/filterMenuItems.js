import {menu} from "./data.js";
import {displayMenu} from "./displayMenu.js";

export const filterMenuItems = (event) => {
    const category = event.currentTarget.dataset.id;
    const filteredMenu = menu.filter((item) => item.category === category || category === "all");
    displayMenu(filteredMenu);
}