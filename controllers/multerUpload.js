const multer  = require('multer');
const fs = require('fs');
const path = require('path');
 

exports.userIdAssign = (req, res, next) => {
    const id = '101' + Date.now();
    req.id = id;
    next()
}
exports.multerUploadUserProfile = () =>{
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            return cb(null, "public/userProfile")
        },
        filename: function(req, file, cb){
            // console.log("Multer Uploads");
            // console.log("Multer FILE: ", file);
            // console.log("Multer DATA: ", JSON.parse(req.body.user));
            // let object = JSON.parse(req.body.user)
            let extArray = file.originalname.split(".");
            let extension = extArray[extArray.length - 1];
            return cb(null, `${req.id}.${extension}`)
        }
    })
    const upload = multer({storage});
    return upload;
}


exports.createNewDirectoryProduct = (req, res, next) => {
    const id = '201' + Date.now();
    req.id = id
    fs.mkdir(path.join('public/productImages', id),
    (err) => {
        if (err) {
            res.send({status: 500, data: "Internal server error!"})
        }
        else{
            next()
        }
        // console.log('Directory created successfully!');
    });
}
exports.multerUploadProductImage = () =>{
    const storage = multer.diskStorage({
        destination: function(req, file, cb){            
            if(req.body.productId) req.id = req.body.productId; 
            return cb(null, `public/productImages/${req.id}`)
        },
        filename: function(req, file, cb){
            // let extArray = file.originalname.split(".");
            // let extension = extArray[extArray.length - 1];
            return cb(null, file.originalname)
        }
    })
    const upload = multer({storage});
    return upload;
}

exports.multerUpdateProductSingleImage = () =>{
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            const data = JSON.parse(req.body.data)
            try{
                fs.unlinkSync(`public/productImages/${data.productId}/${data.oldName}`)
            }
            catch(err){}
            finally{
                return cb(null, `public/productImages/${data.productId}`)
            } 
        },
        filename: function(req, file, cb){
            // const data = JSON.parse(req.body.data)
            // let extArray = file.originalname.split(".");
            // let extension = extArray[extArray.length - 1];
            return cb(null, file.originalname)
        }
    })
    const upload = multer({storage});
    return upload;
}
