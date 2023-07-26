const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //for testing
  token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzE3NTE4ZWVkNzdlNzJlMWZlMWJhNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkwNDAwMDI0fQ.YLRpKWLIiH0bD5YovUUGKtyc0oK8S3dZNj4JbwwFb0w"
  return token;
};
