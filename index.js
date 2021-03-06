const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.use(express.static(path.join(__dirname, 'power-tools-rentals/build')))
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/power-tools-rentals/build/index.html'))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))