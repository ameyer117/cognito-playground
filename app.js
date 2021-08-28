const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hey Alec!')
})

app.listen(3000, () => {
  console.log('Server started!')
})