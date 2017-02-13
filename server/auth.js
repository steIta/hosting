
var auth = {
    
    checklogin: function (req, res, next) {
        var sess = req.session;
        if (sess.isLoggedIn === true || req.url.indexOf('/login') != -1) {
       next();
        } else {
            res.redirect('/login');
        }
    }

};

module.exports = auth;

