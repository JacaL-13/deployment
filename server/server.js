const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const {homeHTML, homeCSS, homeJS} = require('./controllers/pageCtrl')

app.get('/', homeHTML)
app.get('/css', homeCSS)
app.get('/js', homeJS)

const { PORT } = process.env

app.listen(PORT, () => console.log('Server listening on port ' + PORT))

// The resource from “https://deployment7882.herokuapp.com/js” was blocked due to MIME type (“text/html”) mismatch (X-Content-Type-Options: nosniff).