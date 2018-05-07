const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('static'))
app.use('/dep', express.static('node_modules'))
app.use('/data', express.static('json'))

app.listen(3000, () => console.log('Static app is running on http://localhost:3000'))
