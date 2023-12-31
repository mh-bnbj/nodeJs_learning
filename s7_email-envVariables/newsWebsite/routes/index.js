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
const forgetController = require('../controllers/forgetController')
const loginController = require('../controllers/loginController')
const logoutController = require('../controllers/logoutController')
const { isLoggedIn, isNotLoggedIn } = require('../helpers/auth')
const mailController = require('../controllers/mailController')
const resetController = require('../controllers/resetController')
const dashboardController = require('../controllers/dashboardController')

router.get('/', homepageController)
router.get('/post/:id', postController)
router.get('/category/:id', categoryController)
router.get('/about', aboutController)
router.get('/contact', contactController)
router.get('/search', searchController)
router.get('/dashboard', isLoggedIn, dashboardController)

router.get('/login', isNotLoggedIn, loginController.get)
router.post(
    '/login',
    isNotLoggedIn,
    check('name').not().isEmpty().trim(),
    check('email').isEmail().toLowerCase(),
    loginController.post
)

router.get('/signup', isNotLoggedIn, signupController.get)
router.post(
    '/signup',
    isNotLoggedIn,
    check('name').not().isEmpty().trim(),
    check('email').isEmail().toLowerCase(),
    check('password').isLength({ min: 6 }),
    signupController.post
)

router.get('/forget', isNotLoggedIn, forgetController.get)
router.post(
    '/forget',
    isNotLoggedIn,
    body('email').isEmail().normalizeEmail().toLowerCase(),
    forgetController.post
)

router.get('/logout', logoutController)

router.get('/mail', mailController)
router.get('/reset', resetController.get)
router.post(
    '/reset',
    isNotLoggedIn,
    body('password').isLength({ min: 6 }),
    resetController.post
)

module.exports = router
