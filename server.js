import express from 'express'
import cors from 'cors'

// routes
import { Movie } from './routes/booking/movies/movies.js'



// constants
export const PORT = 8080

const app = express()

// midlewares
app.use(express.json())
app.use(cors())

app.use("/movie", Movie)


app.listen(PORT, () => {
    console.log("server is listening")
})