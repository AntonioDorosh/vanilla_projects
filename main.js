import {displayButtons, displayMenu} from "./01_menu/app.js";
import {menu} from "./01_menu/data.js";

export const sectionCenter = document.querySelector('.section-center');
export const buttonsContainer = document.querySelector('.btn-container');

document.addEventListener('DOMContentLoaded', () => {
    displayMenu(menu);
    displayButtons()
})