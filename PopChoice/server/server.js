
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import OpenAI from "openai"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

app.post("/generate-movie", async (req, res) => {
    try{
        console.log("-- Request Body: ", req.body)
        const reqBody = req.body

        // const response = await openai.responses.create({
        //     model: "gpt-5-mini",
        //     instructions: "You are a helpful assistant that suggests movies based on user preferences. Keep responses concise.",
        //     input: `Suggest a movie for a user based on the following preferences:`
        // })
        // ^ This may need to be changed to handle vector database querying instead

        // embed user query and query vector DB for relevant movies

        // generate OpenAI response based on retrieved movies and user query

        res.json({
            movieSuggestion: "Movie suggestion functionality to be implemented." //response.output_text
        })
    } catch(error) {
        console.error("Error during movie generation: ", error)
        res.status(500).json({error: "OpenAI Generation Request Failed"})
    }

})

app.listen(3001, () => {
    console.log("API server running on http://localhost:3001")
})