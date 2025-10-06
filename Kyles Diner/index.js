// Kyle Rohlfing
// 9/30/2025
// Kyle's Diner - Scrimba Project

import { menuArray } from "./menuItems.js";

const menuContainer = document.getElementById("menuContainer");
const cartContainer = document.getElementById("cartContainer");

let orderArray = [];

menuContainer.addEventListener("click", function(e) {
    let orderedItem = menuArray.filter(function(item) {
        return item.id == e.target.id
        })[0];
    addToOrder(orderedItem);
});

cartContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("removeItemBtn")) {
        let removedItem = orderArray.filter(function(item) {
            return item.id == e.target.id
        })[0];
        removeFromOrder(removedItem);
    }
});

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
        <button class="addToOrderButton" id="${menuItem.id}">+</button>
    </div>
    `;
}

function addToOrder(orderedItem) {
    orderArray.push(orderedItem);
    renderCart();
}

function removeFromOrder(removedItem) {
    // console.log(removedItem);
}

function renderCart() {
    let orderItemsHtml = `<ul class="itemList" id="itemList">`;
    orderArray.forEach(item => {
        orderItemsHtml += `
            <li class="cartItem">${item.name}<button class="removeItemBtn">Remove</button> <span class="itemPrice">$${item.price}</span></li>
        `;
    });
    orderItemsHtml += `</ul>`;
    document.getElementById("cartItemsContainer").innerHTML = orderItemsHtml;
    cartContainer.style.display = "block";
}

renderMenu();