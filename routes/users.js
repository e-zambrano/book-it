const router = require("express").Router();
const { getUserById } = require("../controllers/users");

router.route("/user").get(getUserById);

module.exports = router;
