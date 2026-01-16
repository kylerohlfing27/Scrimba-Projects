import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import OpenAI from "openai"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

app.post("/translate", async (req, res) => {
    console.log("Request Body: ", req.body)
    try {
        const { text, language } = req.body

        console.log("Text: ", text)
        console.log("Language: ", language)
        
        const response = await openai.responses.create({
            model: "gpt-5-mini",
            instructions: "You are a helpful translator that translates text to the specified language.",
            input: `Translate the following text to ${language}:\n\n${text}`,
        })

        console.log("OpenAI Response: ", response)

        res.json({ translation: response.output_text } )
    } catch (error) {
        console.error("Error during translation: ", error)
        res.status(500).json({error: "OpenAI Request Failed"})
    }
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})