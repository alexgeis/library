const express = require("express");
const session = require("express-session");
require("dotenv").config();
const path = require("path");
const routes = require("./routes");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const { clog } = require("./middleware/clog");
// Import custom middleware, "cLog"
// app.use(clog);

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
	// // Function to call to generate a new session ID
	// genid: function (req) {
	// 	return genuuid(); // use UUIDs for session IDs
	// },
	secret: process.env.SESS_SECRET,
	// Express session will use cookies by default, but we can specify options for those cookies by adding a cookies property to our session options.
	cookie: {
		// maxAge sets the maximum age for the session to be active. Listed in milliseconds.
		maxAge: 3600,
		// httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
		httpOnly: true, // default
		// secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
		secure: false, // default
		// sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
		sameSite: "strict",
	},
	resave: false,
	saveUninitialized: true,
	// Sets up session store
	store: new SequelizeStore({
		db: sequelize,
	}),
};

app.use(session(sess));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// turn on routes
app.use(routes);

app.use(express.static(path.join(__dirname, "..", "client", "public")));

// GET Route for homepage
// app.get("/", (req, res) =>
// 	res.sendFile(path.join(__dirname, "..", "index.html"))
// );

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening at PORT: ${PORT}`));
});
