const express = require('express')
const dbConnect = require('./dbConnect')
const app = express()
app.use(express.json())
const newsRoute = require('./routes/newsRoute')
const userRoute = require('./routes/userRoute')

app.use('/api/newsitems/', newsRoute)
app.use('/api/users/', userRoute)
const port = 8000
app.get('/',(req,res) => res.send('Hello prachi'))
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
