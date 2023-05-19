import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  //origin:['localhost:3333'] Determina quais urls meu front-end pode acessar!  
  origin: true,// Todas as urls de Front-End poderão ser acessar o back-end
})

app.listen({
    port: 3333,
  }).then(() => console.log('🚀 HTPP server running on http://localhost:3333'))
