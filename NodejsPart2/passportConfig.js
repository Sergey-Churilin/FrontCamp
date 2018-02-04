const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('./Database/UserSchema.js');
const errorHandler = require('./errorHandler');

passport.use(new LocalStrategy(
    function (username, password, done) {
        UserModel.findOne({userLogin: username}, function (err, user) {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false);
            }

            if (user.userPassword != password) {
                return done(null, false);
            }

            return done(null, user);
        });
    }));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function (user, cb) {
    console.log("serializeUser")
    cb(null, user._id);
});

passport.deserializeUser(function (id, cb) {
    console.log("deserializeUser")
    UserModel.findById(id, function (err, user) {
        if (err) {
            return cb(err);
        }
        cb(null, user);
    });
});

passportConfig = {
    authenticate: function () {
        return passport.authenticate('local', {failureRedirect: '/login'})
    },
    isAuthenticated: function (req, res, next) {
    console.log(req._passport)
        if (req.user) {
            return next();
        } else {
            return res.status(401).json({
                error: 'User not authenticated'
            })
        }

    }
};

module.exports = {passport, passportConfig};