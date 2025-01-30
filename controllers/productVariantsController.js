const prisma = require("../utils/prisma")

exports.getProductVariantsById = async (req, res) => {
    const productId = req.params.id || "xxy"
    try {
        let dbdetails = await prisma.productVariants.findMany({
            where: { productId: productId}
        })
        res.send({ status: 200, data: dbdetails })
    }
    catch (error) {
        console.log(error)
        res.send({ status: 500, error: error })
    }
    finally {
        await prisma.$disconnect()
    }
}

const parseDataType = (data) => {
    let price = parseFloat(data.price)
    let stock = parseInt(data.stock)
    const newData = { price, stock }
    return { ...data, ...newData }
}

exports.addProductVariants = async (req, res) => {
    let productVariants = JSON.parse(req?.body?.productVariants || '[]')
    if(productVariants && productVariants?.length > 0){
        productVariants = productVariants.map((variant, index) => {
            const variantId = "202"+(index+1)+Date.now();
            const parsedData = parseDataType(variant)
            return {variantId, productId: req.id, variantName: variant.variantName, ...parsedData}
        })
        try {
            let dbdetails = await prisma.productVariants.createMany({
                data: productVariants
            })
            // res.send({ status: 200, data: dbdetails })
        }
        catch (error) {
            console.log(error)
            // res.send({ status: 500, error: error })
        }
        finally {
            await prisma.$disconnect()
        }
    }
    
}

exports.addProductVariantsSingle = async (req, res) => {
    const {variantName, stock, price, productId} = req?.body
    const variantId = "202"+"1"+Date.now();
    try {
        const parsedData = parseDataType({stock, price})
        let dbdetails = await prisma.productVariants.create({
            data: {variantId, variantName, ...parsedData, productId}
        })
        res.send({ status: 200, data: dbdetails })
    }
    catch (error) {
        console.log(error)
        res.send({ status: 500, error: error })
    }
    finally {
        await prisma.$disconnect()
    }
}

exports.updateProductQuantitySystem = async (products, action) => {
    try {
        let update;
        products.forEach(async (product) => {
            if (action === 'increment') {
                update = await prisma.productVariants.update({
                    where: { productId: product.productId, variantId: product.variantId },
                    data: { stock: { increment: product.quantity } }
                })
            }
            else if (action === "decrement") {
                update = await prisma.productVariants.update({
                    where: { productId: product.productId, variantId: product.variantId },
                    data: { stock: { decrement: product.quantity } }
                })
            }
        })

    }
    catch (error) {
        return { error: "error" }
    }
    finally {
        await prisma.$disconnect()
    }
}

exports.updateProductVariant = async (req, res) => {
    const data = req?.body
    const {variantId, variantName, stock, price, productId } = data
    try {
        const parsedData = parseDataType({stock, price})
        let dbdetails = await prisma.productVariants.update({
            where: {variantId: variantId, productId: productId},
            data: {variantName, ...parsedData,}
        })
        res.send({ status: 200, data: dbdetails })
    }
    catch (error) {
        console.log(error)
        res.send({ status: 500, data: error.message })
    }
    finally {
        await prisma.$disconnect()
    }
}

exports.deleteProductVariant = async (req, res) => {
    const data = req?.body
    console.log(data);
    const { variantId, productId } = data
    try {
        let dbdetails = await prisma.productVariants.delete({
            where: { variantId: variantId, productId: productId},
        })
        res.send({ status: 200, data: dbdetails })
    }
    catch (error) {
        console.log(error)
        res.send({ status: 500, data: error.message })
    }
    finally {
        await prisma.$disconnect()
    }
}


