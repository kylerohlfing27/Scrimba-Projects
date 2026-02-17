
import http, { get } from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import serveStatic from './utils/serveStatic.js'
import getCurrentPrice from './utils/getCurrentPrice.js'
import sendResponse from './utils/sendResponse.js'
import getMockPrice from './utils/getMockPrice.js'

const server = http.createServer(async (req, res) => {

    console.log('Incoming request:', req.method, req.url)

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const publicdirPath = path.join(__dirname, 'public')
    const pathToResource = path.join(publicdirPath, req.url === '/' ? 'index.html' : req.url)

    // console.log(pathToResource)    

    if (req.url.startsWith('/getPrice') && req.method === 'GET') {
        if(req.url === '/getPrice') {
            const currentPrice = await getCurrentPrice()
            console.log('Current Price:', currentPrice)
            sendResponse(res, 200, 'application/json', JSON.stringify({ price: currentPrice }))
        } else if(req.url === '/getPrice/live') {
            res.writeHead(200, {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive'
            })
            const currentPrice = getCurrentPrice()
            setInterval( () => {
                const mockPrice = getMockPrice(currentPrice)
                res.write(`data: ${JSON.stringify({ price: mockPrice })}\n\n`)
            }, 3000)
        }
    } else {
        await serveStatic(res, pathToResource)
    }
})

server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})