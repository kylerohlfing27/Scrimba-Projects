
const priceDisplay = document.getElementById('price-display')

getCurrentPrice()
getPriceStream()



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