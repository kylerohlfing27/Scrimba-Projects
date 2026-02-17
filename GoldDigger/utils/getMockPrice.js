
export default function getMockPrice(currentPrice) {
    let fluctuation = (Math.random() - 0.5) * 10 // Random fluctuation between -5 and 5
    fluctuation = Number(fluctuation.toFixed(2)) // Round to 2 decimal places
    console.log(`Current Price: ${currentPrice}, Fluctuation: ${fluctuation}`)
    return currentPrice + fluctuation;
}