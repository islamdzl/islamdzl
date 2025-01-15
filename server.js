const express = require('express')
const cors = require('cors')
const http = require('http')
const app = express()
const xhr = require('./system/web/xhr')
const socket = require('./system/web/socket')
const server = http.createServer(app)
const PORT = 2007
app.use(cors({
    origin:'*'
})) 
xhr(app)
socket(server)
app.use(express.static('public'))
server.listen(PORT,()=>{
    console.log(`Im listening in port ${PORT} successfuly`)
})
console.log('end process')