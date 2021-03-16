import express from 'express'

const app = express();

app.get('/', (request, response) => {
    response.json({message: "ola mundo"})
})

app.listen(3333);