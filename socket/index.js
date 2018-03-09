const user = require('../model/user')
module.exports = function (io) {
  io.on('connection', (socket) => {
    socket.on('message', (msg) => {
      io.emit('message', msg)
    })
  })

  io.on('disconnect', () => {

  })

}