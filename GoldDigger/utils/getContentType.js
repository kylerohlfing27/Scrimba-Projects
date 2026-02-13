import path from 'node:path'

export default function getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase()

    console.log(`${filePath} has extension: ${ext}`)

    switch (ext) {
        case '.html':
            return 'text/html'
        case '.css':
            return 'text/css'
        case '.js':
            return 'text/javascript'
        case '.png':
            return 'image/png'
        case '.jpg':
            return 'image/jpeg'
        case '.jpeg':
            return 'image/jpeg'
        case '.svg':
            return 'image/svg+xml'
    }
}