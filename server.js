const express = require('express');
const app = express()
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('<h1> Hello word! we want anarchy </h1>')
})

app.listen(PORT, () => {
    console.log(`🐳🦋 We're causing  on PORT ${PORT} 🐢🦅`)
}) 