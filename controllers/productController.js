const prisma = require("../utils/prisma")
const fs = require('fs');
const { addProductImages } = require("./productImagesController");
const { addProductMoreDetails } = require("./productMoreDetailsController");
const { addProductVariants } = require("./productVariantsController");

const getIpAddress = (request) => {
    const ip = 
        request.headers['cf-connecting-ip'] ||  
        request.headers['x-real-ip'] ||
        request.headers['x-forwarded-for'] ||
        request.socket.remoteAddress || '';
    return ip;
}

exports.getProducts = async (req, res) => {
    const name = req.params.name
    const ip = getIpAddress(req);
    console.log("IP", ip)
    try {
        let products = []
        if (name) {
            const categories = await prisma.categories.findMany({
                where: { name: name }
            })
            if (categories) {
                products = await prisma.products.findMany({
                    where: { categoryId: { in: categories.map(category => { return category.categoryId }) } },
                    include: { variants: true, category: true, images: true, moreDetails: true }
                })
            }
        }
        else {
            products = await prisma.products.findMany({
                include: { variants: true, category: true, images: true, moreDetails: true }
            })
        }
        if (products.length > 0) {
            products = products?.map(product => {
                product.images = product.images.map(image => {
                    return { ...image, name: image.url, url: `${process.env.SERVER_URL}/public/productImages/${image.productId}/${image.url}` }
                })
                product.price = product.variants[0].price
                return product
            })
        }
        res.send({ status: 200, data: products })
    }
    catch (error) {
        res.send({ status: 500, error: error })
    }
    finally {
        await prisma.$disconnect()
    }
}

exports.getProductsPrisma = async (req, res) => {
    try {
        let products = await prisma.products.findMany({
            include: { category: true, images: true, moreDetails: true }
        })
        products = products.map(product => {
            product.images = product.images.map(image => {
                return { ...image, name: image.url, url: `${process.env.SERVER_URL}/public/productImages/${image.productId}/${image.url}` }
            })
            return product
        })
        res.send({ status: 200, data: products })
    }
    catch (error) {
        res.send({ status: 500, error: error })
    }
    finally {
        await prisma.$disconnect()
    }

}

const parseDataType = (data) => {
    let price = parseFloat(data.price)
    let discount = parseFloat(data.discount)
    const newData = { price, discount }
    return { ...data, ...newData }
}

exports.checkProductId = async (req, res) => {
    try{
        const {code} = req.body;
        const response = await prisma.products.findFirst({
            where: {code: code}
        })
        console.log("DB RESPONSE", response)
        if(response){
            res.send({status: 400, data: `A product with code ${code} already exists`})
        }
        else{
            res.send({status: 200, data: `okay`})
        }
        
    }
    catch(error){
        res.send({status: 500, data: 'An error has occured'})
    }
    finally{
        await prisma.$disconnect()
    }
}

exports.addProduct = async (req, res) => {
    try {
        const productId = req.id
        let data = JSON.parse(req.body.data)
        data = parseDataType(data)
        data = { productId, ...data }
        let products = await prisma.products.create({
            data: data
        })
        req['skipResponse'] = true;
        await addProductVariants(req, res)
        await addProductImages(req, res)
        await addProductMoreDetails(req, res)

        if (products) {
            res.send({ status: 200, data: "Product Added" })
        }
        else {
            res.send({ status: 500, data: "Error in adding product" })
        }
    }
    catch (error) {
        console.log(error)
        res.send({ status: 500, error: error })
    }
    finally {
        await prisma.$disconnect()
    }

}

exports.getProductById = async (req, res) => {
    const id = req.params.id
    try {
        let product = await prisma.products.findUnique({
            where: { productId: id },
            include: {
                variants: true,
                category: true,
                images: true,
                moreDetails: true,
                comments: {
                    include: {
                        user: { select: { fname: true, lname: true, image: true } },
                        replies: true,
                    }
                }
            }
        })
        if (product) {
            product.images = product.images.map(image => {
                return { ...image, name: image.url, url: `${process.env.SERVER_URL}/public/productImages/${image.productId}/${image.url}` }
            })
            if (product.comments.length > 0) {
                product.comments = product.comments.map(comment => {
                    comment.user.image = `${process.env.SERVER_URL}/public/userProfile/${comment.user.image}`
                    return comment
                })
            }
            res.send({ status: 200, data: product })
        }
        else {
            res.send({ status: 403, data: [] })
        }
    }
    catch (error) {
        console.log(error)
        res.send({ status: 500, data: error.message })
    }
    finally {
        await prisma.$disconnect()
    }
}

exports.updateProduct = async (req, res) => {
    let data = req.body
    try {
        const productId = data.productId
        data.productId = undefined
        delete data.productId;
        data = parseDataType(data)
        let product = await prisma.products.update({
            where: { productId: productId },
            data: data
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

exports.deleteProduct = async (req, res) => {
    const productId = req.body.productId

    try {
        const dir = `public/productImages/${productId}`;
        fs.rmSync(dir, { recursive: true, force: true });
    } catch (err) { }
    try {
        let product = await prisma.products.delete({
            where: { productId: productId }
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

// exports.getProductByIdSystem = async (id) => {
//     try {
//         let product = await Product.findById(id)
//         let image_urls = []
//         product.image_urls.forEach(name => {
//             name = `${process.env.SERVER_URL}/public/productImages/${id}/${name}`
//             image_urls.push(name)
//         })
//         product.image_urls = image_urls
//         return product
//     }
//     catch (error) {
//         return {error: "error"}
//     }
// }

