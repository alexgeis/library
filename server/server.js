const express = require("express");
const session = require("express-session");
const path = require("path");
const routes = require("./routes");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const { clog } = require("./middleware/clog");
// Import custom middleware, "cLog"
// app.use(clog);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
	secret: "Super secret secret",
	cookie: {
		// Stored in milliseconds (86400 === 1 day)
		maxAge: 86400,
	},
	resave: false,
	saveUninitialized: true,
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
app.get("/", (req, res) =>
	res.sendFile(path.join(__dirname, "..", "index.html"))
);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening at PORT: ${PORT}`));
});
