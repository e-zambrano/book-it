const router = require("express").Router();
const { signIn, signUp } = require("../controllers/auth");

router.get("/auth/signin", signIn);
router.post("/auth/signup", signUp);

module.exports = router;
