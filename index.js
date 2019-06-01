const express = require("express"); //common js module only in - node

const app = express();

//route handler
app.get("/", (req, res) => {
	//app - express server
	res.send("bye there"); //get - route for https req
}); // '/' - watch for req in /

//run the server
const PORT = process.env.PORT || 5000; //ability to inject env variables dynamically
app.listen(PORT);
