const prisma = require("../utils/prisma")


exports.getProductMoreDetailsById = async (req, res) => {
    const productId = req.params.id || "xxy"
    try {
        let dbdetails = await prisma.productMoreDetails.findMany({
            where: { productId : productId}
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

exports.addProductMoreDetails = async (req, res) => {
    let moreDetails = JSON.parse(req?.body?.moreDetails || '[]')
    if(moreDetails && moreDetails?.length > 0){
        moreDetails = moreDetails.map((detail, index) => {
            const detailsId = "203"+(index+1)+Date.now();
            return {detailsId, detailKey: detail.detailKey, detailValue: detail.detailValue, productId: req.id}
        })
        try {
            let dbdetails = await prisma.productMoreDetails.createMany({
                data: moreDetails
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

exports.addProductMoreDetailsSingle = async (req, res) => {
    const {detailKey, detailValue, productId} = req?.body
    const detailsId = "203"+"1"+Date.now();
    try {
        let dbdetails = await prisma.productMoreDetails.create({
            data: {detailsId, productId, detailKey, detailValue}
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

exports.updateProductMoreDetails = async (req, res) => {
    const data = req?.body
    const {detailsId, detailKey, detailValue, productId } = data
    try {
        let dbdetails = await prisma.productMoreDetails.update({
            where: {detailsId: detailsId, productId: productId},
            data: {detailKey: detailKey, detailValue: detailValue}
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

exports.deleteProductMoreDetails = async (req, res) => {
    const data = req?.body
    console.log(data);
    const { detailsId, productId } = data
    try {
        let dbdetails = await prisma.productMoreDetails.delete({
            where: {detailsId: detailsId, productId: productId},
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
