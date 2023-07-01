const express = require('express')

const aboutController = require('../controllers/AboutController')
const contactController = require('../controllers/contactController')
const homepageController = require('../controllers/homepageController.js')

const router = express.Router()

router.get('/' , homepageController)
router.get('/about' , aboutController)
router.get('/contact' , contactController)

module.exports = router