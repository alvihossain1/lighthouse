const prisma = require("../utils/prisma")
const { generate_token } = require('../lib/auth');

exports.getAdminUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const adminUser = await prisma.admin.findUnique({
            where: {
                email: email,
            },
        })
        if (adminUser) {
            let url = null
            if (adminUser.image) {
                url = `${process.env.SERVER_URL}/public/adminProfile/${adminUser.image}`
            }
            if (adminUser.email === email && adminUser.password === password) {
                adminUser.password = undefined
                delete adminUser.password
                image = `${process.env.SERVER_URL}/public/adminProfile/${adminUser.image}`
                const user = { userId: adminUser.adminId, name: adminUser.fname + " " + adminUser.lname, email: adminUser.email, image: url, role: "admin" }
                const token = generate_token(user)
                console.log("User", user)
                res.send({ status: 200, token: token, data: user })
            }
            else {
                res.send({ status: 500, data: "Incorrect email or password" })
            }
        }
        else {
            res.send({ status: 500, data: "No User Found" })
        }
    }
    catch (error) {
        res.send({ status: 500, data: error })
    }
    finally {
        await prisma.$disconnect()
    }

}