const express = require('express')
const app = express()
app.use('/site', express.static('docs'))
app.listen(3000, () => {
  console.log('listening on port 3000')
})