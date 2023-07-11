const User = require('../models/User')

const get = (req, res) => {
    res.render('signup', {
        flash: req.flash(),
    })
}

const post = async (req, res) => {
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
