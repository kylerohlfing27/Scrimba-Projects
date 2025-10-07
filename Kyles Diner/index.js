// Kyle Rohlfing
// 9/30/2025
// Kyle's Diner - Scrimba Project

import { menuArray } from "./menuItems.js";

const menuContainer = document.getElementById("menuContainer");
const cartContainer = document.getElementById("cartContainer");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartTotalAmount = document.getElementById("totalAmount");
const completeOrderBtn = document.getElementById("completeOrderBtn");
const completeOrderModal = document.getElementById("completeOrderModal");
const completeOrderForm = document.getElementById("completeOrderForm");

let orderArray = [];

menuContainer.addEventListener("click", function(e) {
    if(e.target.classList.contains("addToOrderButton")) {
        let orderedItem = menuArray.filter(function(item) {
        return item.id == e.target.id
        })[0];
        console.log(orderedItem)
        addToOrder(orderedItem);
    }
});

cartContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("removeItemBtn")) {
        removeFromOrder(e.target.dataset.cartId)
    }
    if (e.target.classList.contains("startNewOrderBtn")) {
        cartContainer.innerHTML = ``;
        startNewOrder();
    }
});

completeOrderBtn.addEventListener("click", function() {
    completeOrderModal.classList.remove("hidden");
});

completeOrderForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const nameInput = document.getElementById("nameInput").value;
    completeOrderModal.classList.add("hidden");
    orderArray = [];
    renderCart();
    cartContainer.innerHTML = `<div class="thankYouContainer"><h2 class="thankYouMessage">Thanks, ${nameInput}! Your order is on its way!</h2></div>`; //<button class="startNewOrderBtn">Start New Order</button> **FOR LATER**
    cartContainer.classList.remove("hidden");
});

function startNewOrder() {
    orderArray = [];
    cartContainer.classList.add("hidden");
    renderMenu();
};

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

function removeFromOrder(removedIndex) {
    orderArray.splice(removedIndex, 1);
    renderCart();
}

function renderCart() {
    let totalPrice = 0;
    let orderItemsHtml = ``;
    
    if(orderArray.length != 0){
        cartContainer.classList.remove("hidden");
        orderItemsHtml = `<ul class="itemList" id="itemList">`;
        orderArray.forEach((item, index) => {
            orderItemsHtml += `
                <li class="cartItem">${item.name}<button class="removeItemBtn" data-cart-id="${index}">Remove</button> <span class="itemPrice">$${item.price}</span></li>
            `;
            totalPrice += item.price;
        });
        orderItemsHtml += `</ul>`;
        cartItemsContainer.innerHTML = orderItemsHtml;
        cartTotalAmount.innerHTML = `$${totalPrice}`;
    } else {
        cartContainer.classList.add("hidden");
    }
}

renderMenu();