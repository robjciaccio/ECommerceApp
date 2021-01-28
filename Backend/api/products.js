const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const fileUpload = require('../middleware/file-upload')
const products_controller = require('../controllers/products_controller')

const productsRouter = express.Router()

productsRouter.get('/', products_controller.getItems)

productsRouter.post('/new', products_controller.addProduct)

module.exports = productsRouter
