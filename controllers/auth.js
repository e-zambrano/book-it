const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { getUserByEmail, createUser } = require("./users");

function signIn(request, response) {
  const { email, password } = request.body;

  const user = getUserByEmail(email);

  if (!user || !comparePasswords(password, user.password)) {
    response.status(400).send("incorrect email or password");
  }
  const token = generateToke(user.id);
  response.json({ token });
}

function signUp(request, response) {
  const { email, password, name } = request.body;

  const user = getUserByEmail(email);

  if (user) {
    response.status(400).send("email already used");
  }

  const encryptedPassword = encryptPassword(password);
  const newUser = createUser(email, encryptedPassword, name);
  const token = generateToke(newUser.id);
  response.json({ token });
}

function comparePasswords(plainTextPassword, encryptedPassword) {
  const areEqual = bcrypt.compareSync(plainTextPassword, encryptedPassword);
  return areEqual;
}

function encryptPassword(plainTextPassword) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(plainTextPassword, salt);
  return hash;
}

function generateToke(id) {
  const token = jwt.sign({ id }, "secret");
  return token;
}

module.exports = { signIn, signUp };
