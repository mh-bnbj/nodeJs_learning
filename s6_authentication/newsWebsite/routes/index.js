const express = require('express')
const router = express.Router()

const { check } = require('express-validator')

const homepageController = require('../controllers/homepageController')
const postController = require('../controllers/postController')
const aboutController = require('../controllers/aboutController')
const contactController = require('../controllers/contactController')
const categoryController = require('../controllers/categoryController')
const searchController = require('../controllers/searchController')
const signupController = require('../controllers/signupController')
const loginController = require('../controllers/loginController')

router.get('/', homepageController)
router.get('/post/:id', postController)
router.get('/category/:id', categoryController)
router.get('/about', aboutController)
router.get('/contact', contactController)
router.get('/search', searchController)

router.get('/login', loginController.get)
router.post(
    '/login',
    check('name').not().isEmpty().trim(),
    check('email').isEmail().toLowerCase(),
    loginController.post
)

router.get('/signup', signupController.get)
router.post(
    '/signup',
    check('name').not().isEmpty().trim(),
    check('email').isEmail().toLowerCase(),
    check('password').isLength({ min: 6 }),
    signupController.post
)

module.exports = router
