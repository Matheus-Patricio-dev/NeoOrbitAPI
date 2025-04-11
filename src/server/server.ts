import express from 'express';
import router from '../routers/router';
import "dotenv/config"

const server = express()

// Fazendo com o que o Servidor trabalhe com JSON
server.use(express.json())

// Servidor utilizando o Router
server.use(router)

export { server }