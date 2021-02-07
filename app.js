console.clear();
const express = require('express');
const app = express();
require('dotenv').config();
const passport = require("passport");

const path = require('path');

const bp = require("body-parser");
const cors = require("cors");

/*
 Setup Mongoose (using environment variables)
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

const session = require('express-session');
app.use(session({
  secret: 'I don\'t know',
  resave: true,
  saveUninitialized: false
}));

/**Middleware */

app.use(cors());
app.use(bp.json());

app.use(passport.initialize());

require("./middlewares/passport")(passport);

// User Router Middleware
app.use("/api/users", require("./routes/users"));


/*
 Start the server
*/
const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Listening on port ${port}`));