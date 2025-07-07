/*
Kyle Rohlfing
Unit Converter Webb Application
7/7/2025
/*

/*
CONVERSIONS:
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputValue = document.getElementById("input-value");
const imperialFeetValue = document.getElementById("imperial-feet-value");
const imperialMetersValue = document.getElementById("imperial-meters-value");
const metricMetersValue = document.getElementById("metric-meters-value");
const metricFeetValue = document.getElementById("metric-feet-value");
const imperialGallonsValue = document.getElementById("imperial-gallons-value");
const imperialLitersValue = document.getElementById("imperial-liters-value");
const metricLitersValue = document.getElementById("metric-liters-value");
const metricGallonsValue = document.getElementById("metric-gallons-value");
const imperialPoundsValue = document.getElementById("imperial-pounds-value");
const imperialKilogramsValue = document.getElementById("imperial-kilograms-value");
const metricKilogramsValue = document.getElementById("metric-kilograms-value");
const metricPoundsValue = document.getElementById("metric-pounds-value");

let numInputValue = +inputValue.value;

function renderConversions() {
    imperialFeetValue.textContent = numInputValue.toFixed(2);
    imperialMetersValue.textContent = convertFeetToMeters(numInputValue).toFixed(2);
}

function convertFeetToMeters(inputValue) {
    return inputValue / 3.281;
}

function convertMetersToFeet(inputValue) {
    return inputValue * 3.281;
}

function convertGallonsToLiters(inputValue) {
    return inputValue * 0.264172;
}

function convertLitersToGallons(inputValue) {
    return inputValue / 0.264172;
}

function convertPoundsToKilograms(inputValue) {
    return inputValue / 2.20462;
}

function convertKilogramsToPounds(inputValue) {
    return inputValue * 2.20462;
}