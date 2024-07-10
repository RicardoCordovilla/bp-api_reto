/*

const productController = require('./product.controller')

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
    try {
        const product = await productController.createProduct(req.body)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await productController.updateProduct(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await productController.deleteProduct(req.body.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const verifyProductIdExists = async (req, res) => {
    try {
        const product = await productController.verifyProductIdExists(req.query.id)
        res.status(200).json(product)
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
    */

const { sequelize } = require('sequelize')

const Product = require('./product.model')

const getAllProducts = async () => {
    return await Product.findAll()
}

const createProduct = async (productStore) => {
    return await Product.create(productStore)
}

const updateProduct = async (productStore) => {
    return await Product.update(productStore, {
        where: {
            id: productStore.id
        }
    })
}

const deleteProduct = async (id) => {
    return await Product.destroy({
        where: {
            id
        }
    })
}

const verifyProductIdExists = async (id) => {
    return await Product.findOne({
        where: {
            id
        }
    })
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    verifyProductIdExists
}