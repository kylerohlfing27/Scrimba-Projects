
const priceDisplay = document.getElementById('price-display')
const investmentAmountInput = document.getElementById('investment-amount')
const purchaseButton = document.getElementById('invest-btn')

getCurrentPrice()
getPriceStream()

purchaseButton.addEventListener('click', (e) => {
    e.preventDefault()
    const investmentAmount = parseFloat(investmentAmountInput.value)
    writePurchase(investmentAmount)
})

async function getCurrentPrice() {

    try {
        const response = await fetch('/getPrice', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()

        console.log('Current Gold Price (USD): ', data.price)

        priceDisplay.textContent = (data.price).toFixed(2)
        } catch (error) {
            console.error("Error fetching price:", error)
        }
}

async function getPriceStream() {
    const eventSource = new EventSource('/getPrice/live')

    eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data)
        const roundedPrice = (data.price).toFixed(2)
        console.log('Received Price Update:', roundedPrice)
        priceDisplay.textContent = roundedPrice
    }
}

async function writePurchase(investmentAmount) {
    try {
        const response = await fetch('/purchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: investmentAmount,
                currentPrice: Number(priceDisplay.textContent)
            })
        })
        const data = await response.json()
        console.log('Purchase response:', data)
    } catch(error) {
        console.error("Error sending purchase request:", error)
    }    
}