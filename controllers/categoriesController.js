const prisma = require("../utils/prisma")

exports.addCategory = async (req, res) => {
    const { name } = req.body
    console.log("CATEGORY", req.body)
    try{
        const categoryId = "981"+Date.now() 
        const category = await prisma.categories.create({
            data: {name, categoryId}
        })
        if(category){
            res.send({status: 200, data: category})
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

exports.getCategories = async (req, res) => {
    try{
        let categories = await prisma.categories.findMany({
            select: {categoryId: true, name: true, products: {select: {productId: true, name: true, images: {select: {url: true, productId: true}, take: 1}}} },
            orderBy: {
                name: 'asc',
            }
        })
        categories = categories.map(category => {
            category.products.map(product => {
                product['url'] = `${process.env.SERVER_URL}/public/productImages/${product?.images[0]?.productId}/${product?.images[0]?.url}`
                product.images = undefined
                delete product.images
                return product
            })
            return category
        })

        res.send({status: 200, data: categories})
    }
    catch(error){
        console.log(error)
        res.send({status: 500, data: error.message})
    }
    finally {
        await prisma.$disconnect()
    }
}

exports.updateCategory = async (req, res) => {
    const { name, categoryId } = req.body
    try{
        // const category = await Category.findByIdAndUpdate({_id: categoryId }, {name: name})
        const category = await prisma.categories.update({
            where: {categoryId: categoryId},
            data: {name: name}
        })
        if(category){
            res.send({status: 200, data: category})
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

exports.deleteCategory = async (req, res) => {
    const { categoryId } = req.body
    try{
        // const category = await Category.findByIdAndDelete({_id: categoryId })
        const category = await prisma.categories.delete({
            where: {categoryId: categoryId}
        })
        if(category){
            res.send({status: 200, data: category})
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