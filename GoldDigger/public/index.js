
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

        console.log('Response from /getPrice:', response)

        const data = await response.json()

        console.log('Data received from /getPrice:', data)

        console.log('Current Gold Price (USD): ', data.price)

        priceDisplay.textContent = data.price
        } catch (error) {
            console.error("Error fetching price:", error)
        }
}

async function getPriceStream() {
    // const eventSource = new EventSource('/getPrice/live')

    // eventSource.onmessage = (event) => {
    //     const price = JSON.parse(event.data)
    //     priceDisplay.textContent = price
    // }
}