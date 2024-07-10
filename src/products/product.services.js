
const productController = require('./product.controllers')

const getAllProducts = async (req, res) => {
    try {
        const products = await productController.getAllProducts()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const createProduct = async (req, res) => {
    // const body= req.body
    // const {name, description} = body
    try {
        if (!req.body.name || !req.body.description) {
            return res.status(400).json({
                message: "Missing required fields",
                fieds: {
                    name: req.body.name ? "Required" : "No debe ser nulo",
                    description: req.body.description ? "Required" : "No debe ser nulo",
                }
            })
        }
        const product = await productController.createProduct(req.body)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateProduct = async (req, res) => {
    const body = req.body
    try {
        const product = await productController.updateProduct(req.body)
        res.status(200).json({
            message: "Product updated successfully",
            ...body
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await productController.deleteProduct(req.query.id)
        res.status(200).json({
            message: "product deleted successfully",
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const verifyProductIdExists = async (req, res) => {
    try {
        const product = await productController.verifyProductIdExists(req.params.id)
        res.status(200).json(product ? true : false)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    verifyProductIdExists
}