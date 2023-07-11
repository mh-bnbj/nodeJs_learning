const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('../models/User')

passport.initialize()
passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, cb) => {
            const user = await User.findOne({
                where: {
                    email: email,
                },
            })
            try {
                if (!user)
                    return cb(null, false, { message: 'Incorrect username.' })
                if (!User.validPassword(user, password))
                    return cb(null, false, { message: 'Incorrect password.' })
                return cb(null, user)
            } catch (err) {
                cb(err)
            }
        }
    )
)
