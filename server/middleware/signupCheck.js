function signUpCheck(req, res, next) {
  if (req.session?.user?.id) {
    res.locals.signedUp = true;
  } else {
    res.locals.signedUp = false;
  }
  next();
}

module.exports = signUpCheck;
