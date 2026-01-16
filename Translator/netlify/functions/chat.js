import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function handler(event) {
    try {
        const { text, language } = JSON.parse(event.body)

        console.log("Text: ", text)
        console.log("Language: ", language)
        
        const response = await openai.responses.create({
            model: "gpt-5-mini",
            instructions: "You are a helpful translator that translates text to the specified language.",
            input: `Translate the following text to ${language}:\n\n${text}`,
        })

        console.log("OpenAI Response: ", response)

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                translation: response.output_text
            }),
        }
    } catch (error) {
        console.error("Error during translation: ", error)

        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ error: "OpenAI Request Failed" }),
        }
    }
}