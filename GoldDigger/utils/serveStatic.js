import fs from 'node:fs/promises'
import path from 'node:path'
import sendResponse from './sendResponse.js'
import getContentType from './getContentType.js'

export default async function serveStatic(res, publicPath) {
    const filePath = path.resolve(publicPath)
    try {
        const data = await fs.readFile(filePath)
        const contentType = getContentType(filePath)
        sendResponse(res, 200, contentType, data)
    } catch (err) {
        console.error('Error reading file:', err)
        sendResponse(res, 404, 'text/plain', 'Resource Not Found')
    }
}