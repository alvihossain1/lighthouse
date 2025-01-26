// const { sendMail } = require("../lib/emailer");
const { paySSLCommerz } = require("../lib/payment/sslcommerz");
const { payStripe } = require("../lib/payment/stripe");
const {  updateProductQuantitySystem } = require("./productController");
const { addProductsOnOrders } = require("./productsOnOrdersController");


const { PrismaClient } = require('../prisma/generated/client');
// const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

exports.getOrders = async (req, res) => {
    const userId = req.body.userId || null
    let skip = 0;
    let take = 3;
    if (req.query) {
        skip = parseInt(req.query.skip)
        take = parseInt(req.query.take)
    }
    // console.log("QUERY STRING", skip, take)
    try {
        let orders = null;
        if (userId) {
            orders = await prisma.orders.findMany({
                where: { userId: userId },
                include: {
                    productsOnOrders: {
                        include: {
                            orders: userId ? true : false,
                            products: {
                                include: { images: true },
                            },
                        }
                    }
                },
                orderBy: { orderId: 'desc' },
            })
        }
        else {
            orders = await prisma.orders.findMany({
                include: {
                    user: true,
                    productsOnOrders: {
                        include: {
                            orders: userId ? true : false,
                            products: {
                                include: { images: true },
                            },
                        }
                    }
                },
                orderBy: { orderId: 'desc' },
                skip: skip ? skip : 0,
                take: take ? take : 10000,
            })
        }
        if (orders) {
            orders = orders.map(order => {
                if (order?.user) order.user.image = `${process.env.SERVER_URL}/public/userProfile/${order.user.image}`
                order.productsOnOrders.map(productOnOrder => {
                    let product = productOnOrder.products
                    let url = product.images[0].url
                    productOnOrder.url = `${process.env.SERVER_URL}/public/productImages/${product.productId}/${url}`
                    productOnOrder.code = product.code
                    productOnOrder.name = product.name
                    productOnOrder.variantType = product.variantType
                    productOnOrder.variantId = productOnOrder.variantId
                    productOnOrder.variantName = productOnOrder.variantName
                    productOnOrder.brand = productOnOrder.brand
                    productOnOrder.stock = productOnOrder.stock
                    delete productOnOrder.products
                    return product
                })
                order['products'] = order['productsOnOrders']
                delete order.productsOnOrders
                return order
            })
            res.send({ status: 200, data: orders })
        }
        else {
            res.send({ status: 404, data: [] })
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


// exports.getOrdersPrisma = async (req, res) => {
//     const userId = req.body.userId || null
//     try {
//         let orders = await prisma.orders.findMany({
//             include: {
//                 user: true,
//                 productsOnOrders: {
//                     include: {
//                         orders: userId ? true : false,
//                         products: {
//                             include: { images: true },
//                         },
//                     }
//                 }
//             }
//         })

//         if (orders) {
//             orders = orders.map(order => {
//                 order.user.image = `${process.env.SERVER_URL}/public/userProfile/${order.user.image}`
//                 order.productsOnOrders.map(productOnOrder => {
//                     let product = productOnOrder.products
//                     let url = product.images[0].url
//                     productOnOrder.url = `${process.env.SERVER_URL}/public/productImages/${product.productId}/${url}`
//                     productOnOrder.code = product.code
//                     productOnOrder.name = product.name
//                     productOnOrder.variantType = product.variantType
//                     productOnOrder.variantId = product.variantId
//                     productOnOrder.variantName = product.variantName
//                     productOnOrder.brand = product.brand
//                     productOnOrder.stock = product.stock
//                     delete productOnOrder.products
//                     return product
//                 })
//                 order['products'] = order['productsOnOrders']
//                 delete order.productsOnOrders
//                 return order
//             })
//             res.send({ status: 200, data: orders })
//         }
//         else {
//             res.send({ status: 404, data: [] })
//         }

//     }
//     catch (error) {
//         console.log(error)
//         res.send({ status: 500, data: error.message })
//     }
//     finally {
//         await prisma.$disconnect()
//     }

// }


exports.paymentCheck = async (req, res, next) => {
    const { paymentMethod } = req?.body?.order
    console.log("PAYMENT SELECTED", paymentMethod)
    if (paymentMethod === "Cash") {
        next()
    }
    else if (paymentMethod === "Stripe") {
        payStripe(req, res, next)
    }
    else if (paymentMethod === "sslcommerz") {
        paySSLCommerz(req, res, next)
    }

}

exports.postOrders = async (req, res) => {
    const { order, products, user, emailProducts } = req.body
    const orderId = "301" + Date.now();
    let data = { orderId, ...order }
    console.log("EMAIL PRODUCTS", emailProducts)
    try {
        const orderdb = await prisma.orders.create({
            data: data
        })
        if (orderdb) {
            const por = await addProductsOnOrders(products, orderId)
            // sendMail({user, order: data, products: emailProducts})
            updateProductQuantitySystem(products, 'decrement')
            res.send({ status: 200, data: orderdb })
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

exports.changeOrderStatus = async (req, res) => {
    const { orderId, status, products } = req.body
    try {
        const order = await prisma.orders.update({
            where: { orderId: orderId },
            data: { status: status },
        })
        if (order) {
            if (status === 'cancelled') {
                updateProductQuantitySystem(products, 'increment')
            }
            res.send({ status: 200, data: order })
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