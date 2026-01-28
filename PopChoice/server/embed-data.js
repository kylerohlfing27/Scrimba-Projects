
import OpenAI from "openai"
import dotenv from "dotenv"
import { createClient } from "@supabase/supabase-js"
import movies from "./../content.js"

dotenv.config()

// OpenAI Client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

// Supabase Client
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_API_KEY
)

async function embedAndStoreMovies() {
    const data = await Promise.all(
        movies.map(async (movie) => {
            let embedString = `Title: ${movie.title}\nRelease Year: ${movie.releaseYear}\nContent: ${movie.content}`

            const embeddingResponse = await openai.embeddings.create({
                model: "text-embedding-3-small",
                input: embedString
            })

            return {
                title: movie.title,
                releaseyear: movie.releaseYear,
                content: movie.content,
                embeddedchunk: embedString,
                embedding: embeddingResponse.data[0].embedding
            }
        }
    ))

    await supabase.from("movies").insert(data)
    console.log("Embedding complete!")
}

embedAndStoreMovies()