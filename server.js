import express from 'express'
import { createClient } from 'redis'
import dotenv from 'dotenv'
dotenv.config()

const redis = createClient(process.env.REDIS_PORT, process.env.REDIS_SERVER)
await redis.connect()

const app = express()
app.use(express.static('public'))
app.use(express.json())

const PORT = 8000

app.get('/', (req, res) => res.sendFile(process.cwd() + '/index.html'))

app.post('/carrinho', async (req, res) => {
    const prod = req.body
    console.log("/carrinho", prod)
    redis.set('carrinho', JSON.stringify(prod))
    res.status(201).end()
})

app.get('/carrinho', async (req, res) => {
    const carrinho = await redis.get('carrinho')
    console.log("carrinho", carrinho)
    res.send(JSON.parse(carrinho)).end()
})

app.listen(PORT, () => console.log(`\n\nServidor iniciado em http://localhost:${PORT}\n`))