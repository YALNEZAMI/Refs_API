/* eslint-disable linebreak-style */
const users = require("./users/users.service.js");
const refs = require("./refs/refs.service.js");
const comments = require("./comments/comments.service.js");
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(refs);
  app.configure(comments);
};
