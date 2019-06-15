const express = require("express"); //common js module only in - node
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./services/passport");

const keys = require("./config/keys");
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

//run the server
const PORT = process.env.PORT || 5000; //ability to inject env variables dynamically
app.listen(PORT);
