console.clear();
/*
  Step 1: Create a new express app
*/
const express = require('express');
const app = express();
require('dotenv').config();

const path = require('path');

/*
  Step 2: Setup Mongoose (using environment variables)
*/
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  auth: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(err => {
  console.error(`Error: ${err}`)
});

/*
  Step 7: Register our route composer
*/
// const routes = require('./routes.js');
// // app.use('/api', routes);


// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

/*
  Step 8: Start the server
*/
const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Listening on port ${port}`));