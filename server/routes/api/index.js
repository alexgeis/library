const router = require("express").Router();
const userRoutes = require("./users/userRoutes");
const bookRoutes = require("./books/bookRoutes");

router.use("/users", userRoutes);
router.use("/books", bookRoutes);

module.exports = router;
