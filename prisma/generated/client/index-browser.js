
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.1.0
 * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
 */
Prisma.prismaVersion = {
  client: "6.1.0",
  engine: "11f085a2012c0f4778414c8db2651556ee0ef959"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminScalarFieldEnum = {
  adminId: 'adminId',
  fname: 'fname',
  lname: 'lname',
  email: 'email',
  password: 'password',
  image: 'image',
  createdAt: 'createdAt'
};

exports.Prisma.UsersScalarFieldEnum = {
  userId: 'userId',
  fname: 'fname',
  lname: 'lname',
  phone: 'phone',
  address: 'address',
  city: 'city',
  email: 'email',
  password: 'password',
  image: 'image',
  createdAt: 'createdAt'
};

exports.Prisma.CategoriesScalarFieldEnum = {
  categoryId: 'categoryId',
  name: 'name'
};

exports.Prisma.VariantsScalarFieldEnum = {
  variantId: 'variantId',
  variantName: 'variantName'
};

exports.Prisma.ProductsScalarFieldEnum = {
  productId: 'productId',
  name: 'name',
  brand: 'brand',
  categoryId: 'categoryId',
  price: 'price',
  variantType: 'variantType',
  description: 'description',
  longDescription: 'longDescription',
  discount: 'discount',
  code: 'code',
  createdAt: 'createdAt'
};

exports.Prisma.ProductVariantsScalarFieldEnum = {
  variantId: 'variantId',
  variantName: 'variantName',
  stock: 'stock',
  price: 'price',
  productId: 'productId'
};

exports.Prisma.ProductImagesScalarFieldEnum = {
  imageId: 'imageId',
  url: 'url',
  productId: 'productId'
};

exports.Prisma.OrdersScalarFieldEnum = {
  orderId: 'orderId',
  date: 'date',
  totalPrice: 'totalPrice',
  deliveryFee: 'deliveryFee',
  paymentMethod: 'paymentMethod',
  deliveryAddress: 'deliveryAddress',
  additionalFee: 'additionalFee',
  discountFee: 'discountFee',
  status: 'status',
  userId: 'userId'
};

exports.Prisma.ProductsOnOrdersScalarFieldEnum = {
  productsOnOrdersId: 'productsOnOrdersId',
  quantity: 'quantity',
  itemPrice: 'itemPrice',
  variantId: 'variantId',
  variantName: 'variantName',
  orderId: 'orderId',
  productId: 'productId'
};

exports.Prisma.ProductMoreDetailsScalarFieldEnum = {
  detailsId: 'detailsId',
  productId: 'productId',
  detailKey: 'detailKey',
  detailValue: 'detailValue'
};

exports.Prisma.CommentsScalarFieldEnum = {
  commentId: 'commentId',
  body: 'body',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  productId: 'productId'
};

exports.Prisma.RepliesScalarFieldEnum = {
  replyId: 'replyId',
  body: 'body',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  image: 'image',
  commentId: 'commentId'
};

exports.Prisma.OrderTransactionsScalarFieldEnum = {
  transactionId: 'transactionId',
  data: 'data',
  paymentConfirmData: 'paymentConfirmData',
  paymentMethod: 'paymentMethod',
  date: 'date',
  paid: 'paid'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.AdminOrderByRelevanceFieldEnum = {
  adminId: 'adminId',
  fname: 'fname',
  lname: 'lname',
  email: 'email',
  password: 'password',
  image: 'image'
};

exports.Prisma.UsersOrderByRelevanceFieldEnum = {
  userId: 'userId',
  fname: 'fname',
  lname: 'lname',
  phone: 'phone',
  address: 'address',
  city: 'city',
  email: 'email',
  password: 'password',
  image: 'image'
};

exports.Prisma.CategoriesOrderByRelevanceFieldEnum = {
  categoryId: 'categoryId',
  name: 'name'
};

exports.Prisma.VariantsOrderByRelevanceFieldEnum = {
  variantId: 'variantId',
  variantName: 'variantName'
};

exports.Prisma.ProductsOrderByRelevanceFieldEnum = {
  productId: 'productId',
  name: 'name',
  brand: 'brand',
  categoryId: 'categoryId',
  variantType: 'variantType',
  description: 'description',
  longDescription: 'longDescription',
  code: 'code'
};

exports.Prisma.ProductVariantsOrderByRelevanceFieldEnum = {
  variantId: 'variantId',
  variantName: 'variantName',
  productId: 'productId'
};

exports.Prisma.ProductImagesOrderByRelevanceFieldEnum = {
  imageId: 'imageId',
  url: 'url',
  productId: 'productId'
};

exports.Prisma.OrdersOrderByRelevanceFieldEnum = {
  orderId: 'orderId',
  paymentMethod: 'paymentMethod',
  deliveryAddress: 'deliveryAddress',
  status: 'status',
  userId: 'userId'
};

exports.Prisma.ProductsOnOrdersOrderByRelevanceFieldEnum = {
  productsOnOrdersId: 'productsOnOrdersId',
  variantId: 'variantId',
  variantName: 'variantName',
  orderId: 'orderId',
  productId: 'productId'
};

exports.Prisma.ProductMoreDetailsOrderByRelevanceFieldEnum = {
  detailsId: 'detailsId',
  productId: 'productId',
  detailKey: 'detailKey',
  detailValue: 'detailValue'
};

exports.Prisma.CommentsOrderByRelevanceFieldEnum = {
  commentId: 'commentId',
  body: 'body',
  userId: 'userId',
  productId: 'productId'
};

exports.Prisma.RepliesOrderByRelevanceFieldEnum = {
  replyId: 'replyId',
  body: 'body',
  name: 'name',
  image: 'image',
  commentId: 'commentId'
};

exports.Prisma.OrderTransactionsOrderByRelevanceFieldEnum = {
  transactionId: 'transactionId',
  data: 'data',
  paymentConfirmData: 'paymentConfirmData',
  paymentMethod: 'paymentMethod'
};


exports.Prisma.ModelName = {
  Admin: 'Admin',
  Users: 'Users',
  Categories: 'Categories',
  Variants: 'Variants',
  Products: 'Products',
  ProductVariants: 'ProductVariants',
  ProductImages: 'ProductImages',
  Orders: 'Orders',
  ProductsOnOrders: 'ProductsOnOrders',
  ProductMoreDetails: 'ProductMoreDetails',
  Comments: 'Comments',
  Replies: 'Replies',
  OrderTransactions: 'OrderTransactions'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
