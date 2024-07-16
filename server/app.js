const express = require('express')
const router = require('./router')
const app = express()
const port = 3000
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors()) // for Enable All CORS Requests
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(router)

app.use(errorHandler) // for handling error

app.listen(port, () => {
  console.log(` -----------------------------------------------------------
     Now listening : Stephanie Poetri - I Love You ${port}  
 -----------------------------------------------------------`)
})