const express = require('express');

const server = express()

server.list(142007, () => {
    console.log("Server is running!!")
})