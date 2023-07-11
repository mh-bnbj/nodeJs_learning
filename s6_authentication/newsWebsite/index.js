const express = require('express')
const router = require('./routes')
const errorHandler = require('./helpers/errorHandler')
const morgan = require('morgan')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/User')

const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.static('public'))

app.use(express.json())
// for parse request body that forms
app.use(express.urlencoded())

app.use(cookieParser())
app.use(session({ secret: 'keyboard cat asd' }))
app.use(flash())

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

app.use('/', router)

app.use(errorHandler.handler404)
app.use(errorHandler.handlerServerErrors)

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})
