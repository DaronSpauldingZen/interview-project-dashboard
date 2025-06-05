const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')
const mercurius = require('mercurius')
const { schema } = require('./schema')
const { resolvers } = require('./resolvers')

// Enable CORS
fastify.register(cors, {
  origin: 'http://localhost:5173', // Allow requests from the React app
  credentials: true
})

// Register GraphQL
fastify.register(mercurius, {
  schema,
  resolvers,
  graphiql: true // Enable GraphiQL interface for development
})

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start() 