// Color Scheme Generator Scripts
// Kyle Rohlfing
// 11/25/25

const colorPicker = document.getElementById('color-picker')
const schemeType = document.getElementById('scheme-type')
const getSchemeBtn = document.getElementById('get-scheme')
const colorBlock1 = document.getElementById('color-1')
const colorBlock2 = document.getElementById('color-2')
const colorBlock3 = document.getElementById('color-3')
const colorBlock4 = document.getElementById('color-4')
const colorBlock5 = document.getElementById('color-5')

const baseUrl = 'https://www.thecolorapi.com/'
let endpoint = 'scheme'
let colorHex = colorPicker.value.substring(1) // Remove the '#' character
let format = 'json'
let mode = schemeType.value
let count = 5

function getColorScheme() {
    
}

fetch(`${baseUrl}${endpoint}?hex=${colorHex}&format=${format}&mode=${mode}&count=${count}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderColorScheme(data.colors)
    })

function renderColorScheme(colorsArray) {
    colorsArray.forEach((colorObj, index) => {
        console.log(colorObj, index)
        const colorBlock = document.getElementById(`color-${index + 1}`)
        const hexCodeDisplay = document.getElementById(`hex-${index + 1}`)

        colorBlock.style.backgroundColor = colorObj.hex.value
        hexCodeDisplay.innerHTML = `<p>${colorObj.hex.value}</p>`
    })
}

// function getColorScheme(hexValue, schemeType) {
// }

// Event Listeners

getSchemeBtn.addEventListener('click', () => {
    getColorScheme(colorPicker.value.substring(1), schemeType.value)
})