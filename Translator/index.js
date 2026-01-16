/* PollyGlot Translator App */
/* Kyle Rohlfing */
/* 1/6/26 */

const translateButton = document.getElementById("translate-button")
const inputTextArea = document.getElementById("input-text")
const outputTextArea = document.getElementById("output-text")
const languageSelect = document.getElementById("language-select")
const outputLabel = document.getElementById("output-label")
const resetButton = document.getElementById("reset-button")

translateButton.addEventListener("click", () => {
    const inputText = inputTextArea.value
    let selectedLanguage = document.querySelector('input[name="language"]:checked').value

    // CALL TRANSLATION API HERE
    renderTranslation("Hello")
})

resetButton.addEventListener("click", renderLanguageSelect)

function renderTranslation(translatedText) {
    outputTextArea.value = translatedText
    outputTextArea.hidden = false
    outputLabel.textContent = "Your Translation:"
    languageSelect.style.display = "none"
    translateButton.hidden = true
    resetButton.hidden = false
}

function renderLanguageSelect() {
    outputTextArea.hidden = true
    outputLabel.textContent = "Select Language:"
    languageSelect.style.display = "flex"
    translateButton.hidden = false
    resetButton.hidden = true
}