import {menu} from "./data.js";
import {buttonsContainer} from "../main.js";
import {filterMenuItems} from "./filterMenuItems.js";

export const displayButtons = () => {
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values;
    }, ['all']);

    buttonsContainer.innerHTML = categories.map(displayButton).join('')

    const filtersButtons = buttonsContainer.querySelectorAll('.filter-btn');

    filtersButtons.forEach((btn) => {
        btn.addEventListener('click', filterMenuItems)
    })
}

const displayButton = (buttonCategory) => {
    return `
        <button type="button" class="filter-btn" data-id=${buttonCategory}>${buttonCategory}</button>
        `
}