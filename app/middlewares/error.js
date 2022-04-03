const error = function (req, res, next) {
    res.status(400).render('pages/error');
}

module.exports = error;