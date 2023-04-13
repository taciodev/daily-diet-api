import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Hellor Daily Diet!'
})

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
