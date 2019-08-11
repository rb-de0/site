const express = require('express')
const app = express()
app.use(express.static('docs/.vuepress/dist'))
app.listen(3000, () => {
  console.log('listening on port 3000')
})