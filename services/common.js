const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt')
};

exports.sanitizeUser = (user)=>{
    return {id:user.id, role:user.role}
}

exports.cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies['jwt'];
    }
    token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzBhZmI4OWZkMmEyZWQ3NDFiYTc5NCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkwMzQ5NDk2fQ.3OBx4n9U4XfXCFONnWn1XOnTAkNQDY94UUtFtb6p7Gw"
    return token;
  }