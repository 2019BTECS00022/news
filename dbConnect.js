const mongoose = require('mongoose')

// Connect to the database
mongoose.connect(
  'mongodb+srv://prachi:prachi@prachi.f3vewop.mongodb.net/newj?retryWrites=true&w=majority&appName=prachi',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

// Get the default connection
const db = mongoose.connection

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

db.once('open', function () {
  console.log('Connected to the database')
})

module.exports = db
