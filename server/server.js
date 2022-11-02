const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const {homeHTML, homeCSS} = require('./controllers/pageCtrl')

app.get('/', homeHTML)
app.get('/css', homeCSS)

const { PORT } = process.env

app.listen(PORT, () => console.log('Server listening on port ' + PORT))