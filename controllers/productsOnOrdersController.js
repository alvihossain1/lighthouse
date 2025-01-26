const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient()


exports.addProductsOnOrders = async (products, orderId) => {
    products = products.map((product, index) => {
        const productsOnOrdersId = "302"+(index+1)+Date.now()
        return {productsOnOrdersId, orderId, ...product}
    })
    try {
        let dbdetails = await prisma.productsOnOrders.createMany({
            data: products
        })
        if(dbdetails) return true
    }
    catch (error) {
        console.log(error)
        return false
    }
    finally {
        await prisma.$disconnect()
    }
}

exports.productsAnalysisByOrder = async (req, res) => {
    try {
        let dbData = await prisma.productsOnOrders.groupBy({
            by: ['productId'],
            _count: {
                orderId: true,
            },
            _sum: {
                quantity: true,
            },
            orderBy: {
                // _sum: {
                //     quantity: 'desc',
                // },
                _count: {
                    orderId: 'desc',
                },
            },
        })
        let dbData2 = await prisma.products.findMany({
            where: {
                productId: {
                    in: dbData.map((each) => {return each.productId}),
                }
            },
            select: {
                productId: true,
                code: true,
                brand: true,
                name: true,
                price: true,
                images: {
                    select: {
                        url: true,
                        productId: true,                        
                    },
                    take: 1,
                },
            }
        })
        let dbdata = dbData.map(data => {
            let found = false;
            let product = null;
            for(let i = 0; i < dbData2.length; i++){
                if(data.productId === dbData2[i].productId){
                    found = true
                    product = dbData2[i];
                    break;
                }
            }
            if(product){
                data['product'] = product
                data['product']['url'] = `${process.env.SERVER_URL}/public/productImages/${product.images[0].productId}/${product.images[0].url}`
            };
            data['totalOrder'] = data._count.orderId
            data['totalQuantity'] = data._sum.quantity
            return data;
        })
        res.send({status: 200, data: dbdata})
    }
    catch (error) {
        res.send({status: 500, data: error})
    }
    finally {
        await prisma.$disconnect()
    }
}