const { find } = require("lodash");
const users = require("../db/users");

function getUserById(request, response) {
  const { id } = +request.params;
  const user = find(users, { id });

  if (!user) {
    response.send(`No user found. User Id: ${id}`);
  }

  response.json(user);
}
