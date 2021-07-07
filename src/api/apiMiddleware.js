const express = require('express')

const api = express()

api.get("/api", adminMiddleware)

module.exports = api