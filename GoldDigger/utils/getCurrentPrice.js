
export default async function getCurrentPrice() {
    try {
        const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
            method: "GET",
            headers: {
                "x-access-token": "goldapi-5rs3osmlqvct3o-io",
                "Content-Type": "application/json"
            },
            redirect: "follow"
        })

        const data = await response.json()
        console.log("Current Gold Price (USD): ", data.price)
        return data.price
    } catch (error) {
        console.error("Error fetching gold price: ", error)
        return null
    }
}