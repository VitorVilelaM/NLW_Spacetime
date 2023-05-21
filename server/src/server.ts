import 'dotenv/config'

import  jwt from '@fastify/jwt'
import fastify from 'fastify'
import cors from '@fastify/cors'
import multipart from '@fastify/multipart'
import { resolve } from 'node:path'

import { memoriesRoutes } from './routes/memories'
import { authRotes } from './routes/auth'
import { uploadRotes } from './routes/upload'
const app = fastify()

app.register(multipart)

// Deixa a pasta uploads visivel para o navegador
app.register(require('@fastify/static'),{
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads/',
})

app.register(cors, {
  //origin:['localhost:3333'] Determina quais urls meu front-end pode acessar!  
  origin: true,// Todas as urls de Front-End poderão ser acessar o back-end
})

app.register(jwt,{
  secret: 'spacetime',
})

app.register(authRotes);
app.register(uploadRotes);
app.register(memoriesRoutes);

app.listen({
    port: 3333,
  }).then(() => console.log('🚀 HTPP server running on http://localhost:3333'))
