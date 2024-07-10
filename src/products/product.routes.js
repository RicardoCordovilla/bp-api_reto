
const router = require('express').Router()
const productServices = require('./product.services')

router.get('/', productServices.getAllProducts)
router.post('/', productServices.createProduct)
router.put('/', productServices.updateProduct)
router.delete('/', productServices.deleteProduct)
router.get('/verification/:id', productServices.verifyProductIdExists)

module.exports = router
