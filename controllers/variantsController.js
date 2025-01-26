const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient()

exports.addVariant = async (req, res) => {
    const { variantName } = req.body
    console.log("VARIANT", req.body)
    try{
        const variantId = "982"+Date.now() 
        const variant = await prisma.variants.create({
            data: {variantName, variantId}
        })
        if(variant){
            res.send({status: 200, data: variant})
        }
    }
    catch(error){
        console.log(error)
        res.send({status: 500, data: error.message})
    }
    finally {
        await prisma.$disconnect()
    }

}

exports.getVariants = async (req, res) => {
    try{
        const variants = await prisma.variants.findMany()
        if(variants === "Not Found") res.send({status: 404, data: []})
        else res.send({status: 200, data: variants})
    }
    catch(error){
        console.log(error)
        res.send({status: 500, data: error.message})
    }
    finally {
        await prisma.$disconnect()
    }
}

exports.updateVariant = async (req, res) => {
    const { variantName, variantId } = req.body
    try{
        const variant = await prisma.variants.update({
            where: {variantId: variantId},
            data: {variantName: variantName}
        })
        if(variant){
            res.send({status: 200, data: variant})
        }
    }
    catch(error){
        console.log(error)
        res.send({status: 500, data: error.message})
    }
    finally {
        await prisma.$disconnect()
    }

}

exports.deleteVariant = async (req, res) => {
    const { variantId } = req.body
    try{
        // const category = await Category.findByIdAndDelete({_id: categoryId })
        const variant = await prisma.variants.delete({
            where: {variantId: variantId}
        })
        if(variant){
            res.send({status: 200, data: variant})
        }
    }
    catch(error){
        console.log(error)
        res.send({status: 500, data: error.message})
    }
    finally {
        await prisma.$disconnect()
    }

}