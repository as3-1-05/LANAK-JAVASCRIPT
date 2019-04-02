const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<a href="/tiempo"> formulario</a>'))
app.get('/infor', (req, res) => res.sendFile(__dirname + '/eguraldia1.0.js'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

