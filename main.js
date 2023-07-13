import {menu} from "./01_menu/data.js";
import {displayMenu} from "./01_menu/displayMenu.js";
import {displayButtons} from "./01_menu/displayButtons.js";

export const sectionCenter = document.querySelector('.section-center');
export const buttonsContainer = document.querySelector('.btn-container');

document.addEventListener('DOMContentLoaded', () => {
    displayMenu(menu);
    displayButtons()
})