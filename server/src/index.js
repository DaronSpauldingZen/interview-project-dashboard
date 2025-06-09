const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')
const mercurius = require('mercurius')
const { schema } = require('./schema')
const { resolvers } = require('./resolvers')

// Enable CORS
fastify.register(cors, {
  origin: true, // Allow requests from any origin
  credentials: true
})

// Register GraphQL
fastify.register(mercurius, {
  schema,
  resolvers,
  graphiql: true, // Enable GraphiQL interface for development
  path: '/graphql' // Explicitly set the GraphQL endpoint path
})

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
    console.log('Server running at http://localhost:3000')
    console.log('GraphQL playground available at http://localhost:3000/graphql')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start() 