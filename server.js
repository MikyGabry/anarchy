const express = require('express');
const app = express()
const PORT = 4000;
const characterController = require('./controllers/characters')

app.get('/', (req, res) => {
    res.send('<h1> Hello word! we want anarchy </h1>')
})

app.use('', characterController);

app.listen(PORT, () => {
    console.log(`🐳🦋 We're causing  on PORT ${PORT} 🐢🦅`)
}) 