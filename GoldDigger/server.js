
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import serveStatic from './utils/serveStatic.js'

const server = http.createServer(async (req, res) => {

    console.log('Incoming request:', req.method, req.url)

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const publicdirPath = path.join(__dirname, 'public')
    const pathToResource = path.join(publicdirPath, req.url === '/' ? 'index.html' : req.url)

    console.log(pathToResource)

    await serveStatic(res, pathToResource)

    // if (req.url === '/' && req.method === 'GET') {
        
    // }
})

server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})