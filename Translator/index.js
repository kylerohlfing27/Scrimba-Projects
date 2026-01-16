/* PollyGlot Translator App */
/* Kyle Rohlfing */
/* 1/6/26 */

const translateButton = document.getElementById("translate-button")
const inputTextArea = document.getElementById("input-text")
const outputTextArea = document.getElementById("output-text")
const languageSelect = document.getElementById("language-select")
const outputLabel = document.getElementById("output-label")
const resetButton = document.getElementById("reset-button")
const loader = document.getElementById("loader")

translateButton.addEventListener("click", () => {
    const inputText = inputTextArea.value
    let selectedLanguage = document.querySelector('input[name="language"]:checked').value

    if(inputText) {
        languageSelect.style.display = "none"
        loader.style.display = "block"
        fetchTranslation(inputText, selectedLanguage).then(translatedText => {
            console.log("Translated Text: ", translatedText)
            renderTranslation(translatedText)
        })
    } else {
        alert("Please enter text to translate.")
    }
})

resetButton.addEventListener("click", renderLanguageSelect)

function renderTranslation(translatedText) {
    loader.style.display = "none"
    outputTextArea.value = translatedText
    outputTextArea.hidden = false
    outputLabel.textContent = "Your Translation:"
    languageSelect.style.display = "none"
    translateButton.hidden = true
    resetButton.hidden = false
}

function renderLanguageSelect() {
    inputTextArea.value = ""
    outputTextArea.value = ""
    outputTextArea.hidden = true
    outputLabel.textContent = "Select Language:"
    languageSelect.style.display = "flex"
    translateButton.hidden = false
    resetButton.hidden = true
}

async function fetchTranslation(text, language) {
    const response = await fetch("http://localhost:3001/translate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text, language })
    })

    const data = await response.json()
    return data.translation
}