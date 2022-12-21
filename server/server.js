const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({ 'users': ['user-1', 'user-2', 'user-3'] })
})

app.listen(4200, () => { console.log('Server started on port 4200') })