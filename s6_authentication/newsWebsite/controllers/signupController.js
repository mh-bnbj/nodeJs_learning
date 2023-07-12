const User = require('../models/User')
const { validationResult } = require('express-validator')
const get = (req, res) => {
    res.render('signup', {
        flash: req.flash(),
        errors: [],
    })
}

const post = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('signup', {
            flash: req.flash(),
            errors: errors.array(),
        })
        return
    }

    await User.create({
        name: req.body.name,
        email: req.body.email,
        password: await User.encryptPassword(req.body.password),
        age: 0,
    })
    req.flash('success', 'user created successfully')
    res.redirect('/login')
}

module.exports = { get, post }
