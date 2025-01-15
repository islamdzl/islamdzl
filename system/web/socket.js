const WebSocket = require('ws')

module.exports = ( server )=>{
    const wss = new WebSocket.Server({server})
    wss.on("connection",( ws )=>{
        ws.onmessage = (message)=>{
            const data = JSON.parse(message.toString('utf-8'))

        }
        ws.onclose = ()=>{
            console.log('client disconnected')
        }
    })
}