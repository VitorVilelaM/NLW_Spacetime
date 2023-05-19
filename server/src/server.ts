import 'dotenv/config'

import  jwt from '@fastify/jwt'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRotes } from './routes/auth'

const app = fastify()

app.register(cors, {
  //origin:['localhost:3333'] Determina quais urls meu front-end pode acessar!  
  origin: true,// Todas as urls de Front-End poderão ser acessar o back-end
})

app.register(jwt,{
  secret: 'spacetime',
})

app.register(authRotes)
app.register(memoriesRoutes);

app.listen({
    port: 3333,
  }).then(() => console.log('🚀 HTPP server running on http://localhost:3333'))
