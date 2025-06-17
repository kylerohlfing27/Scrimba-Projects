// - Password Generator
// - Kyle Rohlfing
// - 06/2025

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePasswords() {
    let password1 = "";
    let password2 = "";

    for (let i = 0; i < 15; i++) {
        const randomIndex1 = Math.floor(Math.random() * characters.length);
        const randomIndex2 = Math.floor(Math.random() * characters.length);
        password1 += characters[randomIndex1];
        password2 += characters[randomIndex2];
    }

    document.getElementById("password1").textContent = password1;
    document.getElementById("password2").textContent = password2;
}

function copyPassword(passwordNumber) {
    const passwordText = document.getElementById(`password${passwordNumber}`).textContent;
    navigator.clipboard.writeText(passwordText)
        .then(() => {
            alert(`Password ${passwordNumber} copied to clipboard!`);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy password. Please try again.');
        });
}

function updateLengthValue() {
    const lengthValue = document.getElementById("lengthValue");
    const lengthSlider = document.getElementById("lengthSlider");
    lengthValue.textContent = lengthSlider.value;
    generatePasswords();
}