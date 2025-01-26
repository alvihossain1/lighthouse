const express = require('express');
const router = express.Router();
const { addUser, getUsers, getUserById, userLogin } = require('../controllers/userController');
const {multerUploadUserProfile, multerUploadProductImage, createNewDirectoryProduct, userIdAssign, multerUpdateProductSingleImage, parseData, parseProductId} = require('../controllers/multerUpload');

// const { authorization } = require('../lib/auth');
const { getAdminUser } = require('../controllers/adminUserController');
const { getProducts, addProduct, getProductById, updateProduct, deleteProduct, checkProductId } = require('../controllers/productController');
const { protectedRoute } = require('../lib/auth');
const { getOrders, postOrders, changeOrderStatus, getOrdersPrisma, paymentCheck } = require('../controllers/orderController');
const { addCategory, getCategories, updateCategory, deleteCategory } = require('../controllers/categoriesController');
const { addProductImages, updateProductSingleImage, deleteProductImages } = require('../controllers/productImagesController');
const { addProductMoreDetailsSingle, updateProductMoreDetails, deleteProductMoreDetails, getProductMoreDetailsById } = require('../controllers/productMoreDetailsController');
const { productsAnalysisByOrder } = require('../controllers/productsOnOrdersController');
const { getVariants, addVariant, updateVariant, deleteVariant } = require('../controllers/variantsController');
const { getProductVariantsById, addProductVariantsSingle, updateProductVariant, deleteProductVariant } = require('../controllers/productVariantsController');
const { transactionCheck } = require('../lib/payment/trans');
const { sslCommerzPaymentCheck } = require('../lib/payment/sslcommerz');

router.use("/api/auth", protectedRoute);

// ADMIN ROUTES
router.post("/api/admin/login", getAdminUser)

// USER ROUTES START
router.post("/api/user/login", userLogin)
router.post("/api/users", userIdAssign, multerUploadUserProfile().single('image'), addUser);
router.get("/api/users", getUsers);
router.get("/api/users/:id", getUserById);
// USER ROUTES END

// PRODUCTS START
// images details
router.delete("/api/auth/product/u/image", deleteProductImages);
router.post("/api/auth/product/u/images", multerUploadProductImage().array("images"), addProductImages );
router.post("/api/auth/product/u/image", multerUpdateProductSingleImage().single("image"), updateProductSingleImage);
router.post("/api/auth/products/checkcode", checkProductId );
router.post("/api/auth/products", createNewDirectoryProduct, multerUploadProductImage().array("images"), addProduct);
// product variants
router.get("/api/auth/product/variants/:id", getProductVariantsById );
router.post("/api/auth/product/variants", addProductVariantsSingle);
router.put("/api/auth/product/variants", updateProductVariant);
router.delete("/api/auth/product/variants", deleteProductVariant);
// more details
router.get("/api/auth/product/details/:id", getProductMoreDetailsById );
router.post("/api/auth/product/details", addProductMoreDetailsSingle);
router.put("/api/auth/product/details", updateProductMoreDetails);
router.delete("/api/auth/product/details", deleteProductMoreDetails);
// product
router.delete("/api/auth/product", deleteProduct);
router.put("/api/auth/product", updateProduct);
router.get("/api/product/:id", getProductById);
router.get("/api/products/category/:name", getProducts);
router.get("/api/products", getProducts);
router.get("/api/products/analysis", productsAnalysisByOrder);
// PRODUCTS END

// ORDERS START
// router.get("/api/get/orders", getOrdersPrisma);
router.post("/api/auth/get/orders", getOrders);
router.put("/api/auth/orders/status", changeOrderStatus)
router.post("/api/auth/orders", paymentCheck, postOrders);
router.get("/api/auth/torders/:transId", transactionCheck, postOrders);
// ORDERS END

// CATEGORIES START
router.get("/api/categories", getCategories);
router.post("/api/auth/categories", addCategory);
router.put("/api/auth/categories", updateCategory);
router.delete("/api/auth/categories", deleteCategory);
// CATEGORIES END

// VARIANTS ONLY START
router.get("/api/variants", getVariants);
router.post("/api/auth/variants", addVariant);
router.put("/api/auth/variants", updateVariant);
router.delete("/api/auth/variants", deleteVariant);
// VARIANTS ONLY END

// PAYMENTS
router.post("/api/payment/:status/:trans_id", sslCommerzPaymentCheck);

module.exports = router;