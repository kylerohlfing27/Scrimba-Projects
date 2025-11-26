// Kyle Rohlfing
// 9/30/2025
// Kyle's Diner - Scrimba Project

import { menuArray } from "./menuItems.js";

const menuContainer = document.getElementById("menuContainer");
const addToOrderBtn = document.querySelector(".addToOrderButton");


// Render Items to the Page

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

// Event Listener for Add to Order Buttons

addToOrderBtn.addEventListener("click", function(e) {
    console.log("Add to Order button clicked");
    console.loglog(e);
});