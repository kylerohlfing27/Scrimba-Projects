// Kyle Rohlfing
// 9/30/2025
// Kyle's Diner - Scrimba Project

import { menuArray } from "./menuItems.js";

const menuContainer = document.getElementById("menuContainer");

function renderMenu() {
    let menuHtml = ``;
    menuArray.forEach(menuItem => {
        menuHtml += getMenuItemHtml(menuItem);
    })
    menuContainer.innerHTML = menuHtml;
}

function getMenuItemHtml(menuItem) {
    return `
    <div class="menuItem roboto">
        <p class="menuEmoji">${menuItem.emoji}</p>
        <div class="menuItemDetails">
            <h2 class="menuItemName">${menuItem.name}</h2>
            <p class="menuItemIngredients">${menuItem.ingredients.join(", ")}</p>
            <p class="menuItemPrice">$${menuItem.price}</p>
        </div>
        <button class="addToOrderButton">+</button>
    </div>
    `;
}

renderMenu();