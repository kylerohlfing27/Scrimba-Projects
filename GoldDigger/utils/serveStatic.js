import fs from 'node:fs/promises'
import path from 'node:path'
import sendResponse from './sendResponse.js'
import getContentType from './getContentType.js'

export default async function serveStatic(res, publicPath) {
    const filePath = path.resolve(publicPath)
    try {
        const data = await fs.readFile(filePath)
        const contentType = getContentType(filePath)
        console.log(`--- Serving file: ${filePath} with content type: ${contentType}`)
        sendResponse(res, 200, contentType, data)
    } catch (err) {
        console.error('Error reading file:', err)
        if(err.code === 'ENOENT') {
            const errContent = await fs.readFile(path.resolve('public/404.html'))
            sendResponse(res, 404, 'text/html', errContent)
        }
    }
}