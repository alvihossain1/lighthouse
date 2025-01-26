const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient()
const fs = require('fs');

exports.addProductImages = async (req, res) => {
    let productImages = JSON.parse(req?.body?.productImages) || req?.body?.productImages
    const productId = req.id
    try {
        productImages = productImages.map(image => {
            return {...image, productId: productId}
        })
        let productImagesdb = await prisma.productImages.createMany({
            data: productImages
        })
        if(req?.skipResponse){}
        else res.send({ status: 200, data: productImagesdb })
    }
    catch (error) {
        console.log(error)
        if(req?.skipResponse){}
        else res.send({ status: 500, error: error })
    }
    finally {
        await prisma.$disconnect()
    }
}

exports.updateProductSingleImage = async (req, res) => {
    const data = JSON.parse(req?.body?.data)
    const {imageId, newName, } = data
    try {
        let product = await prisma.productImages.update({
            where: {imageId: imageId},
            data: {url: newName}
        })
        res.send({ status: 200, data: product })
    }
    catch (error) {
        console.log(error)
        res.send({ status: 500, data: error.message })
    }
    finally {
        await prisma.$disconnect()
    }
}

exports.deleteProductImages = async (req, res) => {
    let {productId, images} = req?.body
    try {
        images.forEach(async (image) => {
            await prisma.productImages.delete({
                where: {imageId: image.imageId}
            })  
            fs.unlinkSync(`public/productImages/${productId}/${image.name}`)
        })
        res.send({ status: 200, data: "Done" })
    }
    catch (error) {
        console.log(error)
        res.send({ status: 500, error: error.message })
    }
    finally {
        await prisma.$disconnect()
    }
}
