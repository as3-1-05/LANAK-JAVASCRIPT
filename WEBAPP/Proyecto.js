const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hola mundo mundito <3'))

app.get('/info', (req, res) => res.send('Well cum  to ASIR'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))