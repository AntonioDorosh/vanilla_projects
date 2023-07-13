import {sectionCenter} from "../main.js";
import {formatCurrency} from "./utils/formatCurrency.js";

export const displayMenu = (menuItems) => {
    sectionCenter.innerHTML = menuItems.map(displayMenuItem).join('');
}

const displayMenuItem = (menuItem) => {
    return `
        <article class="menu-item">
            <img src=${menuItem.img} alt=${menuItem.title} class="photo"/>
            <div class="item-info">
                <header>
                    <h4>${menuItem.title}</h4>
                    <h4 class="price">${formatCurrency(menuItem.price)}</h4>
                </header>
                <p class="item-text">
                ${menuItem.desc}
                </p>
            </div>
        </article>
        `
}