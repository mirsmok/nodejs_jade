
/*
 * GET listy u�ytkownik�w.
 */

exports.list = function(req, res){
  res.send('odpowied� zwracaj�ca zas�b');
};


/*
 * GET strony logowania.
 */

exports.login = function(req, res, next) {
  res.render('login');
};

/*
 * GET trasy wylogowania.
 */

exports.logout = function(req, res, next) {

  res.redirect('/');
};


/*
 * POST trasy uwierzytelnienia.
 */

exports.authenticate = function(req, res, next) {
  res.redirect('/admin');

};
