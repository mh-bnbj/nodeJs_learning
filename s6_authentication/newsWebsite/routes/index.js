const express = require('express')
const router = express.Router()
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
router.post('/login', loginController.post)

router.get('/signup', signupController.get)
router.post('/signup', signupController.post)
module.exports = router
