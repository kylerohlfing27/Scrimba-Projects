
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import OpenAI from "openai"
import { createClient } from "@supabase/supabase-js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_API_KEY
)

app.post("/generate-movie", async (req, res) => {
    try{
        console.log("-- User Query: ", req.body.userQuery)
        const { favoriteMovie, movieGenre, releaseOption } = req.body.userQuery

        const embeddedQuery = await embedQuery(favoriteMovie, movieGenre, releaseOption)

        const { data, error } = await supabase.rpc("match_movies", {
            query_embedding: embeddedQuery,
            match_threshold: 0.5,
            match_count: 1
        })

        console.log("-- Supabase Query Response: ", data)

        if (error) {
            throw error
        }

        res.json ({
            movieSuggestion: "Movie suggestion functionality to be implemented." //response.output_text
        })

        // let recommendationQueryText = `Based on the user's favorite movie "${favoriteMovie}" and preferred genre "${movieGenre}", as well as the description of the movie - generate a short movie recommendation based on this movie:\n\n`

    } catch (error) {
        console.error("Error during movie generation: ", error)
        res.status(500).json({error: "OpenAI Generation Request Failed"})
    }
})

app.listen(3001, () => {
    console.log("API server running on http://localhost:3001")
})

async function embedQuery(favoriteMovie, movieGenre, releaseOption) {
    let fullQueryText = `Favorite Movie: ${favoriteMovie}\nGenre: ${movieGenre}\nRelease Option: ${releaseOption}`
    console.log("-- Full Query Text: ", fullQueryText)
    try {
        const embeddingResponse = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: fullQueryText
        })
        return embeddingResponse.data[0].embedding
    } catch (error) {
        console.error("Error during embedding generation: ", error)
        throw new Error("Embedding Generation Failed")
    }
}