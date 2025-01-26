const { generate_token } = require('../lib/auth');
const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient()

exports.addUser = async (req, res) => {
    let data = JSON.parse(req.body.user);
    let file = req.file;
    // console.log("File:", file)
    // let url = file?.destination + "/" + file?.filename;  
    const userId = req.id;
    let image = null
    if(file !== undefined){
        image = file.filename;
    }
    data = {userId, ...data, image}
    console.log("Data:", data)
    try{
        const findUser = await prisma.users.findUnique({
            where:{email: data.email}
        })
        if(findUser){
            res.send({status: 300, data: "User with the email already exists!"})
        }
        else{
            const user = await prisma.users.create({data: data})
            res.send({status: 200, data: "Registration Successful!"})
        }
    }
    catch(error){
        console.log(error)
        res.send({status: 500, data: error})
    }
    finally {
        await prisma.$disconnect()
    }
    
}

exports.userLogin = async (req, res) => {    
    const {email, password} = req.body
    console.log(`USER LOGIN API  email = ${email}, password = ${password}`)
    try{
        const user = await prisma.users.findUnique({
            where: {email: email}
        })
        if(user){
            if(user.email === email && user.password === password){
                user.password = undefined
                delete user.password
                let url = `${process.env.SERVER_URL}/public/blank-profile.jpg`
                if(user.image){
                    url = `${process.env.SERVER_URL}/public/userProfile/${user.image}`
                }
                const newUser = {userId: user.userId, name: user.fname+" "+user.lname, email: user.email, image: url, role: "user" }
                const token = generate_token(newUser)
                console.log("User", newUser)
                res.send({status: 200, token: token, data: newUser})
            }
            else{
                res.send({status: 500, data: "Incorrect email or password"})
            }
        }
        else{
            res.send({status: 500, data: "No User Found"})
        }
    }
    catch(error){
        console.log(error)
        res.send({status: 500, data: error})
    }
    finally {
        await prisma.$disconnect()
    }
    
}

exports.getUsers = async (req, res) => {    
    try{
        let users = await prisma.users.findMany()
        users = users.filter(user => {
            user.password = undefined
            delete user.password             
            if(user.image) user.image = `${process.env.SERVER_URL}/public/userProfile/${user.image}`
            else user.image = `${process.env.SERVER_URL}/public/blank-profile.jpg`
            return user
        })
        res.send({status: 200, data: users})
    }
    catch(error){
        res.send({status: 500, error: error})
    }
    finally {
        await prisma.$disconnect()
    }
}

exports.getUserById = async (req, res) => {    
    const id = req.params.id
    try{
        const user = await prisma.users.findUnique({
            where: {userId: id}
        })
        if(user){
            user.password = undefined
            delete user.password
            if(user.image) user.image = `${process.env.SERVER_URL}/public/userProfile/${user.image}`
            else user.image = `${process.env.SERVER_URL}/public/blank-profile.jpg`
            res.send({status: 200, data: user})
        }
        else{
            res.send({status: 200, data: "No user found"})
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

// MODIFY LATER
// exports.getUserByIdSystem = async (id) => {
//     try {
//         let user = await Users.findById(id)
//         user.password = undefined
//         delete user.password
//         if(user.image) user.image = `${process.env.SERVER_URL}/public/userProfile/${user.image}`
//         else user.image = `${process.env.SERVER_URL}/public/blank-profile.jpg`
//         return user
//     }
//     catch (error) {
//         return {error: "error"}
//     }

// }