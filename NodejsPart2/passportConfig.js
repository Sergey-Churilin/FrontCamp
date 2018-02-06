const passport = require("passport");
const passportJWT = require("passport-jwt");
const UserModel = require('./Database/UserSchema.js');
const cfg = require("./config.js");
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt')
};

module.exports = function() {
    const strategy = new Strategy(params, function(payload, done) {
        UserModel.findOne({_id: payload.id}, function (err, user) {
            if (user) {
                console.log(user)
                return done(null, {
                    id: user.id,
                    role:user.role
                });
            } else {
                return done(new Error("User not found"), null);
            }
        });
    });
    passport.use(strategy);
    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};