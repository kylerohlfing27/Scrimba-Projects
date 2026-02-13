
export default function sendResponse(res, statusCode, contentType, body) { 
    console.log(contentType)
    res.statusCode = statusCode
    res.setHeader('Content-Type', contentType)
    res.end(body)
}