
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import serveStatic from './utils/serveStatic.js'

const server = http.createServer(async (req, res) => {

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const publicdirPath = path.join(__dirname, 'public')
    const pathToResource = path.join(publicdirPath, req.url === '/' ? 'index.html' : req.url)

    console.log(pathToResource)

    if (req.url === '/' && req.method === 'GET') {
        await serveStatic(res, pathToResource)
    }
})

server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})