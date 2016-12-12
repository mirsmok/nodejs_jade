
/*
 * GET listy u¿ytkowników.
 */

exports.list = function(req, res){
  res.send('odpowiedŸ zwracaj¹ca zasób');
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
