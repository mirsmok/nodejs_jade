
/*
 * GET strony artyku³u.
 */

exports.show = function(req, res, next) {
  if (!req.params.slug) return next(new Error('Brak œcie¿ki artyku³u.'));
  req.collections.articles.findOne({slug: req.params.slug}, function(error, article) {
    if (error) return next(error);
    if (!article.published) return res.send(401);
    res.render('article', article);
  });
};


/*
 * GET API artyku³ów.
 */

exports.list = function(req, res, next) {
  req.collections.articles.find({}).toArray(function(error, articles) {
    if (error) return next(error);
    res.send({articles:articles});
  });
};


/*
 * POST API artyku³u.
 */

exports.add = function(req, res, next) {
  if (!req.body.article) return next(new Error('Brak treœci artyku³u.'));
  var article = req.body.article;
  article.published = false;
  req.collections.articles.insert(article, function(error, articleResponse) {
    if (error) return next(error);
    res.send(articleResponse);
  });
};


/*
 * PUT API artyku³u.
 */

exports.edit = function(req, res, next) {
  if (!req.params.id) return next(new Error('Brak ID artyku³u.'));
  req.collections.articles.updateById(req.params.id, {$set: req.body.article}, function(error, count) {
    if (error) return next(error);
    res.send({affectedCount: count});
  });
};

/*
 * DELETE API artyku³u.
 */

exports.del = function(req, res, next) {
  if (!req.params.id) return next(new Error('Brak ID artyku³u.'));
  req.collections.articles.removeById(req.params.id, function(error, count) {
    if (error) return next(error);
    res.send({affectedCount: count});
  });
};


/*
 * GET strony tworzenia artyku³u.
 */

exports.post = function(req, res, next) {
  if (!req.body.title)
  res.render('post');
};



/*
 * POST strony publikowania artyku³u.
 */

exports.postArticle = function(req, res, next) {
  if (!req.body.title || !req.body.slug || !req.body.text ) {
    return res.render('post', {error: 'Wpisz tytu³, œcie¿kê i tekst.'});
  }
  var article = {
    title: req.body.title,
    slug: req.body.slug,
    text: req.body.text,
    published: false
  };
  req.collections.articles.insert(article, function(error, articleResponse) {
    if (error) return next(error);
    res.render('post', {error: 'Artyku³ zosta³ dodany. Opublikuj ze strony administracyjnej.'});
  });
};



/*
 * GET strony administracyjnej.
 */

exports.admin = function(req, res, next) {
  req.collections.articles.find({},{sort: {_id:-1}}).toArray(function(error, articles) {
    if (error) return next(error);
    res.render('admin',{articles:articles});
  });

}