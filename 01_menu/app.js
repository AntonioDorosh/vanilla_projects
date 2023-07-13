import {buttonsContainer, sectionCenter} from "../main.js";
import {menu} from "./data.js";
import {formatCurrency} from "./utils/formatCurrency.js";

export const displayMenu = (menuItems) => {
    sectionCenter.innerHTML = menuItems.map((menuItem) => {
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
    }).join('')
};

export const displayButtons = () => {
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values;
    }, ['all']);

    buttonsContainer.innerHTML = categories.map((buttonCategory) => {
        return `
        <button type="button" class="filter-btn" data-id=${buttonCategory}>${buttonCategory}</button>
        `
    }).join('')

    const filtersButtons = buttonsContainer.querySelectorAll('.filter-btn');

    filtersButtons.forEach((btn) => {
        btn.addEventListener('click', filterMenuItems)
    })
}

const filterMenuItems = (event) => {
    const category = event.currentTarget.dataset.id;
    const filteredMenu = menu.filter((item) => item.category === category || category === "all");
    displayMenu(filteredMenu);
}