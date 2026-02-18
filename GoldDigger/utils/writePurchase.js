
import fs from 'fs/promises'

const purchasesFilePath = `${process.cwd()}/purchases/purchases.json`

export default async function writePurchase(purchaseAmount, currentPrice) {
    const timestamp = new Date().toISOString()
    const purchaseRecord = {
        timestamp,
        purchaseAmount,
        currentPrice,
        goldSold: purchaseAmount / currentPrice
    }
    try {
        await fs.mkdir(`${process.cwd()}/purchases`, { recursive: true })
        const existingData = await fs.readFile(purchasesFilePath, 'utf8')
        let existingPurchases = []
        if (existingData) {
            existingPurchases = JSON.parse(existingData)
        }
        existingPurchases.push(purchaseRecord)
        await fs.writeFile(purchasesFilePath, JSON.stringify(existingPurchases, null, 2))
    } catch (error) {
        console.error("Error writing purchase data:", error)
    }
}