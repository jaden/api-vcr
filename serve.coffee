# This script starts the project in `serve` mode, which just serves up prerecorded data
console.log 'Starting apiVCR in serve mode'
console.log ''
console.log '     (つ -‘ _ ‘- )つ        '
console.log ''

server = require './src/server.js'
server.start()