// config.js
module.exports = {
    jwtSecret: "MyS3cr3tK3Y",
    jwtSession: {
        session: false,
        failureRedirect: '/login'
    }
};