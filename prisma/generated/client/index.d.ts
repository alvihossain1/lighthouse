
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Variants
 * 
 */
export type Variants = $Result.DefaultSelection<Prisma.$VariantsPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model ProductImages
 * 
 */
export type ProductImages = $Result.DefaultSelection<Prisma.$ProductImagesPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model ProductsOnOrders
 * 
 */
export type ProductsOnOrders = $Result.DefaultSelection<Prisma.$ProductsOnOrdersPayload>
/**
 * Model ProductMoreDetails
 * 
 */
export type ProductMoreDetails = $Result.DefaultSelection<Prisma.$ProductMoreDetailsPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Reply
 * 
 */
export type Reply = $Result.DefaultSelection<Prisma.$ReplyPayload>
/**
 * Model OrderTransaction
 * 
 */
export type OrderTransaction = $Result.DefaultSelection<Prisma.$OrderTransactionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.variants`: Exposes CRUD operations for the **Variants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variants.findMany()
    * ```
    */
  get variants(): Prisma.VariantsDelegate<ExtArgs>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs>;

  /**
   * `prisma.productImages`: Exposes CRUD operations for the **ProductImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImages.findMany()
    * ```
    */
  get productImages(): Prisma.ProductImagesDelegate<ExtArgs>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs>;

  /**
   * `prisma.productsOnOrders`: Exposes CRUD operations for the **ProductsOnOrders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductsOnOrders
    * const productsOnOrders = await prisma.productsOnOrders.findMany()
    * ```
    */
  get productsOnOrders(): Prisma.ProductsOnOrdersDelegate<ExtArgs>;

  /**
   * `prisma.productMoreDetails`: Exposes CRUD operations for the **ProductMoreDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductMoreDetails
    * const productMoreDetails = await prisma.productMoreDetails.findMany()
    * ```
    */
  get productMoreDetails(): Prisma.ProductMoreDetailsDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.reply`: Exposes CRUD operations for the **Reply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Replies
    * const replies = await prisma.reply.findMany()
    * ```
    */
  get reply(): Prisma.ReplyDelegate<ExtArgs>;

  /**
   * `prisma.orderTransaction`: Exposes CRUD operations for the **OrderTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderTransactions
    * const orderTransactions = await prisma.orderTransaction.findMany()
    * ```
    */
  get orderTransaction(): Prisma.OrderTransactionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Users: 'Users',
    Category: 'Category',
    Variants: 'Variants',
    Products: 'Products',
    ProductVariant: 'ProductVariant',
    ProductImages: 'ProductImages',
    Orders: 'Orders',
    ProductsOnOrders: 'ProductsOnOrders',
    ProductMoreDetails: 'ProductMoreDetails',
    Comment: 'Comment',
    Reply: 'Reply',
    OrderTransaction: 'OrderTransaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admin" | "users" | "category" | "variants" | "products" | "productVariant" | "productImages" | "orders" | "productsOnOrders" | "productMoreDetails" | "comment" | "reply" | "orderTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Variants: {
        payload: Prisma.$VariantsPayload<ExtArgs>
        fields: Prisma.VariantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>
          }
          findFirst: {
            args: Prisma.VariantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>
          }
          findMany: {
            args: Prisma.VariantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>[]
          }
          create: {
            args: Prisma.VariantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>
          }
          createMany: {
            args: Prisma.VariantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>[]
          }
          delete: {
            args: Prisma.VariantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>
          }
          update: {
            args: Prisma.VariantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>
          }
          deleteMany: {
            args: Prisma.VariantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VariantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>
          }
          aggregate: {
            args: Prisma.VariantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariants>
          }
          groupBy: {
            args: Prisma.VariantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantsCountArgs<ExtArgs>
            result: $Utils.Optional<VariantsCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      ProductImages: {
        payload: Prisma.$ProductImagesPayload<ExtArgs>
        fields: Prisma.ProductImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          findFirst: {
            args: Prisma.ProductImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          findMany: {
            args: Prisma.ProductImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>[]
          }
          create: {
            args: Prisma.ProductImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          createMany: {
            args: Prisma.ProductImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>[]
          }
          delete: {
            args: Prisma.ProductImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          update: {
            args: Prisma.ProductImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          deleteMany: {
            args: Prisma.ProductImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          aggregate: {
            args: Prisma.ProductImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImages>
          }
          groupBy: {
            args: Prisma.ProductImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImagesCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImagesCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      ProductsOnOrders: {
        payload: Prisma.$ProductsOnOrdersPayload<ExtArgs>
        fields: Prisma.ProductsOnOrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsOnOrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnOrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsOnOrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnOrdersPayload>
          }
          findFirst: {
            args: Prisma.ProductsOnOrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnOrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsOnOrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnOrdersPayload>
          }
          findMany: {
            args: Prisma.ProductsOnOrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnOrdersPayload>[]
          }
          create: {
            args: Prisma.ProductsOnOrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnOrdersPayload>
          }
          createMany: {
            args: Prisma.ProductsOnOrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsOnOrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnOrdersPayload>[]
          }
          delete: {
            args: Prisma.ProductsOnOrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnOrdersPayload>
          }
          update: {
            args: Prisma.ProductsOnOrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnOrdersPayload>
          }
          deleteMany: {
            args: Prisma.ProductsOnOrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsOnOrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductsOnOrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnOrdersPayload>
          }
          aggregate: {
            args: Prisma.ProductsOnOrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductsOnOrders>
          }
          groupBy: {
            args: Prisma.ProductsOnOrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsOnOrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsOnOrdersCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsOnOrdersCountAggregateOutputType> | number
          }
        }
      }
      ProductMoreDetails: {
        payload: Prisma.$ProductMoreDetailsPayload<ExtArgs>
        fields: Prisma.ProductMoreDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductMoreDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMoreDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductMoreDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMoreDetailsPayload>
          }
          findFirst: {
            args: Prisma.ProductMoreDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMoreDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductMoreDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMoreDetailsPayload>
          }
          findMany: {
            args: Prisma.ProductMoreDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMoreDetailsPayload>[]
          }
          create: {
            args: Prisma.ProductMoreDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMoreDetailsPayload>
          }
          createMany: {
            args: Prisma.ProductMoreDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductMoreDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMoreDetailsPayload>[]
          }
          delete: {
            args: Prisma.ProductMoreDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMoreDetailsPayload>
          }
          update: {
            args: Prisma.ProductMoreDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMoreDetailsPayload>
          }
          deleteMany: {
            args: Prisma.ProductMoreDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductMoreDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductMoreDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMoreDetailsPayload>
          }
          aggregate: {
            args: Prisma.ProductMoreDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductMoreDetails>
          }
          groupBy: {
            args: Prisma.ProductMoreDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductMoreDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductMoreDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductMoreDetailsCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Reply: {
        payload: Prisma.$ReplyPayload<ExtArgs>
        fields: Prisma.ReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          findFirst: {
            args: Prisma.ReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          findMany: {
            args: Prisma.ReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          create: {
            args: Prisma.ReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          createMany: {
            args: Prisma.ReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          delete: {
            args: Prisma.ReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          update: {
            args: Prisma.ReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          deleteMany: {
            args: Prisma.ReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          aggregate: {
            args: Prisma.ReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReply>
          }
          groupBy: {
            args: Prisma.ReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReplyCountArgs<ExtArgs>
            result: $Utils.Optional<ReplyCountAggregateOutputType> | number
          }
        }
      }
      OrderTransaction: {
        payload: Prisma.$OrderTransactionPayload<ExtArgs>
        fields: Prisma.OrderTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTransactionPayload>
          }
          findFirst: {
            args: Prisma.OrderTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTransactionPayload>
          }
          findMany: {
            args: Prisma.OrderTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTransactionPayload>[]
          }
          create: {
            args: Prisma.OrderTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTransactionPayload>
          }
          createMany: {
            args: Prisma.OrderTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTransactionPayload>[]
          }
          delete: {
            args: Prisma.OrderTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTransactionPayload>
          }
          update: {
            args: Prisma.OrderTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTransactionPayload>
          }
          deleteMany: {
            args: Prisma.OrderTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderTransactionPayload>
          }
          aggregate: {
            args: Prisma.OrderTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderTransaction>
          }
          groupBy: {
            args: Prisma.OrderTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<OrderTransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    orders: number
    comments: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    images: number
    moreDetails: number
    productsOnOrders: number
    comments: number
    variants: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductsCountOutputTypeCountImagesArgs
    moreDetails?: boolean | ProductsCountOutputTypeCountMoreDetailsArgs
    productsOnOrders?: boolean | ProductsCountOutputTypeCountProductsOnOrdersArgs
    comments?: boolean | ProductsCountOutputTypeCountCommentsArgs
    variants?: boolean | ProductsCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImagesWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountMoreDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMoreDetailsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProductsOnOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsOnOrdersWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    productsOnOrders: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productsOnOrders?: boolean | OrdersCountOutputTypeCountProductsOnOrdersArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountProductsOnOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsOnOrdersWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    adminId: string | null
    fname: string | null
    lname: string | null
    email: string | null
    password: string | null
    image: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    adminId: string | null
    fname: string | null
    lname: string | null
    email: string | null
    password: string | null
    image: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    adminId: number
    fname: number
    lname: number
    email: number
    password: number
    image: number
    createdAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    adminId?: true
    fname?: true
    lname?: true
    email?: true
    password?: true
    image?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    adminId?: true
    fname?: true
    lname?: true
    email?: true
    password?: true
    image?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    adminId?: true
    fname?: true
    lname?: true
    email?: true
    password?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    adminId: string
    fname: string
    lname: string
    email: string
    password: string
    image: string | null
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adminId?: boolean
    fname?: boolean
    lname?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adminId?: boolean
    fname?: boolean
    lname?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    adminId?: boolean
    fname?: boolean
    lname?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      adminId: string
      fname: string
      lname: string
      email: string
      password: string
      image: string | null
      createdAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `adminId`
     * const adminWithAdminIdOnly = await prisma.admin.findMany({ select: { adminId: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `adminId`
     * const adminWithAdminIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { adminId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly adminId: FieldRef<"Admin", 'String'>
    readonly fname: FieldRef<"Admin", 'String'>
    readonly lname: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly image: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    userId: string | null
    fname: string | null
    lname: string | null
    phone: string | null
    address: string | null
    city: string | null
    email: string | null
    password: string | null
    image: string | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: string | null
    fname: string | null
    lname: string | null
    phone: string | null
    address: string | null
    city: string | null
    email: string | null
    password: string | null
    image: string | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    fname: number
    lname: number
    phone: number
    address: number
    city: number
    email: number
    password: number
    image: number
    createdAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    userId?: true
    fname?: true
    lname?: true
    phone?: true
    address?: true
    city?: true
    email?: true
    password?: true
    image?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    fname?: true
    lname?: true
    phone?: true
    address?: true
    city?: true
    email?: true
    password?: true
    image?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    fname?: true
    lname?: true
    phone?: true
    address?: true
    city?: true
    email?: true
    password?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userId: string
    fname: string
    lname: string
    phone: string
    address: string
    city: string
    email: string
    password: string
    image: string | null
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fname?: boolean
    lname?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    orders?: boolean | Users$ordersArgs<ExtArgs>
    comments?: boolean | Users$commentsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fname?: boolean
    lname?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    userId?: boolean
    fname?: boolean
    lname?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Users$ordersArgs<ExtArgs>
    comments?: boolean | Users$commentsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      fname: string
      lname: string
      phone: string
      address: string
      city: string
      email: string
      password: string
      image: string | null
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const usersWithUserIdOnly = await prisma.users.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany"> | Null>
    comments<T extends Users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly userId: FieldRef<"Users", 'String'>
    readonly fname: FieldRef<"Users", 'String'>
    readonly lname: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly address: FieldRef<"Users", 'String'>
    readonly city: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly image: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.orders
   */
  export type Users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Users.comments
   */
  export type Users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    categoryId: string | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    categoryId: string | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    categoryId: number
    name: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    categoryId?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    categoryId?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    categoryId?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    categoryId: string
    name: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryId?: boolean
    name?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryId?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    categoryId?: boolean
    name?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      categoryId: string
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `categoryId`
     * const categoryWithCategoryIdOnly = await prisma.category.findMany({ select: { categoryId: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `categoryId`
     * const categoryWithCategoryIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { categoryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly categoryId: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Variants
   */

  export type AggregateVariants = {
    _count: VariantsCountAggregateOutputType | null
    _min: VariantsMinAggregateOutputType | null
    _max: VariantsMaxAggregateOutputType | null
  }

  export type VariantsMinAggregateOutputType = {
    variantId: string | null
    variantName: string | null
  }

  export type VariantsMaxAggregateOutputType = {
    variantId: string | null
    variantName: string | null
  }

  export type VariantsCountAggregateOutputType = {
    variantId: number
    variantName: number
    _all: number
  }


  export type VariantsMinAggregateInputType = {
    variantId?: true
    variantName?: true
  }

  export type VariantsMaxAggregateInputType = {
    variantId?: true
    variantName?: true
  }

  export type VariantsCountAggregateInputType = {
    variantId?: true
    variantName?: true
    _all?: true
  }

  export type VariantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variants to aggregate.
     */
    where?: VariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantsOrderByWithRelationInput | VariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variants
    **/
    _count?: true | VariantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantsMaxAggregateInputType
  }

  export type GetVariantsAggregateType<T extends VariantsAggregateArgs> = {
        [P in keyof T & keyof AggregateVariants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariants[P]>
      : GetScalarType<T[P], AggregateVariants[P]>
  }




  export type VariantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantsWhereInput
    orderBy?: VariantsOrderByWithAggregationInput | VariantsOrderByWithAggregationInput[]
    by: VariantsScalarFieldEnum[] | VariantsScalarFieldEnum
    having?: VariantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantsCountAggregateInputType | true
    _min?: VariantsMinAggregateInputType
    _max?: VariantsMaxAggregateInputType
  }

  export type VariantsGroupByOutputType = {
    variantId: string
    variantName: string
    _count: VariantsCountAggregateOutputType | null
    _min: VariantsMinAggregateOutputType | null
    _max: VariantsMaxAggregateOutputType | null
  }

  type GetVariantsGroupByPayload<T extends VariantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantsGroupByOutputType[P]>
            : GetScalarType<T[P], VariantsGroupByOutputType[P]>
        }
      >
    >


  export type VariantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    variantId?: boolean
    variantName?: boolean
  }, ExtArgs["result"]["variants"]>

  export type VariantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    variantId?: boolean
    variantName?: boolean
  }, ExtArgs["result"]["variants"]>

  export type VariantsSelectScalar = {
    variantId?: boolean
    variantName?: boolean
  }


  export type $VariantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variants"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      variantId: string
      variantName: string
    }, ExtArgs["result"]["variants"]>
    composites: {}
  }

  type VariantsGetPayload<S extends boolean | null | undefined | VariantsDefaultArgs> = $Result.GetResult<Prisma.$VariantsPayload, S>

  type VariantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VariantsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VariantsCountAggregateInputType | true
    }

  export interface VariantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variants'], meta: { name: 'Variants' } }
    /**
     * Find zero or one Variants that matches the filter.
     * @param {VariantsFindUniqueArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariantsFindUniqueArgs>(args: SelectSubset<T, VariantsFindUniqueArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Variants that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VariantsFindUniqueOrThrowArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariantsFindUniqueOrThrowArgs>(args: SelectSubset<T, VariantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsFindFirstArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariantsFindFirstArgs>(args?: SelectSubset<T, VariantsFindFirstArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Variants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsFindFirstOrThrowArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariantsFindFirstOrThrowArgs>(args?: SelectSubset<T, VariantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variants.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variants.findMany({ take: 10 })
     * 
     * // Only select the `variantId`
     * const variantsWithVariantIdOnly = await prisma.variants.findMany({ select: { variantId: true } })
     * 
     */
    findMany<T extends VariantsFindManyArgs>(args?: SelectSubset<T, VariantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Variants.
     * @param {VariantsCreateArgs} args - Arguments to create a Variants.
     * @example
     * // Create one Variants
     * const Variants = await prisma.variants.create({
     *   data: {
     *     // ... data to create a Variants
     *   }
     * })
     * 
     */
    create<T extends VariantsCreateArgs>(args: SelectSubset<T, VariantsCreateArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Variants.
     * @param {VariantsCreateManyArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variants = await prisma.variants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariantsCreateManyArgs>(args?: SelectSubset<T, VariantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variants and returns the data saved in the database.
     * @param {VariantsCreateManyAndReturnArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variants = await prisma.variants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variants and only return the `variantId`
     * const variantsWithVariantIdOnly = await prisma.variants.createManyAndReturn({ 
     *   select: { variantId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariantsCreateManyAndReturnArgs>(args?: SelectSubset<T, VariantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Variants.
     * @param {VariantsDeleteArgs} args - Arguments to delete one Variants.
     * @example
     * // Delete one Variants
     * const Variants = await prisma.variants.delete({
     *   where: {
     *     // ... filter to delete one Variants
     *   }
     * })
     * 
     */
    delete<T extends VariantsDeleteArgs>(args: SelectSubset<T, VariantsDeleteArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Variants.
     * @param {VariantsUpdateArgs} args - Arguments to update one Variants.
     * @example
     * // Update one Variants
     * const variants = await prisma.variants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariantsUpdateArgs>(args: SelectSubset<T, VariantsUpdateArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Variants.
     * @param {VariantsDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariantsDeleteManyArgs>(args?: SelectSubset<T, VariantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variants = await prisma.variants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariantsUpdateManyArgs>(args: SelectSubset<T, VariantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Variants.
     * @param {VariantsUpsertArgs} args - Arguments to update or create a Variants.
     * @example
     * // Update or create a Variants
     * const variants = await prisma.variants.upsert({
     *   create: {
     *     // ... data to create a Variants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variants we want to update
     *   }
     * })
     */
    upsert<T extends VariantsUpsertArgs>(args: SelectSubset<T, VariantsUpsertArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variants.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends VariantsCountArgs>(
      args?: Subset<T, VariantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariantsAggregateArgs>(args: Subset<T, VariantsAggregateArgs>): Prisma.PrismaPromise<GetVariantsAggregateType<T>>

    /**
     * Group by Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VariantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantsGroupByArgs['orderBy'] }
        : { orderBy?: VariantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VariantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variants model
   */
  readonly fields: VariantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Variants model
   */ 
  interface VariantsFieldRefs {
    readonly variantId: FieldRef<"Variants", 'String'>
    readonly variantName: FieldRef<"Variants", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Variants findUnique
   */
  export type VariantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where: VariantsWhereUniqueInput
  }

  /**
   * Variants findUniqueOrThrow
   */
  export type VariantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where: VariantsWhereUniqueInput
  }

  /**
   * Variants findFirst
   */
  export type VariantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantsOrderByWithRelationInput | VariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[]
  }

  /**
   * Variants findFirstOrThrow
   */
  export type VariantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantsOrderByWithRelationInput | VariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[]
  }

  /**
   * Variants findMany
   */
  export type VariantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantsOrderByWithRelationInput | VariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variants.
     */
    cursor?: VariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[]
  }

  /**
   * Variants create
   */
  export type VariantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * The data needed to create a Variants.
     */
    data: XOR<VariantsCreateInput, VariantsUncheckedCreateInput>
  }

  /**
   * Variants createMany
   */
  export type VariantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variants.
     */
    data: VariantsCreateManyInput | VariantsCreateManyInput[]
  }

  /**
   * Variants createManyAndReturn
   */
  export type VariantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Variants.
     */
    data: VariantsCreateManyInput | VariantsCreateManyInput[]
  }

  /**
   * Variants update
   */
  export type VariantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * The data needed to update a Variants.
     */
    data: XOR<VariantsUpdateInput, VariantsUncheckedUpdateInput>
    /**
     * Choose, which Variants to update.
     */
    where: VariantsWhereUniqueInput
  }

  /**
   * Variants updateMany
   */
  export type VariantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantsUpdateManyMutationInput, VariantsUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantsWhereInput
  }

  /**
   * Variants upsert
   */
  export type VariantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * The filter to search for the Variants to update in case it exists.
     */
    where: VariantsWhereUniqueInput
    /**
     * In case the Variants found by the `where` argument doesn't exist, create a new Variants with this data.
     */
    create: XOR<VariantsCreateInput, VariantsUncheckedCreateInput>
    /**
     * In case the Variants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantsUpdateInput, VariantsUncheckedUpdateInput>
  }

  /**
   * Variants delete
   */
  export type VariantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Filter which Variants to delete.
     */
    where: VariantsWhereUniqueInput
  }

  /**
   * Variants deleteMany
   */
  export type VariantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variants to delete
     */
    where?: VariantsWhereInput
  }

  /**
   * Variants without action
   */
  export type VariantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: number | null
    discount: number | null
  }

  export type ProductsSumAggregateOutputType = {
    price: number | null
    discount: number | null
  }

  export type ProductsMinAggregateOutputType = {
    productId: string | null
    name: string | null
    brand: string | null
    categoryId: string | null
    price: number | null
    variantType: string | null
    description: string | null
    longDescription: string | null
    discount: number | null
    code: string | null
    createdAt: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    productId: string | null
    name: string | null
    brand: string | null
    categoryId: string | null
    price: number | null
    variantType: string | null
    description: string | null
    longDescription: string | null
    discount: number | null
    code: string | null
    createdAt: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    productId: number
    name: number
    brand: number
    categoryId: number
    price: number
    variantType: number
    description: number
    longDescription: number
    discount: number
    code: number
    createdAt: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true
    discount?: true
  }

  export type ProductsSumAggregateInputType = {
    price?: true
    discount?: true
  }

  export type ProductsMinAggregateInputType = {
    productId?: true
    name?: true
    brand?: true
    categoryId?: true
    price?: true
    variantType?: true
    description?: true
    longDescription?: true
    discount?: true
    code?: true
    createdAt?: true
  }

  export type ProductsMaxAggregateInputType = {
    productId?: true
    name?: true
    brand?: true
    categoryId?: true
    price?: true
    variantType?: true
    description?: true
    longDescription?: true
    discount?: true
    code?: true
    createdAt?: true
  }

  export type ProductsCountAggregateInputType = {
    productId?: true
    name?: true
    brand?: true
    categoryId?: true
    price?: true
    variantType?: true
    description?: true
    longDescription?: true
    discount?: true
    code?: true
    createdAt?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    productId: string
    name: string
    brand: string
    categoryId: string
    price: number
    variantType: string
    description: string | null
    longDescription: string | null
    discount: number
    code: string
    createdAt: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    name?: boolean
    brand?: boolean
    categoryId?: boolean
    price?: boolean
    variantType?: boolean
    description?: boolean
    longDescription?: boolean
    discount?: boolean
    code?: boolean
    createdAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Products$imagesArgs<ExtArgs>
    moreDetails?: boolean | Products$moreDetailsArgs<ExtArgs>
    productsOnOrders?: boolean | Products$productsOnOrdersArgs<ExtArgs>
    comments?: boolean | Products$commentsArgs<ExtArgs>
    variants?: boolean | Products$variantsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    name?: boolean
    brand?: boolean
    categoryId?: boolean
    price?: boolean
    variantType?: boolean
    description?: boolean
    longDescription?: boolean
    discount?: boolean
    code?: boolean
    createdAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    productId?: boolean
    name?: boolean
    brand?: boolean
    categoryId?: boolean
    price?: boolean
    variantType?: boolean
    description?: boolean
    longDescription?: boolean
    discount?: boolean
    code?: boolean
    createdAt?: boolean
  }

  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Products$imagesArgs<ExtArgs>
    moreDetails?: boolean | Products$moreDetailsArgs<ExtArgs>
    productsOnOrders?: boolean | Products$productsOnOrdersArgs<ExtArgs>
    comments?: boolean | Products$commentsArgs<ExtArgs>
    variants?: boolean | Products$variantsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      images: Prisma.$ProductImagesPayload<ExtArgs>[]
      moreDetails: Prisma.$ProductMoreDetailsPayload<ExtArgs>[]
      productsOnOrders: Prisma.$ProductsOnOrdersPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      variants: Prisma.$ProductVariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: string
      name: string
      brand: string
      categoryId: string
      price: number
      variantType: string
      description: string | null
      longDescription: string | null
      discount: number
      code: string
      createdAt: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productsWithProductIdOnly = await prisma.products.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `productId`
     * const productsWithProductIdOnly = await prisma.products.createManyAndReturn({ 
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    images<T extends Products$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Products$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "findMany"> | Null>
    moreDetails<T extends Products$moreDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Products$moreDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMoreDetailsPayload<ExtArgs>, T, "findMany"> | Null>
    productsOnOrders<T extends Products$productsOnOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Products$productsOnOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnOrdersPayload<ExtArgs>, T, "findMany"> | Null>
    comments<T extends Products$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Products$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany"> | Null>
    variants<T extends Products$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Products$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */ 
  interface ProductsFieldRefs {
    readonly productId: FieldRef<"Products", 'String'>
    readonly name: FieldRef<"Products", 'String'>
    readonly brand: FieldRef<"Products", 'String'>
    readonly categoryId: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Float'>
    readonly variantType: FieldRef<"Products", 'String'>
    readonly description: FieldRef<"Products", 'String'>
    readonly longDescription: FieldRef<"Products", 'String'>
    readonly discount: FieldRef<"Products", 'Float'>
    readonly code: FieldRef<"Products", 'String'>
    readonly createdAt: FieldRef<"Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
  }

  /**
   * Products.images
   */
  export type Products$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    where?: ProductImagesWhereInput
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    cursor?: ProductImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }

  /**
   * Products.moreDetails
   */
  export type Products$moreDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMoreDetails
     */
    select?: ProductMoreDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMoreDetailsInclude<ExtArgs> | null
    where?: ProductMoreDetailsWhereInput
    orderBy?: ProductMoreDetailsOrderByWithRelationInput | ProductMoreDetailsOrderByWithRelationInput[]
    cursor?: ProductMoreDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductMoreDetailsScalarFieldEnum | ProductMoreDetailsScalarFieldEnum[]
  }

  /**
   * Products.productsOnOrders
   */
  export type Products$productsOnOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnOrders
     */
    select?: ProductsOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnOrdersInclude<ExtArgs> | null
    where?: ProductsOnOrdersWhereInput
    orderBy?: ProductsOnOrdersOrderByWithRelationInput | ProductsOnOrdersOrderByWithRelationInput[]
    cursor?: ProductsOnOrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsOnOrdersScalarFieldEnum | ProductsOnOrdersScalarFieldEnum[]
  }

  /**
   * Products.comments
   */
  export type Products$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Products.variants
   */
  export type Products$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    cursor?: ProductVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantAvgAggregateOutputType = {
    stock: number | null
    price: number | null
  }

  export type ProductVariantSumAggregateOutputType = {
    stock: number | null
    price: number | null
  }

  export type ProductVariantMinAggregateOutputType = {
    variantId: string | null
    variantName: string | null
    stock: number | null
    price: number | null
    productId: string | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    variantId: string | null
    variantName: string | null
    stock: number | null
    price: number | null
    productId: string | null
  }

  export type ProductVariantCountAggregateOutputType = {
    variantId: number
    variantName: number
    stock: number
    price: number
    productId: number
    _all: number
  }


  export type ProductVariantAvgAggregateInputType = {
    stock?: true
    price?: true
  }

  export type ProductVariantSumAggregateInputType = {
    stock?: true
    price?: true
  }

  export type ProductVariantMinAggregateInputType = {
    variantId?: true
    variantName?: true
    stock?: true
    price?: true
    productId?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    variantId?: true
    variantName?: true
    stock?: true
    price?: true
    productId?: true
  }

  export type ProductVariantCountAggregateInputType = {
    variantId?: true
    variantName?: true
    stock?: true
    price?: true
    productId?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _avg?: ProductVariantAvgAggregateInputType
    _sum?: ProductVariantSumAggregateInputType
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    variantId: string
    variantName: string
    stock: number
    price: number
    productId: string
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    variantId?: boolean
    variantName?: boolean
    stock?: boolean
    price?: boolean
    productId?: boolean
    products?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    variantId?: boolean
    variantName?: boolean
    stock?: boolean
    price?: boolean
    productId?: boolean
    products?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectScalar = {
    variantId?: boolean
    variantName?: boolean
    stock?: boolean
    price?: boolean
    productId?: boolean
  }

  export type ProductVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      variantId: string
      variantName: string
      stock: number
      price: number
      productId: string
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }

  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantFindUniqueArgs>(args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductVariant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantFindFirstArgs>(args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `variantId`
     * const productVariantWithVariantIdOnly = await prisma.productVariant.findMany({ select: { variantId: true } })
     * 
     */
    findMany<T extends ProductVariantFindManyArgs>(args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
     */
    create<T extends ProductVariantCreateArgs>(args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantCreateManyArgs>(args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariants and returns the data saved in the database.
     * @param {ProductVariantCreateManyAndReturnArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariants and only return the `variantId`
     * const productVariantWithVariantIdOnly = await prisma.productVariant.createManyAndReturn({ 
     *   select: { variantId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantDeleteArgs>(args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantUpdateArgs>(args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantUpdateManyArgs>(args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantUpsertArgs>(args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductVariant model
   */ 
  interface ProductVariantFieldRefs {
    readonly variantId: FieldRef<"ProductVariant", 'String'>
    readonly variantName: FieldRef<"ProductVariant", 'String'>
    readonly stock: FieldRef<"ProductVariant", 'Int'>
    readonly price: FieldRef<"ProductVariant", 'Float'>
    readonly productId: FieldRef<"ProductVariant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }

  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
  }

  /**
   * ProductVariant createManyAndReturn
   */
  export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
  }

  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }

  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
  }

  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
  }


  /**
   * Model ProductImages
   */

  export type AggregateProductImages = {
    _count: ProductImagesCountAggregateOutputType | null
    _min: ProductImagesMinAggregateOutputType | null
    _max: ProductImagesMaxAggregateOutputType | null
  }

  export type ProductImagesMinAggregateOutputType = {
    imageId: string | null
    url: string | null
    productId: string | null
  }

  export type ProductImagesMaxAggregateOutputType = {
    imageId: string | null
    url: string | null
    productId: string | null
  }

  export type ProductImagesCountAggregateOutputType = {
    imageId: number
    url: number
    productId: number
    _all: number
  }


  export type ProductImagesMinAggregateInputType = {
    imageId?: true
    url?: true
    productId?: true
  }

  export type ProductImagesMaxAggregateInputType = {
    imageId?: true
    url?: true
    productId?: true
  }

  export type ProductImagesCountAggregateInputType = {
    imageId?: true
    url?: true
    productId?: true
    _all?: true
  }

  export type ProductImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to aggregate.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImagesMaxAggregateInputType
  }

  export type GetProductImagesAggregateType<T extends ProductImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImages[P]>
      : GetScalarType<T[P], AggregateProductImages[P]>
  }




  export type ProductImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImagesWhereInput
    orderBy?: ProductImagesOrderByWithAggregationInput | ProductImagesOrderByWithAggregationInput[]
    by: ProductImagesScalarFieldEnum[] | ProductImagesScalarFieldEnum
    having?: ProductImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImagesCountAggregateInputType | true
    _min?: ProductImagesMinAggregateInputType
    _max?: ProductImagesMaxAggregateInputType
  }

  export type ProductImagesGroupByOutputType = {
    imageId: string
    url: string
    productId: string | null
    _count: ProductImagesCountAggregateOutputType | null
    _min: ProductImagesMinAggregateOutputType | null
    _max: ProductImagesMaxAggregateOutputType | null
  }

  type GetProductImagesGroupByPayload<T extends ProductImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImagesGroupByOutputType[P]>
        }
      >
    >


  export type ProductImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    imageId?: boolean
    url?: boolean
    productId?: boolean
    products?: boolean | ProductImages$productsArgs<ExtArgs>
  }, ExtArgs["result"]["productImages"]>

  export type ProductImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    imageId?: boolean
    url?: boolean
    productId?: boolean
    products?: boolean | ProductImages$productsArgs<ExtArgs>
  }, ExtArgs["result"]["productImages"]>

  export type ProductImagesSelectScalar = {
    imageId?: boolean
    url?: boolean
    productId?: boolean
  }

  export type ProductImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductImages$productsArgs<ExtArgs>
  }
  export type ProductImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductImages$productsArgs<ExtArgs>
  }

  export type $ProductImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImages"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      imageId: string
      url: string
      productId: string | null
    }, ExtArgs["result"]["productImages"]>
    composites: {}
  }

  type ProductImagesGetPayload<S extends boolean | null | undefined | ProductImagesDefaultArgs> = $Result.GetResult<Prisma.$ProductImagesPayload, S>

  type ProductImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductImagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductImagesCountAggregateInputType | true
    }

  export interface ProductImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImages'], meta: { name: 'ProductImages' } }
    /**
     * Find zero or one ProductImages that matches the filter.
     * @param {ProductImagesFindUniqueArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImagesFindUniqueArgs>(args: SelectSubset<T, ProductImagesFindUniqueArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductImages that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductImagesFindUniqueOrThrowArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesFindFirstArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImagesFindFirstArgs>(args?: SelectSubset<T, ProductImagesFindFirstArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesFindFirstOrThrowArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImages.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImages.findMany({ take: 10 })
     * 
     * // Only select the `imageId`
     * const productImagesWithImageIdOnly = await prisma.productImages.findMany({ select: { imageId: true } })
     * 
     */
    findMany<T extends ProductImagesFindManyArgs>(args?: SelectSubset<T, ProductImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductImages.
     * @param {ProductImagesCreateArgs} args - Arguments to create a ProductImages.
     * @example
     * // Create one ProductImages
     * const ProductImages = await prisma.productImages.create({
     *   data: {
     *     // ... data to create a ProductImages
     *   }
     * })
     * 
     */
    create<T extends ProductImagesCreateArgs>(args: SelectSubset<T, ProductImagesCreateArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductImages.
     * @param {ProductImagesCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImages = await prisma.productImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImagesCreateManyArgs>(args?: SelectSubset<T, ProductImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductImages and returns the data saved in the database.
     * @param {ProductImagesCreateManyAndReturnArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImages = await prisma.productImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductImages and only return the `imageId`
     * const productImagesWithImageIdOnly = await prisma.productImages.createManyAndReturn({ 
     *   select: { imageId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductImages.
     * @param {ProductImagesDeleteArgs} args - Arguments to delete one ProductImages.
     * @example
     * // Delete one ProductImages
     * const ProductImages = await prisma.productImages.delete({
     *   where: {
     *     // ... filter to delete one ProductImages
     *   }
     * })
     * 
     */
    delete<T extends ProductImagesDeleteArgs>(args: SelectSubset<T, ProductImagesDeleteArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductImages.
     * @param {ProductImagesUpdateArgs} args - Arguments to update one ProductImages.
     * @example
     * // Update one ProductImages
     * const productImages = await prisma.productImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImagesUpdateArgs>(args: SelectSubset<T, ProductImagesUpdateArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImagesDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImagesDeleteManyArgs>(args?: SelectSubset<T, ProductImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImages = await prisma.productImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImagesUpdateManyArgs>(args: SelectSubset<T, ProductImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductImages.
     * @param {ProductImagesUpsertArgs} args - Arguments to update or create a ProductImages.
     * @example
     * // Update or create a ProductImages
     * const productImages = await prisma.productImages.upsert({
     *   create: {
     *     // ... data to create a ProductImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImages we want to update
     *   }
     * })
     */
    upsert<T extends ProductImagesUpsertArgs>(args: SelectSubset<T, ProductImagesUpsertArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImages.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImagesCountArgs>(
      args?: Subset<T, ProductImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductImagesAggregateArgs>(args: Subset<T, ProductImagesAggregateArgs>): Prisma.PrismaPromise<GetProductImagesAggregateType<T>>

    /**
     * Group by ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImagesGroupByArgs['orderBy'] }
        : { orderBy?: ProductImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImages model
   */
  readonly fields: ProductImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductImages$productsArgs<ExtArgs> = {}>(args?: Subset<T, ProductImages$productsArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductImages model
   */ 
  interface ProductImagesFieldRefs {
    readonly imageId: FieldRef<"ProductImages", 'String'>
    readonly url: FieldRef<"ProductImages", 'String'>
    readonly productId: FieldRef<"ProductImages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductImages findUnique
   */
  export type ProductImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where: ProductImagesWhereUniqueInput
  }

  /**
   * ProductImages findUniqueOrThrow
   */
  export type ProductImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where: ProductImagesWhereUniqueInput
  }

  /**
   * ProductImages findFirst
   */
  export type ProductImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }

  /**
   * ProductImages findFirstOrThrow
   */
  export type ProductImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }

  /**
   * ProductImages findMany
   */
  export type ProductImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }

  /**
   * ProductImages create
   */
  export type ProductImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImages.
     */
    data: XOR<ProductImagesCreateInput, ProductImagesUncheckedCreateInput>
  }

  /**
   * ProductImages createMany
   */
  export type ProductImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImagesCreateManyInput | ProductImagesCreateManyInput[]
  }

  /**
   * ProductImages createManyAndReturn
   */
  export type ProductImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImagesCreateManyInput | ProductImagesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImages update
   */
  export type ProductImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImages.
     */
    data: XOR<ProductImagesUpdateInput, ProductImagesUncheckedUpdateInput>
    /**
     * Choose, which ProductImages to update.
     */
    where: ProductImagesWhereUniqueInput
  }

  /**
   * ProductImages updateMany
   */
  export type ProductImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImagesUpdateManyMutationInput, ProductImagesUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImagesWhereInput
  }

  /**
   * ProductImages upsert
   */
  export type ProductImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImages to update in case it exists.
     */
    where: ProductImagesWhereUniqueInput
    /**
     * In case the ProductImages found by the `where` argument doesn't exist, create a new ProductImages with this data.
     */
    create: XOR<ProductImagesCreateInput, ProductImagesUncheckedCreateInput>
    /**
     * In case the ProductImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImagesUpdateInput, ProductImagesUncheckedUpdateInput>
  }

  /**
   * ProductImages delete
   */
  export type ProductImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter which ProductImages to delete.
     */
    where: ProductImagesWhereUniqueInput
  }

  /**
   * ProductImages deleteMany
   */
  export type ProductImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImagesWhereInput
  }

  /**
   * ProductImages.products
   */
  export type ProductImages$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
  }

  /**
   * ProductImages without action
   */
  export type ProductImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    totalPrice: number | null
    deliveryFee: number | null
    additionalFee: number | null
    discountFee: number | null
  }

  export type OrdersSumAggregateOutputType = {
    totalPrice: number | null
    deliveryFee: number | null
    additionalFee: number | null
    discountFee: number | null
  }

  export type OrdersMinAggregateOutputType = {
    orderId: string | null
    date: Date | null
    totalPrice: number | null
    deliveryFee: number | null
    paymentMethod: string | null
    deliveryAddress: string | null
    additionalFee: number | null
    discountFee: number | null
    status: string | null
    userId: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    orderId: string | null
    date: Date | null
    totalPrice: number | null
    deliveryFee: number | null
    paymentMethod: string | null
    deliveryAddress: string | null
    additionalFee: number | null
    discountFee: number | null
    status: string | null
    userId: string | null
  }

  export type OrdersCountAggregateOutputType = {
    orderId: number
    date: number
    totalPrice: number
    deliveryFee: number
    paymentMethod: number
    deliveryAddress: number
    additionalFee: number
    discountFee: number
    status: number
    userId: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    totalPrice?: true
    deliveryFee?: true
    additionalFee?: true
    discountFee?: true
  }

  export type OrdersSumAggregateInputType = {
    totalPrice?: true
    deliveryFee?: true
    additionalFee?: true
    discountFee?: true
  }

  export type OrdersMinAggregateInputType = {
    orderId?: true
    date?: true
    totalPrice?: true
    deliveryFee?: true
    paymentMethod?: true
    deliveryAddress?: true
    additionalFee?: true
    discountFee?: true
    status?: true
    userId?: true
  }

  export type OrdersMaxAggregateInputType = {
    orderId?: true
    date?: true
    totalPrice?: true
    deliveryFee?: true
    paymentMethod?: true
    deliveryAddress?: true
    additionalFee?: true
    discountFee?: true
    status?: true
    userId?: true
  }

  export type OrdersCountAggregateInputType = {
    orderId?: true
    date?: true
    totalPrice?: true
    deliveryFee?: true
    paymentMethod?: true
    deliveryAddress?: true
    additionalFee?: true
    discountFee?: true
    status?: true
    userId?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    orderId: string
    date: Date
    totalPrice: number
    deliveryFee: number
    paymentMethod: string | null
    deliveryAddress: string | null
    additionalFee: number | null
    discountFee: number | null
    status: string | null
    userId: string | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    date?: boolean
    totalPrice?: boolean
    deliveryFee?: boolean
    paymentMethod?: boolean
    deliveryAddress?: boolean
    additionalFee?: boolean
    discountFee?: boolean
    status?: boolean
    userId?: boolean
    productsOnOrders?: boolean | Orders$productsOnOrdersArgs<ExtArgs>
    user?: boolean | Orders$userArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    date?: boolean
    totalPrice?: boolean
    deliveryFee?: boolean
    paymentMethod?: boolean
    deliveryAddress?: boolean
    additionalFee?: boolean
    discountFee?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | Orders$userArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    orderId?: boolean
    date?: boolean
    totalPrice?: boolean
    deliveryFee?: boolean
    paymentMethod?: boolean
    deliveryAddress?: boolean
    additionalFee?: boolean
    discountFee?: boolean
    status?: boolean
    userId?: boolean
  }

  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productsOnOrders?: boolean | Orders$productsOnOrdersArgs<ExtArgs>
    user?: boolean | Orders$userArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Orders$userArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      productsOnOrders: Prisma.$ProductsOnOrdersPayload<ExtArgs>[]
      user: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: string
      date: Date
      totalPrice: number
      deliveryFee: number
      paymentMethod: string | null
      deliveryAddress: string | null
      additionalFee: number | null
      discountFee: number | null
      status: string | null
      userId: string | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const ordersWithOrderIdOnly = await prisma.orders.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `orderId`
     * const ordersWithOrderIdOnly = await prisma.orders.createManyAndReturn({ 
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productsOnOrders<T extends Orders$productsOnOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Orders$productsOnOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnOrdersPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends Orders$userArgs<ExtArgs> = {}>(args?: Subset<T, Orders$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */ 
  interface OrdersFieldRefs {
    readonly orderId: FieldRef<"Orders", 'String'>
    readonly date: FieldRef<"Orders", 'DateTime'>
    readonly totalPrice: FieldRef<"Orders", 'Float'>
    readonly deliveryFee: FieldRef<"Orders", 'Float'>
    readonly paymentMethod: FieldRef<"Orders", 'String'>
    readonly deliveryAddress: FieldRef<"Orders", 'String'>
    readonly additionalFee: FieldRef<"Orders", 'Float'>
    readonly discountFee: FieldRef<"Orders", 'Float'>
    readonly status: FieldRef<"Orders", 'String'>
    readonly userId: FieldRef<"Orders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
  }

  /**
   * Orders.productsOnOrders
   */
  export type Orders$productsOnOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnOrders
     */
    select?: ProductsOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnOrdersInclude<ExtArgs> | null
    where?: ProductsOnOrdersWhereInput
    orderBy?: ProductsOnOrdersOrderByWithRelationInput | ProductsOnOrdersOrderByWithRelationInput[]
    cursor?: ProductsOnOrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsOnOrdersScalarFieldEnum | ProductsOnOrdersScalarFieldEnum[]
  }

  /**
   * Orders.user
   */
  export type Orders$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model ProductsOnOrders
   */

  export type AggregateProductsOnOrders = {
    _count: ProductsOnOrdersCountAggregateOutputType | null
    _avg: ProductsOnOrdersAvgAggregateOutputType | null
    _sum: ProductsOnOrdersSumAggregateOutputType | null
    _min: ProductsOnOrdersMinAggregateOutputType | null
    _max: ProductsOnOrdersMaxAggregateOutputType | null
  }

  export type ProductsOnOrdersAvgAggregateOutputType = {
    quantity: number | null
    itemPrice: number | null
  }

  export type ProductsOnOrdersSumAggregateOutputType = {
    quantity: number | null
    itemPrice: number | null
  }

  export type ProductsOnOrdersMinAggregateOutputType = {
    productsOnOrdersId: string | null
    quantity: number | null
    itemPrice: number | null
    variantId: string | null
    variantName: string | null
    orderId: string | null
    productId: string | null
  }

  export type ProductsOnOrdersMaxAggregateOutputType = {
    productsOnOrdersId: string | null
    quantity: number | null
    itemPrice: number | null
    variantId: string | null
    variantName: string | null
    orderId: string | null
    productId: string | null
  }

  export type ProductsOnOrdersCountAggregateOutputType = {
    productsOnOrdersId: number
    quantity: number
    itemPrice: number
    variantId: number
    variantName: number
    orderId: number
    productId: number
    _all: number
  }


  export type ProductsOnOrdersAvgAggregateInputType = {
    quantity?: true
    itemPrice?: true
  }

  export type ProductsOnOrdersSumAggregateInputType = {
    quantity?: true
    itemPrice?: true
  }

  export type ProductsOnOrdersMinAggregateInputType = {
    productsOnOrdersId?: true
    quantity?: true
    itemPrice?: true
    variantId?: true
    variantName?: true
    orderId?: true
    productId?: true
  }

  export type ProductsOnOrdersMaxAggregateInputType = {
    productsOnOrdersId?: true
    quantity?: true
    itemPrice?: true
    variantId?: true
    variantName?: true
    orderId?: true
    productId?: true
  }

  export type ProductsOnOrdersCountAggregateInputType = {
    productsOnOrdersId?: true
    quantity?: true
    itemPrice?: true
    variantId?: true
    variantName?: true
    orderId?: true
    productId?: true
    _all?: true
  }

  export type ProductsOnOrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsOnOrders to aggregate.
     */
    where?: ProductsOnOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnOrders to fetch.
     */
    orderBy?: ProductsOnOrdersOrderByWithRelationInput | ProductsOnOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsOnOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductsOnOrders
    **/
    _count?: true | ProductsOnOrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsOnOrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsOnOrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsOnOrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsOnOrdersMaxAggregateInputType
  }

  export type GetProductsOnOrdersAggregateType<T extends ProductsOnOrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateProductsOnOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductsOnOrders[P]>
      : GetScalarType<T[P], AggregateProductsOnOrders[P]>
  }




  export type ProductsOnOrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsOnOrdersWhereInput
    orderBy?: ProductsOnOrdersOrderByWithAggregationInput | ProductsOnOrdersOrderByWithAggregationInput[]
    by: ProductsOnOrdersScalarFieldEnum[] | ProductsOnOrdersScalarFieldEnum
    having?: ProductsOnOrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsOnOrdersCountAggregateInputType | true
    _avg?: ProductsOnOrdersAvgAggregateInputType
    _sum?: ProductsOnOrdersSumAggregateInputType
    _min?: ProductsOnOrdersMinAggregateInputType
    _max?: ProductsOnOrdersMaxAggregateInputType
  }

  export type ProductsOnOrdersGroupByOutputType = {
    productsOnOrdersId: string
    quantity: number
    itemPrice: number
    variantId: string
    variantName: string
    orderId: string
    productId: string
    _count: ProductsOnOrdersCountAggregateOutputType | null
    _avg: ProductsOnOrdersAvgAggregateOutputType | null
    _sum: ProductsOnOrdersSumAggregateOutputType | null
    _min: ProductsOnOrdersMinAggregateOutputType | null
    _max: ProductsOnOrdersMaxAggregateOutputType | null
  }

  type GetProductsOnOrdersGroupByPayload<T extends ProductsOnOrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsOnOrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsOnOrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsOnOrdersGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsOnOrdersGroupByOutputType[P]>
        }
      >
    >


  export type ProductsOnOrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productsOnOrdersId?: boolean
    quantity?: boolean
    itemPrice?: boolean
    variantId?: boolean
    variantName?: boolean
    orderId?: boolean
    productId?: boolean
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
    products?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsOnOrders"]>

  export type ProductsOnOrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productsOnOrdersId?: boolean
    quantity?: boolean
    itemPrice?: boolean
    variantId?: boolean
    variantName?: boolean
    orderId?: boolean
    productId?: boolean
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
    products?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsOnOrders"]>

  export type ProductsOnOrdersSelectScalar = {
    productsOnOrdersId?: boolean
    quantity?: boolean
    itemPrice?: boolean
    variantId?: boolean
    variantName?: boolean
    orderId?: boolean
    productId?: boolean
  }

  export type ProductsOnOrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
    products?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type ProductsOnOrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
    products?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $ProductsOnOrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductsOnOrders"
    objects: {
      orders: Prisma.$OrdersPayload<ExtArgs>
      products: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productsOnOrdersId: string
      quantity: number
      itemPrice: number
      variantId: string
      variantName: string
      orderId: string
      productId: string
    }, ExtArgs["result"]["productsOnOrders"]>
    composites: {}
  }

  type ProductsOnOrdersGetPayload<S extends boolean | null | undefined | ProductsOnOrdersDefaultArgs> = $Result.GetResult<Prisma.$ProductsOnOrdersPayload, S>

  type ProductsOnOrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductsOnOrdersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductsOnOrdersCountAggregateInputType | true
    }

  export interface ProductsOnOrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductsOnOrders'], meta: { name: 'ProductsOnOrders' } }
    /**
     * Find zero or one ProductsOnOrders that matches the filter.
     * @param {ProductsOnOrdersFindUniqueArgs} args - Arguments to find a ProductsOnOrders
     * @example
     * // Get one ProductsOnOrders
     * const productsOnOrders = await prisma.productsOnOrders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsOnOrdersFindUniqueArgs>(args: SelectSubset<T, ProductsOnOrdersFindUniqueArgs<ExtArgs>>): Prisma__ProductsOnOrdersClient<$Result.GetResult<Prisma.$ProductsOnOrdersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductsOnOrders that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductsOnOrdersFindUniqueOrThrowArgs} args - Arguments to find a ProductsOnOrders
     * @example
     * // Get one ProductsOnOrders
     * const productsOnOrders = await prisma.productsOnOrders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsOnOrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsOnOrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsOnOrdersClient<$Result.GetResult<Prisma.$ProductsOnOrdersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductsOnOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnOrdersFindFirstArgs} args - Arguments to find a ProductsOnOrders
     * @example
     * // Get one ProductsOnOrders
     * const productsOnOrders = await prisma.productsOnOrders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsOnOrdersFindFirstArgs>(args?: SelectSubset<T, ProductsOnOrdersFindFirstArgs<ExtArgs>>): Prisma__ProductsOnOrdersClient<$Result.GetResult<Prisma.$ProductsOnOrdersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductsOnOrders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnOrdersFindFirstOrThrowArgs} args - Arguments to find a ProductsOnOrders
     * @example
     * // Get one ProductsOnOrders
     * const productsOnOrders = await prisma.productsOnOrders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsOnOrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsOnOrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsOnOrdersClient<$Result.GetResult<Prisma.$ProductsOnOrdersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductsOnOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnOrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductsOnOrders
     * const productsOnOrders = await prisma.productsOnOrders.findMany()
     * 
     * // Get first 10 ProductsOnOrders
     * const productsOnOrders = await prisma.productsOnOrders.findMany({ take: 10 })
     * 
     * // Only select the `productsOnOrdersId`
     * const productsOnOrdersWithProductsOnOrdersIdOnly = await prisma.productsOnOrders.findMany({ select: { productsOnOrdersId: true } })
     * 
     */
    findMany<T extends ProductsOnOrdersFindManyArgs>(args?: SelectSubset<T, ProductsOnOrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnOrdersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductsOnOrders.
     * @param {ProductsOnOrdersCreateArgs} args - Arguments to create a ProductsOnOrders.
     * @example
     * // Create one ProductsOnOrders
     * const ProductsOnOrders = await prisma.productsOnOrders.create({
     *   data: {
     *     // ... data to create a ProductsOnOrders
     *   }
     * })
     * 
     */
    create<T extends ProductsOnOrdersCreateArgs>(args: SelectSubset<T, ProductsOnOrdersCreateArgs<ExtArgs>>): Prisma__ProductsOnOrdersClient<$Result.GetResult<Prisma.$ProductsOnOrdersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductsOnOrders.
     * @param {ProductsOnOrdersCreateManyArgs} args - Arguments to create many ProductsOnOrders.
     * @example
     * // Create many ProductsOnOrders
     * const productsOnOrders = await prisma.productsOnOrders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsOnOrdersCreateManyArgs>(args?: SelectSubset<T, ProductsOnOrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductsOnOrders and returns the data saved in the database.
     * @param {ProductsOnOrdersCreateManyAndReturnArgs} args - Arguments to create many ProductsOnOrders.
     * @example
     * // Create many ProductsOnOrders
     * const productsOnOrders = await prisma.productsOnOrders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductsOnOrders and only return the `productsOnOrdersId`
     * const productsOnOrdersWithProductsOnOrdersIdOnly = await prisma.productsOnOrders.createManyAndReturn({ 
     *   select: { productsOnOrdersId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsOnOrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsOnOrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnOrdersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductsOnOrders.
     * @param {ProductsOnOrdersDeleteArgs} args - Arguments to delete one ProductsOnOrders.
     * @example
     * // Delete one ProductsOnOrders
     * const ProductsOnOrders = await prisma.productsOnOrders.delete({
     *   where: {
     *     // ... filter to delete one ProductsOnOrders
     *   }
     * })
     * 
     */
    delete<T extends ProductsOnOrdersDeleteArgs>(args: SelectSubset<T, ProductsOnOrdersDeleteArgs<ExtArgs>>): Prisma__ProductsOnOrdersClient<$Result.GetResult<Prisma.$ProductsOnOrdersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductsOnOrders.
     * @param {ProductsOnOrdersUpdateArgs} args - Arguments to update one ProductsOnOrders.
     * @example
     * // Update one ProductsOnOrders
     * const productsOnOrders = await prisma.productsOnOrders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsOnOrdersUpdateArgs>(args: SelectSubset<T, ProductsOnOrdersUpdateArgs<ExtArgs>>): Prisma__ProductsOnOrdersClient<$Result.GetResult<Prisma.$ProductsOnOrdersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductsOnOrders.
     * @param {ProductsOnOrdersDeleteManyArgs} args - Arguments to filter ProductsOnOrders to delete.
     * @example
     * // Delete a few ProductsOnOrders
     * const { count } = await prisma.productsOnOrders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsOnOrdersDeleteManyArgs>(args?: SelectSubset<T, ProductsOnOrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnOrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductsOnOrders
     * const productsOnOrders = await prisma.productsOnOrders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsOnOrdersUpdateManyArgs>(args: SelectSubset<T, ProductsOnOrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductsOnOrders.
     * @param {ProductsOnOrdersUpsertArgs} args - Arguments to update or create a ProductsOnOrders.
     * @example
     * // Update or create a ProductsOnOrders
     * const productsOnOrders = await prisma.productsOnOrders.upsert({
     *   create: {
     *     // ... data to create a ProductsOnOrders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductsOnOrders we want to update
     *   }
     * })
     */
    upsert<T extends ProductsOnOrdersUpsertArgs>(args: SelectSubset<T, ProductsOnOrdersUpsertArgs<ExtArgs>>): Prisma__ProductsOnOrdersClient<$Result.GetResult<Prisma.$ProductsOnOrdersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductsOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnOrdersCountArgs} args - Arguments to filter ProductsOnOrders to count.
     * @example
     * // Count the number of ProductsOnOrders
     * const count = await prisma.productsOnOrders.count({
     *   where: {
     *     // ... the filter for the ProductsOnOrders we want to count
     *   }
     * })
    **/
    count<T extends ProductsOnOrdersCountArgs>(
      args?: Subset<T, ProductsOnOrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsOnOrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductsOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnOrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsOnOrdersAggregateArgs>(args: Subset<T, ProductsOnOrdersAggregateArgs>): Prisma.PrismaPromise<GetProductsOnOrdersAggregateType<T>>

    /**
     * Group by ProductsOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnOrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsOnOrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsOnOrdersGroupByArgs['orderBy'] }
        : { orderBy?: ProductsOnOrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsOnOrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsOnOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductsOnOrders model
   */
  readonly fields: ProductsOnOrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductsOnOrders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsOnOrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    products<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductsOnOrders model
   */ 
  interface ProductsOnOrdersFieldRefs {
    readonly productsOnOrdersId: FieldRef<"ProductsOnOrders", 'String'>
    readonly quantity: FieldRef<"ProductsOnOrders", 'Float'>
    readonly itemPrice: FieldRef<"ProductsOnOrders", 'Float'>
    readonly variantId: FieldRef<"ProductsOnOrders", 'String'>
    readonly variantName: FieldRef<"ProductsOnOrders", 'String'>
    readonly orderId: FieldRef<"ProductsOnOrders", 'String'>
    readonly productId: FieldRef<"ProductsOnOrders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductsOnOrders findUnique
   */
  export type ProductsOnOrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnOrders
     */
    select?: ProductsOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnOrders to fetch.
     */
    where: ProductsOnOrdersWhereUniqueInput
  }

  /**
   * ProductsOnOrders findUniqueOrThrow
   */
  export type ProductsOnOrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnOrders
     */
    select?: ProductsOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnOrders to fetch.
     */
    where: ProductsOnOrdersWhereUniqueInput
  }

  /**
   * ProductsOnOrders findFirst
   */
  export type ProductsOnOrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnOrders
     */
    select?: ProductsOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnOrders to fetch.
     */
    where?: ProductsOnOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnOrders to fetch.
     */
    orderBy?: ProductsOnOrdersOrderByWithRelationInput | ProductsOnOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsOnOrders.
     */
    cursor?: ProductsOnOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsOnOrders.
     */
    distinct?: ProductsOnOrdersScalarFieldEnum | ProductsOnOrdersScalarFieldEnum[]
  }

  /**
   * ProductsOnOrders findFirstOrThrow
   */
  export type ProductsOnOrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnOrders
     */
    select?: ProductsOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnOrders to fetch.
     */
    where?: ProductsOnOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnOrders to fetch.
     */
    orderBy?: ProductsOnOrdersOrderByWithRelationInput | ProductsOnOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsOnOrders.
     */
    cursor?: ProductsOnOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsOnOrders.
     */
    distinct?: ProductsOnOrdersScalarFieldEnum | ProductsOnOrdersScalarFieldEnum[]
  }

  /**
   * ProductsOnOrders findMany
   */
  export type ProductsOnOrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnOrders
     */
    select?: ProductsOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnOrders to fetch.
     */
    where?: ProductsOnOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnOrders to fetch.
     */
    orderBy?: ProductsOnOrdersOrderByWithRelationInput | ProductsOnOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductsOnOrders.
     */
    cursor?: ProductsOnOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnOrders.
     */
    skip?: number
    distinct?: ProductsOnOrdersScalarFieldEnum | ProductsOnOrdersScalarFieldEnum[]
  }

  /**
   * ProductsOnOrders create
   */
  export type ProductsOnOrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnOrders
     */
    select?: ProductsOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnOrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductsOnOrders.
     */
    data: XOR<ProductsOnOrdersCreateInput, ProductsOnOrdersUncheckedCreateInput>
  }

  /**
   * ProductsOnOrders createMany
   */
  export type ProductsOnOrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductsOnOrders.
     */
    data: ProductsOnOrdersCreateManyInput | ProductsOnOrdersCreateManyInput[]
  }

  /**
   * ProductsOnOrders createManyAndReturn
   */
  export type ProductsOnOrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnOrders
     */
    select?: ProductsOnOrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductsOnOrders.
     */
    data: ProductsOnOrdersCreateManyInput | ProductsOnOrdersCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnOrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductsOnOrders update
   */
  export type ProductsOnOrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnOrders
     */
    select?: ProductsOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnOrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductsOnOrders.
     */
    data: XOR<ProductsOnOrdersUpdateInput, ProductsOnOrdersUncheckedUpdateInput>
    /**
     * Choose, which ProductsOnOrders to update.
     */
    where: ProductsOnOrdersWhereUniqueInput
  }

  /**
   * ProductsOnOrders updateMany
   */
  export type ProductsOnOrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductsOnOrders.
     */
    data: XOR<ProductsOnOrdersUpdateManyMutationInput, ProductsOnOrdersUncheckedUpdateManyInput>
    /**
     * Filter which ProductsOnOrders to update
     */
    where?: ProductsOnOrdersWhereInput
  }

  /**
   * ProductsOnOrders upsert
   */
  export type ProductsOnOrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnOrders
     */
    select?: ProductsOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnOrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductsOnOrders to update in case it exists.
     */
    where: ProductsOnOrdersWhereUniqueInput
    /**
     * In case the ProductsOnOrders found by the `where` argument doesn't exist, create a new ProductsOnOrders with this data.
     */
    create: XOR<ProductsOnOrdersCreateInput, ProductsOnOrdersUncheckedCreateInput>
    /**
     * In case the ProductsOnOrders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsOnOrdersUpdateInput, ProductsOnOrdersUncheckedUpdateInput>
  }

  /**
   * ProductsOnOrders delete
   */
  export type ProductsOnOrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnOrders
     */
    select?: ProductsOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnOrdersInclude<ExtArgs> | null
    /**
     * Filter which ProductsOnOrders to delete.
     */
    where: ProductsOnOrdersWhereUniqueInput
  }

  /**
   * ProductsOnOrders deleteMany
   */
  export type ProductsOnOrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsOnOrders to delete
     */
    where?: ProductsOnOrdersWhereInput
  }

  /**
   * ProductsOnOrders without action
   */
  export type ProductsOnOrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnOrders
     */
    select?: ProductsOnOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnOrdersInclude<ExtArgs> | null
  }


  /**
   * Model ProductMoreDetails
   */

  export type AggregateProductMoreDetails = {
    _count: ProductMoreDetailsCountAggregateOutputType | null
    _min: ProductMoreDetailsMinAggregateOutputType | null
    _max: ProductMoreDetailsMaxAggregateOutputType | null
  }

  export type ProductMoreDetailsMinAggregateOutputType = {
    detailsId: string | null
    productId: string | null
    key: string | null
    value: string | null
  }

  export type ProductMoreDetailsMaxAggregateOutputType = {
    detailsId: string | null
    productId: string | null
    key: string | null
    value: string | null
  }

  export type ProductMoreDetailsCountAggregateOutputType = {
    detailsId: number
    productId: number
    key: number
    value: number
    _all: number
  }


  export type ProductMoreDetailsMinAggregateInputType = {
    detailsId?: true
    productId?: true
    key?: true
    value?: true
  }

  export type ProductMoreDetailsMaxAggregateInputType = {
    detailsId?: true
    productId?: true
    key?: true
    value?: true
  }

  export type ProductMoreDetailsCountAggregateInputType = {
    detailsId?: true
    productId?: true
    key?: true
    value?: true
    _all?: true
  }

  export type ProductMoreDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMoreDetails to aggregate.
     */
    where?: ProductMoreDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMoreDetails to fetch.
     */
    orderBy?: ProductMoreDetailsOrderByWithRelationInput | ProductMoreDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductMoreDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMoreDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMoreDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductMoreDetails
    **/
    _count?: true | ProductMoreDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMoreDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMoreDetailsMaxAggregateInputType
  }

  export type GetProductMoreDetailsAggregateType<T extends ProductMoreDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductMoreDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductMoreDetails[P]>
      : GetScalarType<T[P], AggregateProductMoreDetails[P]>
  }




  export type ProductMoreDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMoreDetailsWhereInput
    orderBy?: ProductMoreDetailsOrderByWithAggregationInput | ProductMoreDetailsOrderByWithAggregationInput[]
    by: ProductMoreDetailsScalarFieldEnum[] | ProductMoreDetailsScalarFieldEnum
    having?: ProductMoreDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductMoreDetailsCountAggregateInputType | true
    _min?: ProductMoreDetailsMinAggregateInputType
    _max?: ProductMoreDetailsMaxAggregateInputType
  }

  export type ProductMoreDetailsGroupByOutputType = {
    detailsId: string
    productId: string
    key: string
    value: string
    _count: ProductMoreDetailsCountAggregateOutputType | null
    _min: ProductMoreDetailsMinAggregateOutputType | null
    _max: ProductMoreDetailsMaxAggregateOutputType | null
  }

  type GetProductMoreDetailsGroupByPayload<T extends ProductMoreDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductMoreDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductMoreDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductMoreDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductMoreDetailsGroupByOutputType[P]>
        }
      >
    >


  export type ProductMoreDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    detailsId?: boolean
    productId?: boolean
    key?: boolean
    value?: boolean
    products?: boolean | ProductMoreDetails$productsArgs<ExtArgs>
  }, ExtArgs["result"]["productMoreDetails"]>

  export type ProductMoreDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    detailsId?: boolean
    productId?: boolean
    key?: boolean
    value?: boolean
    products?: boolean | ProductMoreDetails$productsArgs<ExtArgs>
  }, ExtArgs["result"]["productMoreDetails"]>

  export type ProductMoreDetailsSelectScalar = {
    detailsId?: boolean
    productId?: boolean
    key?: boolean
    value?: boolean
  }

  export type ProductMoreDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductMoreDetails$productsArgs<ExtArgs>
  }
  export type ProductMoreDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductMoreDetails$productsArgs<ExtArgs>
  }

  export type $ProductMoreDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductMoreDetails"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      detailsId: string
      productId: string
      key: string
      value: string
    }, ExtArgs["result"]["productMoreDetails"]>
    composites: {}
  }

  type ProductMoreDetailsGetPayload<S extends boolean | null | undefined | ProductMoreDetailsDefaultArgs> = $Result.GetResult<Prisma.$ProductMoreDetailsPayload, S>

  type ProductMoreDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductMoreDetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductMoreDetailsCountAggregateInputType | true
    }

  export interface ProductMoreDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductMoreDetails'], meta: { name: 'ProductMoreDetails' } }
    /**
     * Find zero or one ProductMoreDetails that matches the filter.
     * @param {ProductMoreDetailsFindUniqueArgs} args - Arguments to find a ProductMoreDetails
     * @example
     * // Get one ProductMoreDetails
     * const productMoreDetails = await prisma.productMoreDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductMoreDetailsFindUniqueArgs>(args: SelectSubset<T, ProductMoreDetailsFindUniqueArgs<ExtArgs>>): Prisma__ProductMoreDetailsClient<$Result.GetResult<Prisma.$ProductMoreDetailsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductMoreDetails that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductMoreDetailsFindUniqueOrThrowArgs} args - Arguments to find a ProductMoreDetails
     * @example
     * // Get one ProductMoreDetails
     * const productMoreDetails = await prisma.productMoreDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductMoreDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductMoreDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductMoreDetailsClient<$Result.GetResult<Prisma.$ProductMoreDetailsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductMoreDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMoreDetailsFindFirstArgs} args - Arguments to find a ProductMoreDetails
     * @example
     * // Get one ProductMoreDetails
     * const productMoreDetails = await prisma.productMoreDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductMoreDetailsFindFirstArgs>(args?: SelectSubset<T, ProductMoreDetailsFindFirstArgs<ExtArgs>>): Prisma__ProductMoreDetailsClient<$Result.GetResult<Prisma.$ProductMoreDetailsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductMoreDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMoreDetailsFindFirstOrThrowArgs} args - Arguments to find a ProductMoreDetails
     * @example
     * // Get one ProductMoreDetails
     * const productMoreDetails = await prisma.productMoreDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductMoreDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductMoreDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductMoreDetailsClient<$Result.GetResult<Prisma.$ProductMoreDetailsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductMoreDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMoreDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductMoreDetails
     * const productMoreDetails = await prisma.productMoreDetails.findMany()
     * 
     * // Get first 10 ProductMoreDetails
     * const productMoreDetails = await prisma.productMoreDetails.findMany({ take: 10 })
     * 
     * // Only select the `detailsId`
     * const productMoreDetailsWithDetailsIdOnly = await prisma.productMoreDetails.findMany({ select: { detailsId: true } })
     * 
     */
    findMany<T extends ProductMoreDetailsFindManyArgs>(args?: SelectSubset<T, ProductMoreDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMoreDetailsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductMoreDetails.
     * @param {ProductMoreDetailsCreateArgs} args - Arguments to create a ProductMoreDetails.
     * @example
     * // Create one ProductMoreDetails
     * const ProductMoreDetails = await prisma.productMoreDetails.create({
     *   data: {
     *     // ... data to create a ProductMoreDetails
     *   }
     * })
     * 
     */
    create<T extends ProductMoreDetailsCreateArgs>(args: SelectSubset<T, ProductMoreDetailsCreateArgs<ExtArgs>>): Prisma__ProductMoreDetailsClient<$Result.GetResult<Prisma.$ProductMoreDetailsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductMoreDetails.
     * @param {ProductMoreDetailsCreateManyArgs} args - Arguments to create many ProductMoreDetails.
     * @example
     * // Create many ProductMoreDetails
     * const productMoreDetails = await prisma.productMoreDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductMoreDetailsCreateManyArgs>(args?: SelectSubset<T, ProductMoreDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductMoreDetails and returns the data saved in the database.
     * @param {ProductMoreDetailsCreateManyAndReturnArgs} args - Arguments to create many ProductMoreDetails.
     * @example
     * // Create many ProductMoreDetails
     * const productMoreDetails = await prisma.productMoreDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductMoreDetails and only return the `detailsId`
     * const productMoreDetailsWithDetailsIdOnly = await prisma.productMoreDetails.createManyAndReturn({ 
     *   select: { detailsId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductMoreDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductMoreDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMoreDetailsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductMoreDetails.
     * @param {ProductMoreDetailsDeleteArgs} args - Arguments to delete one ProductMoreDetails.
     * @example
     * // Delete one ProductMoreDetails
     * const ProductMoreDetails = await prisma.productMoreDetails.delete({
     *   where: {
     *     // ... filter to delete one ProductMoreDetails
     *   }
     * })
     * 
     */
    delete<T extends ProductMoreDetailsDeleteArgs>(args: SelectSubset<T, ProductMoreDetailsDeleteArgs<ExtArgs>>): Prisma__ProductMoreDetailsClient<$Result.GetResult<Prisma.$ProductMoreDetailsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductMoreDetails.
     * @param {ProductMoreDetailsUpdateArgs} args - Arguments to update one ProductMoreDetails.
     * @example
     * // Update one ProductMoreDetails
     * const productMoreDetails = await prisma.productMoreDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductMoreDetailsUpdateArgs>(args: SelectSubset<T, ProductMoreDetailsUpdateArgs<ExtArgs>>): Prisma__ProductMoreDetailsClient<$Result.GetResult<Prisma.$ProductMoreDetailsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductMoreDetails.
     * @param {ProductMoreDetailsDeleteManyArgs} args - Arguments to filter ProductMoreDetails to delete.
     * @example
     * // Delete a few ProductMoreDetails
     * const { count } = await prisma.productMoreDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductMoreDetailsDeleteManyArgs>(args?: SelectSubset<T, ProductMoreDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMoreDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMoreDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductMoreDetails
     * const productMoreDetails = await prisma.productMoreDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductMoreDetailsUpdateManyArgs>(args: SelectSubset<T, ProductMoreDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductMoreDetails.
     * @param {ProductMoreDetailsUpsertArgs} args - Arguments to update or create a ProductMoreDetails.
     * @example
     * // Update or create a ProductMoreDetails
     * const productMoreDetails = await prisma.productMoreDetails.upsert({
     *   create: {
     *     // ... data to create a ProductMoreDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductMoreDetails we want to update
     *   }
     * })
     */
    upsert<T extends ProductMoreDetailsUpsertArgs>(args: SelectSubset<T, ProductMoreDetailsUpsertArgs<ExtArgs>>): Prisma__ProductMoreDetailsClient<$Result.GetResult<Prisma.$ProductMoreDetailsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductMoreDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMoreDetailsCountArgs} args - Arguments to filter ProductMoreDetails to count.
     * @example
     * // Count the number of ProductMoreDetails
     * const count = await prisma.productMoreDetails.count({
     *   where: {
     *     // ... the filter for the ProductMoreDetails we want to count
     *   }
     * })
    **/
    count<T extends ProductMoreDetailsCountArgs>(
      args?: Subset<T, ProductMoreDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductMoreDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductMoreDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMoreDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductMoreDetailsAggregateArgs>(args: Subset<T, ProductMoreDetailsAggregateArgs>): Prisma.PrismaPromise<GetProductMoreDetailsAggregateType<T>>

    /**
     * Group by ProductMoreDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMoreDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductMoreDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductMoreDetailsGroupByArgs['orderBy'] }
        : { orderBy?: ProductMoreDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductMoreDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductMoreDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductMoreDetails model
   */
  readonly fields: ProductMoreDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductMoreDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductMoreDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductMoreDetails$productsArgs<ExtArgs> = {}>(args?: Subset<T, ProductMoreDetails$productsArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductMoreDetails model
   */ 
  interface ProductMoreDetailsFieldRefs {
    readonly detailsId: FieldRef<"ProductMoreDetails", 'String'>
    readonly productId: FieldRef<"ProductMoreDetails", 'String'>
    readonly key: FieldRef<"ProductMoreDetails", 'String'>
    readonly value: FieldRef<"ProductMoreDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductMoreDetails findUnique
   */
  export type ProductMoreDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMoreDetails
     */
    select?: ProductMoreDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMoreDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ProductMoreDetails to fetch.
     */
    where: ProductMoreDetailsWhereUniqueInput
  }

  /**
   * ProductMoreDetails findUniqueOrThrow
   */
  export type ProductMoreDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMoreDetails
     */
    select?: ProductMoreDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMoreDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ProductMoreDetails to fetch.
     */
    where: ProductMoreDetailsWhereUniqueInput
  }

  /**
   * ProductMoreDetails findFirst
   */
  export type ProductMoreDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMoreDetails
     */
    select?: ProductMoreDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMoreDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ProductMoreDetails to fetch.
     */
    where?: ProductMoreDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMoreDetails to fetch.
     */
    orderBy?: ProductMoreDetailsOrderByWithRelationInput | ProductMoreDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMoreDetails.
     */
    cursor?: ProductMoreDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMoreDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMoreDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMoreDetails.
     */
    distinct?: ProductMoreDetailsScalarFieldEnum | ProductMoreDetailsScalarFieldEnum[]
  }

  /**
   * ProductMoreDetails findFirstOrThrow
   */
  export type ProductMoreDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMoreDetails
     */
    select?: ProductMoreDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMoreDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ProductMoreDetails to fetch.
     */
    where?: ProductMoreDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMoreDetails to fetch.
     */
    orderBy?: ProductMoreDetailsOrderByWithRelationInput | ProductMoreDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMoreDetails.
     */
    cursor?: ProductMoreDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMoreDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMoreDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMoreDetails.
     */
    distinct?: ProductMoreDetailsScalarFieldEnum | ProductMoreDetailsScalarFieldEnum[]
  }

  /**
   * ProductMoreDetails findMany
   */
  export type ProductMoreDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMoreDetails
     */
    select?: ProductMoreDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMoreDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ProductMoreDetails to fetch.
     */
    where?: ProductMoreDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMoreDetails to fetch.
     */
    orderBy?: ProductMoreDetailsOrderByWithRelationInput | ProductMoreDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductMoreDetails.
     */
    cursor?: ProductMoreDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMoreDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMoreDetails.
     */
    skip?: number
    distinct?: ProductMoreDetailsScalarFieldEnum | ProductMoreDetailsScalarFieldEnum[]
  }

  /**
   * ProductMoreDetails create
   */
  export type ProductMoreDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMoreDetails
     */
    select?: ProductMoreDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMoreDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductMoreDetails.
     */
    data: XOR<ProductMoreDetailsCreateInput, ProductMoreDetailsUncheckedCreateInput>
  }

  /**
   * ProductMoreDetails createMany
   */
  export type ProductMoreDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductMoreDetails.
     */
    data: ProductMoreDetailsCreateManyInput | ProductMoreDetailsCreateManyInput[]
  }

  /**
   * ProductMoreDetails createManyAndReturn
   */
  export type ProductMoreDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMoreDetails
     */
    select?: ProductMoreDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductMoreDetails.
     */
    data: ProductMoreDetailsCreateManyInput | ProductMoreDetailsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMoreDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductMoreDetails update
   */
  export type ProductMoreDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMoreDetails
     */
    select?: ProductMoreDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMoreDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductMoreDetails.
     */
    data: XOR<ProductMoreDetailsUpdateInput, ProductMoreDetailsUncheckedUpdateInput>
    /**
     * Choose, which ProductMoreDetails to update.
     */
    where: ProductMoreDetailsWhereUniqueInput
  }

  /**
   * ProductMoreDetails updateMany
   */
  export type ProductMoreDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductMoreDetails.
     */
    data: XOR<ProductMoreDetailsUpdateManyMutationInput, ProductMoreDetailsUncheckedUpdateManyInput>
    /**
     * Filter which ProductMoreDetails to update
     */
    where?: ProductMoreDetailsWhereInput
  }

  /**
   * ProductMoreDetails upsert
   */
  export type ProductMoreDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMoreDetails
     */
    select?: ProductMoreDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMoreDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductMoreDetails to update in case it exists.
     */
    where: ProductMoreDetailsWhereUniqueInput
    /**
     * In case the ProductMoreDetails found by the `where` argument doesn't exist, create a new ProductMoreDetails with this data.
     */
    create: XOR<ProductMoreDetailsCreateInput, ProductMoreDetailsUncheckedCreateInput>
    /**
     * In case the ProductMoreDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductMoreDetailsUpdateInput, ProductMoreDetailsUncheckedUpdateInput>
  }

  /**
   * ProductMoreDetails delete
   */
  export type ProductMoreDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMoreDetails
     */
    select?: ProductMoreDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMoreDetailsInclude<ExtArgs> | null
    /**
     * Filter which ProductMoreDetails to delete.
     */
    where: ProductMoreDetailsWhereUniqueInput
  }

  /**
   * ProductMoreDetails deleteMany
   */
  export type ProductMoreDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMoreDetails to delete
     */
    where?: ProductMoreDetailsWhereInput
  }

  /**
   * ProductMoreDetails.products
   */
  export type ProductMoreDetails$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
  }

  /**
   * ProductMoreDetails without action
   */
  export type ProductMoreDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMoreDetails
     */
    select?: ProductMoreDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMoreDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    commentId: string | null
    body: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    productId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    commentId: string | null
    body: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    productId: string | null
  }

  export type CommentCountAggregateOutputType = {
    commentId: number
    body: number
    createdAt: number
    updatedAt: number
    userId: number
    productId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    commentId?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    productId?: true
  }

  export type CommentMaxAggregateInputType = {
    commentId?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    productId?: true
  }

  export type CommentCountAggregateInputType = {
    commentId?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    productId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    commentId: string
    body: string
    createdAt: Date
    updatedAt: Date
    userId: string
    productId: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commentId?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    productId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    products?: boolean | ProductsDefaultArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commentId?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    productId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    products?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    commentId?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    productId?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    products?: boolean | ProductsDefaultArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    products?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      products: Prisma.$ProductsPayload<ExtArgs>
      replies: Prisma.$ReplyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      commentId: string
      body: string
      createdAt: Date
      updatedAt: Date
      userId: string
      productId: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `commentId`
     * const commentWithCommentIdOnly = await prisma.comment.findMany({ select: { commentId: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `commentId`
     * const commentWithCommentIdOnly = await prisma.comment.createManyAndReturn({ 
     *   select: { commentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    products<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly commentId: FieldRef<"Comment", 'String'>
    readonly body: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly productId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Reply
   */

  export type AggregateReply = {
    _count: ReplyCountAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  export type ReplyMinAggregateOutputType = {
    replyId: string | null
    body: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    image: string | null
    commentId: string | null
  }

  export type ReplyMaxAggregateOutputType = {
    replyId: string | null
    body: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    image: string | null
    commentId: string | null
  }

  export type ReplyCountAggregateOutputType = {
    replyId: number
    body: number
    createdAt: number
    updatedAt: number
    name: number
    image: number
    commentId: number
    _all: number
  }


  export type ReplyMinAggregateInputType = {
    replyId?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    image?: true
    commentId?: true
  }

  export type ReplyMaxAggregateInputType = {
    replyId?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    image?: true
    commentId?: true
  }

  export type ReplyCountAggregateInputType = {
    replyId?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    image?: true
    commentId?: true
    _all?: true
  }

  export type ReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reply to aggregate.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Replies
    **/
    _count?: true | ReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReplyMaxAggregateInputType
  }

  export type GetReplyAggregateType<T extends ReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReply[P]>
      : GetScalarType<T[P], AggregateReply[P]>
  }




  export type ReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithAggregationInput | ReplyOrderByWithAggregationInput[]
    by: ReplyScalarFieldEnum[] | ReplyScalarFieldEnum
    having?: ReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReplyCountAggregateInputType | true
    _min?: ReplyMinAggregateInputType
    _max?: ReplyMaxAggregateInputType
  }

  export type ReplyGroupByOutputType = {
    replyId: string
    body: string
    createdAt: Date
    updatedAt: Date
    name: string
    image: string | null
    commentId: string | null
    _count: ReplyCountAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  type GetReplyGroupByPayload<T extends ReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReplyGroupByOutputType[P]>
            : GetScalarType<T[P], ReplyGroupByOutputType[P]>
        }
      >
    >


  export type ReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    replyId?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    image?: boolean
    commentId?: boolean
    comments?: boolean | Reply$commentsArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    replyId?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    image?: boolean
    commentId?: boolean
    comments?: boolean | Reply$commentsArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectScalar = {
    replyId?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    image?: boolean
    commentId?: boolean
  }

  export type ReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Reply$commentsArgs<ExtArgs>
  }
  export type ReplyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Reply$commentsArgs<ExtArgs>
  }

  export type $ReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reply"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      replyId: string
      body: string
      createdAt: Date
      updatedAt: Date
      name: string
      image: string | null
      commentId: string | null
    }, ExtArgs["result"]["reply"]>
    composites: {}
  }

  type ReplyGetPayload<S extends boolean | null | undefined | ReplyDefaultArgs> = $Result.GetResult<Prisma.$ReplyPayload, S>

  type ReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReplyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReplyCountAggregateInputType | true
    }

  export interface ReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reply'], meta: { name: 'Reply' } }
    /**
     * Find zero or one Reply that matches the filter.
     * @param {ReplyFindUniqueArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReplyFindUniqueArgs>(args: SelectSubset<T, ReplyFindUniqueArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reply that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReplyFindUniqueOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, ReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReplyFindFirstArgs>(args?: SelectSubset<T, ReplyFindFirstArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, ReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Replies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Replies
     * const replies = await prisma.reply.findMany()
     * 
     * // Get first 10 Replies
     * const replies = await prisma.reply.findMany({ take: 10 })
     * 
     * // Only select the `replyId`
     * const replyWithReplyIdOnly = await prisma.reply.findMany({ select: { replyId: true } })
     * 
     */
    findMany<T extends ReplyFindManyArgs>(args?: SelectSubset<T, ReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reply.
     * @param {ReplyCreateArgs} args - Arguments to create a Reply.
     * @example
     * // Create one Reply
     * const Reply = await prisma.reply.create({
     *   data: {
     *     // ... data to create a Reply
     *   }
     * })
     * 
     */
    create<T extends ReplyCreateArgs>(args: SelectSubset<T, ReplyCreateArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Replies.
     * @param {ReplyCreateManyArgs} args - Arguments to create many Replies.
     * @example
     * // Create many Replies
     * const reply = await prisma.reply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReplyCreateManyArgs>(args?: SelectSubset<T, ReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Replies and returns the data saved in the database.
     * @param {ReplyCreateManyAndReturnArgs} args - Arguments to create many Replies.
     * @example
     * // Create many Replies
     * const reply = await prisma.reply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Replies and only return the `replyId`
     * const replyWithReplyIdOnly = await prisma.reply.createManyAndReturn({ 
     *   select: { replyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReplyCreateManyAndReturnArgs>(args?: SelectSubset<T, ReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reply.
     * @param {ReplyDeleteArgs} args - Arguments to delete one Reply.
     * @example
     * // Delete one Reply
     * const Reply = await prisma.reply.delete({
     *   where: {
     *     // ... filter to delete one Reply
     *   }
     * })
     * 
     */
    delete<T extends ReplyDeleteArgs>(args: SelectSubset<T, ReplyDeleteArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reply.
     * @param {ReplyUpdateArgs} args - Arguments to update one Reply.
     * @example
     * // Update one Reply
     * const reply = await prisma.reply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReplyUpdateArgs>(args: SelectSubset<T, ReplyUpdateArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Replies.
     * @param {ReplyDeleteManyArgs} args - Arguments to filter Replies to delete.
     * @example
     * // Delete a few Replies
     * const { count } = await prisma.reply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReplyDeleteManyArgs>(args?: SelectSubset<T, ReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Replies
     * const reply = await prisma.reply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReplyUpdateManyArgs>(args: SelectSubset<T, ReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reply.
     * @param {ReplyUpsertArgs} args - Arguments to update or create a Reply.
     * @example
     * // Update or create a Reply
     * const reply = await prisma.reply.upsert({
     *   create: {
     *     // ... data to create a Reply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reply we want to update
     *   }
     * })
     */
    upsert<T extends ReplyUpsertArgs>(args: SelectSubset<T, ReplyUpsertArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyCountArgs} args - Arguments to filter Replies to count.
     * @example
     * // Count the number of Replies
     * const count = await prisma.reply.count({
     *   where: {
     *     // ... the filter for the Replies we want to count
     *   }
     * })
    **/
    count<T extends ReplyCountArgs>(
      args?: Subset<T, ReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReplyAggregateArgs>(args: Subset<T, ReplyAggregateArgs>): Prisma.PrismaPromise<GetReplyAggregateType<T>>

    /**
     * Group by Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReplyGroupByArgs['orderBy'] }
        : { orderBy?: ReplyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reply model
   */
  readonly fields: ReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends Reply$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Reply$commentsArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reply model
   */ 
  interface ReplyFieldRefs {
    readonly replyId: FieldRef<"Reply", 'String'>
    readonly body: FieldRef<"Reply", 'String'>
    readonly createdAt: FieldRef<"Reply", 'DateTime'>
    readonly updatedAt: FieldRef<"Reply", 'DateTime'>
    readonly name: FieldRef<"Reply", 'String'>
    readonly image: FieldRef<"Reply", 'String'>
    readonly commentId: FieldRef<"Reply", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reply findUnique
   */
  export type ReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply findUniqueOrThrow
   */
  export type ReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply findFirst
   */
  export type ReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply findFirstOrThrow
   */
  export type ReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply findMany
   */
  export type ReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Replies to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply create
   */
  export type ReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a Reply.
     */
    data: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
  }

  /**
   * Reply createMany
   */
  export type ReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Replies.
     */
    data: ReplyCreateManyInput | ReplyCreateManyInput[]
  }

  /**
   * Reply createManyAndReturn
   */
  export type ReplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Replies.
     */
    data: ReplyCreateManyInput | ReplyCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reply update
   */
  export type ReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a Reply.
     */
    data: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
    /**
     * Choose, which Reply to update.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply updateMany
   */
  export type ReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Replies.
     */
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyInput>
    /**
     * Filter which Replies to update
     */
    where?: ReplyWhereInput
  }

  /**
   * Reply upsert
   */
  export type ReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the Reply to update in case it exists.
     */
    where: ReplyWhereUniqueInput
    /**
     * In case the Reply found by the `where` argument doesn't exist, create a new Reply with this data.
     */
    create: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
    /**
     * In case the Reply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
  }

  /**
   * Reply delete
   */
  export type ReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter which Reply to delete.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply deleteMany
   */
  export type ReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Replies to delete
     */
    where?: ReplyWhereInput
  }

  /**
   * Reply.comments
   */
  export type Reply$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Reply without action
   */
  export type ReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
  }


  /**
   * Model OrderTransaction
   */

  export type AggregateOrderTransaction = {
    _count: OrderTransactionCountAggregateOutputType | null
    _min: OrderTransactionMinAggregateOutputType | null
    _max: OrderTransactionMaxAggregateOutputType | null
  }

  export type OrderTransactionMinAggregateOutputType = {
    transactionId: string | null
    data: string | null
    paymentConfirmData: string | null
    paymentMethod: string | null
    date: Date | null
    paid: boolean | null
  }

  export type OrderTransactionMaxAggregateOutputType = {
    transactionId: string | null
    data: string | null
    paymentConfirmData: string | null
    paymentMethod: string | null
    date: Date | null
    paid: boolean | null
  }

  export type OrderTransactionCountAggregateOutputType = {
    transactionId: number
    data: number
    paymentConfirmData: number
    paymentMethod: number
    date: number
    paid: number
    _all: number
  }


  export type OrderTransactionMinAggregateInputType = {
    transactionId?: true
    data?: true
    paymentConfirmData?: true
    paymentMethod?: true
    date?: true
    paid?: true
  }

  export type OrderTransactionMaxAggregateInputType = {
    transactionId?: true
    data?: true
    paymentConfirmData?: true
    paymentMethod?: true
    date?: true
    paid?: true
  }

  export type OrderTransactionCountAggregateInputType = {
    transactionId?: true
    data?: true
    paymentConfirmData?: true
    paymentMethod?: true
    date?: true
    paid?: true
    _all?: true
  }

  export type OrderTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderTransaction to aggregate.
     */
    where?: OrderTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderTransactions to fetch.
     */
    orderBy?: OrderTransactionOrderByWithRelationInput | OrderTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderTransactions
    **/
    _count?: true | OrderTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderTransactionMaxAggregateInputType
  }

  export type GetOrderTransactionAggregateType<T extends OrderTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderTransaction[P]>
      : GetScalarType<T[P], AggregateOrderTransaction[P]>
  }




  export type OrderTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderTransactionWhereInput
    orderBy?: OrderTransactionOrderByWithAggregationInput | OrderTransactionOrderByWithAggregationInput[]
    by: OrderTransactionScalarFieldEnum[] | OrderTransactionScalarFieldEnum
    having?: OrderTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderTransactionCountAggregateInputType | true
    _min?: OrderTransactionMinAggregateInputType
    _max?: OrderTransactionMaxAggregateInputType
  }

  export type OrderTransactionGroupByOutputType = {
    transactionId: string
    data: string
    paymentConfirmData: string | null
    paymentMethod: string
    date: Date
    paid: boolean
    _count: OrderTransactionCountAggregateOutputType | null
    _min: OrderTransactionMinAggregateOutputType | null
    _max: OrderTransactionMaxAggregateOutputType | null
  }

  type GetOrderTransactionGroupByPayload<T extends OrderTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], OrderTransactionGroupByOutputType[P]>
        }
      >
    >


  export type OrderTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transactionId?: boolean
    data?: boolean
    paymentConfirmData?: boolean
    paymentMethod?: boolean
    date?: boolean
    paid?: boolean
  }, ExtArgs["result"]["orderTransaction"]>

  export type OrderTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transactionId?: boolean
    data?: boolean
    paymentConfirmData?: boolean
    paymentMethod?: boolean
    date?: boolean
    paid?: boolean
  }, ExtArgs["result"]["orderTransaction"]>

  export type OrderTransactionSelectScalar = {
    transactionId?: boolean
    data?: boolean
    paymentConfirmData?: boolean
    paymentMethod?: boolean
    date?: boolean
    paid?: boolean
  }


  export type $OrderTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderTransaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      transactionId: string
      data: string
      paymentConfirmData: string | null
      paymentMethod: string
      date: Date
      paid: boolean
    }, ExtArgs["result"]["orderTransaction"]>
    composites: {}
  }

  type OrderTransactionGetPayload<S extends boolean | null | undefined | OrderTransactionDefaultArgs> = $Result.GetResult<Prisma.$OrderTransactionPayload, S>

  type OrderTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderTransactionCountAggregateInputType | true
    }

  export interface OrderTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderTransaction'], meta: { name: 'OrderTransaction' } }
    /**
     * Find zero or one OrderTransaction that matches the filter.
     * @param {OrderTransactionFindUniqueArgs} args - Arguments to find a OrderTransaction
     * @example
     * // Get one OrderTransaction
     * const orderTransaction = await prisma.orderTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderTransactionFindUniqueArgs>(args: SelectSubset<T, OrderTransactionFindUniqueArgs<ExtArgs>>): Prisma__OrderTransactionClient<$Result.GetResult<Prisma.$OrderTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderTransactionFindUniqueOrThrowArgs} args - Arguments to find a OrderTransaction
     * @example
     * // Get one OrderTransaction
     * const orderTransaction = await prisma.orderTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderTransactionClient<$Result.GetResult<Prisma.$OrderTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTransactionFindFirstArgs} args - Arguments to find a OrderTransaction
     * @example
     * // Get one OrderTransaction
     * const orderTransaction = await prisma.orderTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderTransactionFindFirstArgs>(args?: SelectSubset<T, OrderTransactionFindFirstArgs<ExtArgs>>): Prisma__OrderTransactionClient<$Result.GetResult<Prisma.$OrderTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTransactionFindFirstOrThrowArgs} args - Arguments to find a OrderTransaction
     * @example
     * // Get one OrderTransaction
     * const orderTransaction = await prisma.orderTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderTransactionClient<$Result.GetResult<Prisma.$OrderTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderTransactions
     * const orderTransactions = await prisma.orderTransaction.findMany()
     * 
     * // Get first 10 OrderTransactions
     * const orderTransactions = await prisma.orderTransaction.findMany({ take: 10 })
     * 
     * // Only select the `transactionId`
     * const orderTransactionWithTransactionIdOnly = await prisma.orderTransaction.findMany({ select: { transactionId: true } })
     * 
     */
    findMany<T extends OrderTransactionFindManyArgs>(args?: SelectSubset<T, OrderTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderTransaction.
     * @param {OrderTransactionCreateArgs} args - Arguments to create a OrderTransaction.
     * @example
     * // Create one OrderTransaction
     * const OrderTransaction = await prisma.orderTransaction.create({
     *   data: {
     *     // ... data to create a OrderTransaction
     *   }
     * })
     * 
     */
    create<T extends OrderTransactionCreateArgs>(args: SelectSubset<T, OrderTransactionCreateArgs<ExtArgs>>): Prisma__OrderTransactionClient<$Result.GetResult<Prisma.$OrderTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderTransactions.
     * @param {OrderTransactionCreateManyArgs} args - Arguments to create many OrderTransactions.
     * @example
     * // Create many OrderTransactions
     * const orderTransaction = await prisma.orderTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderTransactionCreateManyArgs>(args?: SelectSubset<T, OrderTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderTransactions and returns the data saved in the database.
     * @param {OrderTransactionCreateManyAndReturnArgs} args - Arguments to create many OrderTransactions.
     * @example
     * // Create many OrderTransactions
     * const orderTransaction = await prisma.orderTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderTransactions and only return the `transactionId`
     * const orderTransactionWithTransactionIdOnly = await prisma.orderTransaction.createManyAndReturn({ 
     *   select: { transactionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderTransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderTransaction.
     * @param {OrderTransactionDeleteArgs} args - Arguments to delete one OrderTransaction.
     * @example
     * // Delete one OrderTransaction
     * const OrderTransaction = await prisma.orderTransaction.delete({
     *   where: {
     *     // ... filter to delete one OrderTransaction
     *   }
     * })
     * 
     */
    delete<T extends OrderTransactionDeleteArgs>(args: SelectSubset<T, OrderTransactionDeleteArgs<ExtArgs>>): Prisma__OrderTransactionClient<$Result.GetResult<Prisma.$OrderTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderTransaction.
     * @param {OrderTransactionUpdateArgs} args - Arguments to update one OrderTransaction.
     * @example
     * // Update one OrderTransaction
     * const orderTransaction = await prisma.orderTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderTransactionUpdateArgs>(args: SelectSubset<T, OrderTransactionUpdateArgs<ExtArgs>>): Prisma__OrderTransactionClient<$Result.GetResult<Prisma.$OrderTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderTransactions.
     * @param {OrderTransactionDeleteManyArgs} args - Arguments to filter OrderTransactions to delete.
     * @example
     * // Delete a few OrderTransactions
     * const { count } = await prisma.orderTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderTransactionDeleteManyArgs>(args?: SelectSubset<T, OrderTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderTransactions
     * const orderTransaction = await prisma.orderTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderTransactionUpdateManyArgs>(args: SelectSubset<T, OrderTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderTransaction.
     * @param {OrderTransactionUpsertArgs} args - Arguments to update or create a OrderTransaction.
     * @example
     * // Update or create a OrderTransaction
     * const orderTransaction = await prisma.orderTransaction.upsert({
     *   create: {
     *     // ... data to create a OrderTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderTransaction we want to update
     *   }
     * })
     */
    upsert<T extends OrderTransactionUpsertArgs>(args: SelectSubset<T, OrderTransactionUpsertArgs<ExtArgs>>): Prisma__OrderTransactionClient<$Result.GetResult<Prisma.$OrderTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTransactionCountArgs} args - Arguments to filter OrderTransactions to count.
     * @example
     * // Count the number of OrderTransactions
     * const count = await prisma.orderTransaction.count({
     *   where: {
     *     // ... the filter for the OrderTransactions we want to count
     *   }
     * })
    **/
    count<T extends OrderTransactionCountArgs>(
      args?: Subset<T, OrderTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderTransactionAggregateArgs>(args: Subset<T, OrderTransactionAggregateArgs>): Prisma.PrismaPromise<GetOrderTransactionAggregateType<T>>

    /**
     * Group by OrderTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderTransactionGroupByArgs['orderBy'] }
        : { orderBy?: OrderTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderTransaction model
   */
  readonly fields: OrderTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderTransaction model
   */ 
  interface OrderTransactionFieldRefs {
    readonly transactionId: FieldRef<"OrderTransaction", 'String'>
    readonly data: FieldRef<"OrderTransaction", 'String'>
    readonly paymentConfirmData: FieldRef<"OrderTransaction", 'String'>
    readonly paymentMethod: FieldRef<"OrderTransaction", 'String'>
    readonly date: FieldRef<"OrderTransaction", 'DateTime'>
    readonly paid: FieldRef<"OrderTransaction", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * OrderTransaction findUnique
   */
  export type OrderTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTransaction
     */
    select?: OrderTransactionSelect<ExtArgs> | null
    /**
     * Filter, which OrderTransaction to fetch.
     */
    where: OrderTransactionWhereUniqueInput
  }

  /**
   * OrderTransaction findUniqueOrThrow
   */
  export type OrderTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTransaction
     */
    select?: OrderTransactionSelect<ExtArgs> | null
    /**
     * Filter, which OrderTransaction to fetch.
     */
    where: OrderTransactionWhereUniqueInput
  }

  /**
   * OrderTransaction findFirst
   */
  export type OrderTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTransaction
     */
    select?: OrderTransactionSelect<ExtArgs> | null
    /**
     * Filter, which OrderTransaction to fetch.
     */
    where?: OrderTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderTransactions to fetch.
     */
    orderBy?: OrderTransactionOrderByWithRelationInput | OrderTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderTransactions.
     */
    cursor?: OrderTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderTransactions.
     */
    distinct?: OrderTransactionScalarFieldEnum | OrderTransactionScalarFieldEnum[]
  }

  /**
   * OrderTransaction findFirstOrThrow
   */
  export type OrderTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTransaction
     */
    select?: OrderTransactionSelect<ExtArgs> | null
    /**
     * Filter, which OrderTransaction to fetch.
     */
    where?: OrderTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderTransactions to fetch.
     */
    orderBy?: OrderTransactionOrderByWithRelationInput | OrderTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderTransactions.
     */
    cursor?: OrderTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderTransactions.
     */
    distinct?: OrderTransactionScalarFieldEnum | OrderTransactionScalarFieldEnum[]
  }

  /**
   * OrderTransaction findMany
   */
  export type OrderTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTransaction
     */
    select?: OrderTransactionSelect<ExtArgs> | null
    /**
     * Filter, which OrderTransactions to fetch.
     */
    where?: OrderTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderTransactions to fetch.
     */
    orderBy?: OrderTransactionOrderByWithRelationInput | OrderTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderTransactions.
     */
    cursor?: OrderTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderTransactions.
     */
    skip?: number
    distinct?: OrderTransactionScalarFieldEnum | OrderTransactionScalarFieldEnum[]
  }

  /**
   * OrderTransaction create
   */
  export type OrderTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTransaction
     */
    select?: OrderTransactionSelect<ExtArgs> | null
    /**
     * The data needed to create a OrderTransaction.
     */
    data: XOR<OrderTransactionCreateInput, OrderTransactionUncheckedCreateInput>
  }

  /**
   * OrderTransaction createMany
   */
  export type OrderTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderTransactions.
     */
    data: OrderTransactionCreateManyInput | OrderTransactionCreateManyInput[]
  }

  /**
   * OrderTransaction createManyAndReturn
   */
  export type OrderTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTransaction
     */
    select?: OrderTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderTransactions.
     */
    data: OrderTransactionCreateManyInput | OrderTransactionCreateManyInput[]
  }

  /**
   * OrderTransaction update
   */
  export type OrderTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTransaction
     */
    select?: OrderTransactionSelect<ExtArgs> | null
    /**
     * The data needed to update a OrderTransaction.
     */
    data: XOR<OrderTransactionUpdateInput, OrderTransactionUncheckedUpdateInput>
    /**
     * Choose, which OrderTransaction to update.
     */
    where: OrderTransactionWhereUniqueInput
  }

  /**
   * OrderTransaction updateMany
   */
  export type OrderTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderTransactions.
     */
    data: XOR<OrderTransactionUpdateManyMutationInput, OrderTransactionUncheckedUpdateManyInput>
    /**
     * Filter which OrderTransactions to update
     */
    where?: OrderTransactionWhereInput
  }

  /**
   * OrderTransaction upsert
   */
  export type OrderTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTransaction
     */
    select?: OrderTransactionSelect<ExtArgs> | null
    /**
     * The filter to search for the OrderTransaction to update in case it exists.
     */
    where: OrderTransactionWhereUniqueInput
    /**
     * In case the OrderTransaction found by the `where` argument doesn't exist, create a new OrderTransaction with this data.
     */
    create: XOR<OrderTransactionCreateInput, OrderTransactionUncheckedCreateInput>
    /**
     * In case the OrderTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderTransactionUpdateInput, OrderTransactionUncheckedUpdateInput>
  }

  /**
   * OrderTransaction delete
   */
  export type OrderTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTransaction
     */
    select?: OrderTransactionSelect<ExtArgs> | null
    /**
     * Filter which OrderTransaction to delete.
     */
    where: OrderTransactionWhereUniqueInput
  }

  /**
   * OrderTransaction deleteMany
   */
  export type OrderTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderTransactions to delete
     */
    where?: OrderTransactionWhereInput
  }

  /**
   * OrderTransaction without action
   */
  export type OrderTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTransaction
     */
    select?: OrderTransactionSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    adminId: 'adminId',
    fname: 'fname',
    lname: 'lname',
    email: 'email',
    password: 'password',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    categoryId: 'categoryId',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const VariantsScalarFieldEnum: {
    variantId: 'variantId',
    variantName: 'variantName'
  };

  export type VariantsScalarFieldEnum = (typeof VariantsScalarFieldEnum)[keyof typeof VariantsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
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

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    variantId: 'variantId',
    variantName: 'variantName',
    stock: 'stock',
    price: 'price',
    productId: 'productId'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const ProductImagesScalarFieldEnum: {
    imageId: 'imageId',
    url: 'url',
    productId: 'productId'
  };

  export type ProductImagesScalarFieldEnum = (typeof ProductImagesScalarFieldEnum)[keyof typeof ProductImagesScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
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

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ProductsOnOrdersScalarFieldEnum: {
    productsOnOrdersId: 'productsOnOrdersId',
    quantity: 'quantity',
    itemPrice: 'itemPrice',
    variantId: 'variantId',
    variantName: 'variantName',
    orderId: 'orderId',
    productId: 'productId'
  };

  export type ProductsOnOrdersScalarFieldEnum = (typeof ProductsOnOrdersScalarFieldEnum)[keyof typeof ProductsOnOrdersScalarFieldEnum]


  export const ProductMoreDetailsScalarFieldEnum: {
    detailsId: 'detailsId',
    productId: 'productId',
    key: 'key',
    value: 'value'
  };

  export type ProductMoreDetailsScalarFieldEnum = (typeof ProductMoreDetailsScalarFieldEnum)[keyof typeof ProductMoreDetailsScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    commentId: 'commentId',
    body: 'body',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    productId: 'productId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ReplyScalarFieldEnum: {
    replyId: 'replyId',
    body: 'body',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    image: 'image',
    commentId: 'commentId'
  };

  export type ReplyScalarFieldEnum = (typeof ReplyScalarFieldEnum)[keyof typeof ReplyScalarFieldEnum]


  export const OrderTransactionScalarFieldEnum: {
    transactionId: 'transactionId',
    data: 'data',
    paymentConfirmData: 'paymentConfirmData',
    paymentMethod: 'paymentMethod',
    date: 'date',
    paid: 'paid'
  };

  export type OrderTransactionScalarFieldEnum = (typeof OrderTransactionScalarFieldEnum)[keyof typeof OrderTransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    adminId?: StringFilter<"Admin"> | string
    fname?: StringFilter<"Admin"> | string
    lname?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    image?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    adminId?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    adminId?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    fname?: StringFilter<"Admin"> | string
    lname?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    image?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }, "adminId" | "email">

  export type AdminOrderByWithAggregationInput = {
    adminId?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    adminId?: StringWithAggregatesFilter<"Admin"> | string
    fname?: StringWithAggregatesFilter<"Admin"> | string
    lname?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    image?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userId?: StringFilter<"Users"> | string
    fname?: StringFilter<"Users"> | string
    lname?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    address?: StringFilter<"Users"> | string
    city?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    image?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    orders?: OrdersListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    userId?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    orders?: OrdersOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fname?: StringFilter<"Users"> | string
    lname?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    address?: StringFilter<"Users"> | string
    city?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    image?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    orders?: OrdersListRelationFilter
    comments?: CommentListRelationFilter
  }, "userId" | "email">

  export type UsersOrderByWithAggregationInput = {
    userId?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Users"> | string
    fname?: StringWithAggregatesFilter<"Users"> | string
    lname?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    address?: StringWithAggregatesFilter<"Users"> | string
    city?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    image?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    categoryId?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    products?: ProductsListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    categoryId?: SortOrder
    name?: SortOrder
    products?: ProductsOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    categoryId?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    products?: ProductsListRelationFilter
  }, "categoryId">

  export type CategoryOrderByWithAggregationInput = {
    categoryId?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    categoryId?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type VariantsWhereInput = {
    AND?: VariantsWhereInput | VariantsWhereInput[]
    OR?: VariantsWhereInput[]
    NOT?: VariantsWhereInput | VariantsWhereInput[]
    variantId?: StringFilter<"Variants"> | string
    variantName?: StringFilter<"Variants"> | string
  }

  export type VariantsOrderByWithRelationInput = {
    variantId?: SortOrder
    variantName?: SortOrder
  }

  export type VariantsWhereUniqueInput = Prisma.AtLeast<{
    variantId?: string
    AND?: VariantsWhereInput | VariantsWhereInput[]
    OR?: VariantsWhereInput[]
    NOT?: VariantsWhereInput | VariantsWhereInput[]
    variantName?: StringFilter<"Variants"> | string
  }, "variantId">

  export type VariantsOrderByWithAggregationInput = {
    variantId?: SortOrder
    variantName?: SortOrder
    _count?: VariantsCountOrderByAggregateInput
    _max?: VariantsMaxOrderByAggregateInput
    _min?: VariantsMinOrderByAggregateInput
  }

  export type VariantsScalarWhereWithAggregatesInput = {
    AND?: VariantsScalarWhereWithAggregatesInput | VariantsScalarWhereWithAggregatesInput[]
    OR?: VariantsScalarWhereWithAggregatesInput[]
    NOT?: VariantsScalarWhereWithAggregatesInput | VariantsScalarWhereWithAggregatesInput[]
    variantId?: StringWithAggregatesFilter<"Variants"> | string
    variantName?: StringWithAggregatesFilter<"Variants"> | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    productId?: StringFilter<"Products"> | string
    name?: StringFilter<"Products"> | string
    brand?: StringFilter<"Products"> | string
    categoryId?: StringFilter<"Products"> | string
    price?: FloatFilter<"Products"> | number
    variantType?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    longDescription?: StringNullableFilter<"Products"> | string | null
    discount?: FloatFilter<"Products"> | number
    code?: StringFilter<"Products"> | string
    createdAt?: DateTimeFilter<"Products"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    images?: ProductImagesListRelationFilter
    moreDetails?: ProductMoreDetailsListRelationFilter
    productsOnOrders?: ProductsOnOrdersListRelationFilter
    comments?: CommentListRelationFilter
    variants?: ProductVariantListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    productId?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    variantType?: SortOrder
    description?: SortOrderInput | SortOrder
    longDescription?: SortOrderInput | SortOrder
    discount?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    images?: ProductImagesOrderByRelationAggregateInput
    moreDetails?: ProductMoreDetailsOrderByRelationAggregateInput
    productsOnOrders?: ProductsOnOrdersOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    variants?: ProductVariantOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    productId?: string
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    brand?: StringFilter<"Products"> | string
    categoryId?: StringFilter<"Products"> | string
    price?: FloatFilter<"Products"> | number
    variantType?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    longDescription?: StringNullableFilter<"Products"> | string | null
    discount?: FloatFilter<"Products"> | number
    code?: StringFilter<"Products"> | string
    createdAt?: DateTimeFilter<"Products"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    images?: ProductImagesListRelationFilter
    moreDetails?: ProductMoreDetailsListRelationFilter
    productsOnOrders?: ProductsOnOrdersListRelationFilter
    comments?: CommentListRelationFilter
    variants?: ProductVariantListRelationFilter
  }, "productId">

  export type ProductsOrderByWithAggregationInput = {
    productId?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    variantType?: SortOrder
    description?: SortOrderInput | SortOrder
    longDescription?: SortOrderInput | SortOrder
    discount?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    productId?: StringWithAggregatesFilter<"Products"> | string
    name?: StringWithAggregatesFilter<"Products"> | string
    brand?: StringWithAggregatesFilter<"Products"> | string
    categoryId?: StringWithAggregatesFilter<"Products"> | string
    price?: FloatWithAggregatesFilter<"Products"> | number
    variantType?: StringWithAggregatesFilter<"Products"> | string
    description?: StringNullableWithAggregatesFilter<"Products"> | string | null
    longDescription?: StringNullableWithAggregatesFilter<"Products"> | string | null
    discount?: FloatWithAggregatesFilter<"Products"> | number
    code?: StringWithAggregatesFilter<"Products"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    variantId?: StringFilter<"ProductVariant"> | string
    variantName?: StringFilter<"ProductVariant"> | string
    stock?: IntFilter<"ProductVariant"> | number
    price?: FloatFilter<"ProductVariant"> | number
    productId?: StringFilter<"ProductVariant"> | string
    products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type ProductVariantOrderByWithRelationInput = {
    variantId?: SortOrder
    variantName?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    products?: ProductsOrderByWithRelationInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    variantId?: string
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    variantName?: StringFilter<"ProductVariant"> | string
    stock?: IntFilter<"ProductVariant"> | number
    price?: FloatFilter<"ProductVariant"> | number
    productId?: StringFilter<"ProductVariant"> | string
    products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "variantId">

  export type ProductVariantOrderByWithAggregationInput = {
    variantId?: SortOrder
    variantName?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _avg?: ProductVariantAvgOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
    _sum?: ProductVariantSumOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    variantId?: StringWithAggregatesFilter<"ProductVariant"> | string
    variantName?: StringWithAggregatesFilter<"ProductVariant"> | string
    stock?: IntWithAggregatesFilter<"ProductVariant"> | number
    price?: FloatWithAggregatesFilter<"ProductVariant"> | number
    productId?: StringWithAggregatesFilter<"ProductVariant"> | string
  }

  export type ProductImagesWhereInput = {
    AND?: ProductImagesWhereInput | ProductImagesWhereInput[]
    OR?: ProductImagesWhereInput[]
    NOT?: ProductImagesWhereInput | ProductImagesWhereInput[]
    imageId?: StringFilter<"ProductImages"> | string
    url?: StringFilter<"ProductImages"> | string
    productId?: StringNullableFilter<"ProductImages"> | string | null
    products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }

  export type ProductImagesOrderByWithRelationInput = {
    imageId?: SortOrder
    url?: SortOrder
    productId?: SortOrderInput | SortOrder
    products?: ProductsOrderByWithRelationInput
  }

  export type ProductImagesWhereUniqueInput = Prisma.AtLeast<{
    imageId?: string
    AND?: ProductImagesWhereInput | ProductImagesWhereInput[]
    OR?: ProductImagesWhereInput[]
    NOT?: ProductImagesWhereInput | ProductImagesWhereInput[]
    url?: StringFilter<"ProductImages"> | string
    productId?: StringNullableFilter<"ProductImages"> | string | null
    products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }, "imageId">

  export type ProductImagesOrderByWithAggregationInput = {
    imageId?: SortOrder
    url?: SortOrder
    productId?: SortOrderInput | SortOrder
    _count?: ProductImagesCountOrderByAggregateInput
    _max?: ProductImagesMaxOrderByAggregateInput
    _min?: ProductImagesMinOrderByAggregateInput
  }

  export type ProductImagesScalarWhereWithAggregatesInput = {
    AND?: ProductImagesScalarWhereWithAggregatesInput | ProductImagesScalarWhereWithAggregatesInput[]
    OR?: ProductImagesScalarWhereWithAggregatesInput[]
    NOT?: ProductImagesScalarWhereWithAggregatesInput | ProductImagesScalarWhereWithAggregatesInput[]
    imageId?: StringWithAggregatesFilter<"ProductImages"> | string
    url?: StringWithAggregatesFilter<"ProductImages"> | string
    productId?: StringNullableWithAggregatesFilter<"ProductImages"> | string | null
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    orderId?: StringFilter<"Orders"> | string
    date?: DateTimeFilter<"Orders"> | Date | string
    totalPrice?: FloatFilter<"Orders"> | number
    deliveryFee?: FloatFilter<"Orders"> | number
    paymentMethod?: StringNullableFilter<"Orders"> | string | null
    deliveryAddress?: StringNullableFilter<"Orders"> | string | null
    additionalFee?: FloatNullableFilter<"Orders"> | number | null
    discountFee?: FloatNullableFilter<"Orders"> | number | null
    status?: StringNullableFilter<"Orders"> | string | null
    userId?: StringNullableFilter<"Orders"> | string | null
    productsOnOrders?: ProductsOnOrdersListRelationFilter
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type OrdersOrderByWithRelationInput = {
    orderId?: SortOrder
    date?: SortOrder
    totalPrice?: SortOrder
    deliveryFee?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    deliveryAddress?: SortOrderInput | SortOrder
    additionalFee?: SortOrderInput | SortOrder
    discountFee?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    productsOnOrders?: ProductsOnOrdersOrderByRelationAggregateInput
    user?: UsersOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    orderId?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    date?: DateTimeFilter<"Orders"> | Date | string
    totalPrice?: FloatFilter<"Orders"> | number
    deliveryFee?: FloatFilter<"Orders"> | number
    paymentMethod?: StringNullableFilter<"Orders"> | string | null
    deliveryAddress?: StringNullableFilter<"Orders"> | string | null
    additionalFee?: FloatNullableFilter<"Orders"> | number | null
    discountFee?: FloatNullableFilter<"Orders"> | number | null
    status?: StringNullableFilter<"Orders"> | string | null
    userId?: StringNullableFilter<"Orders"> | string | null
    productsOnOrders?: ProductsOnOrdersListRelationFilter
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "orderId">

  export type OrdersOrderByWithAggregationInput = {
    orderId?: SortOrder
    date?: SortOrder
    totalPrice?: SortOrder
    deliveryFee?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    deliveryAddress?: SortOrderInput | SortOrder
    additionalFee?: SortOrderInput | SortOrder
    discountFee?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    orderId?: StringWithAggregatesFilter<"Orders"> | string
    date?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    totalPrice?: FloatWithAggregatesFilter<"Orders"> | number
    deliveryFee?: FloatWithAggregatesFilter<"Orders"> | number
    paymentMethod?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    deliveryAddress?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    additionalFee?: FloatNullableWithAggregatesFilter<"Orders"> | number | null
    discountFee?: FloatNullableWithAggregatesFilter<"Orders"> | number | null
    status?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Orders"> | string | null
  }

  export type ProductsOnOrdersWhereInput = {
    AND?: ProductsOnOrdersWhereInput | ProductsOnOrdersWhereInput[]
    OR?: ProductsOnOrdersWhereInput[]
    NOT?: ProductsOnOrdersWhereInput | ProductsOnOrdersWhereInput[]
    productsOnOrdersId?: StringFilter<"ProductsOnOrders"> | string
    quantity?: FloatFilter<"ProductsOnOrders"> | number
    itemPrice?: FloatFilter<"ProductsOnOrders"> | number
    variantId?: StringFilter<"ProductsOnOrders"> | string
    variantName?: StringFilter<"ProductsOnOrders"> | string
    orderId?: StringFilter<"ProductsOnOrders"> | string
    productId?: StringFilter<"ProductsOnOrders"> | string
    orders?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type ProductsOnOrdersOrderByWithRelationInput = {
    productsOnOrdersId?: SortOrder
    quantity?: SortOrder
    itemPrice?: SortOrder
    variantId?: SortOrder
    variantName?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    orders?: OrdersOrderByWithRelationInput
    products?: ProductsOrderByWithRelationInput
  }

  export type ProductsOnOrdersWhereUniqueInput = Prisma.AtLeast<{
    productsOnOrdersId?: string
    AND?: ProductsOnOrdersWhereInput | ProductsOnOrdersWhereInput[]
    OR?: ProductsOnOrdersWhereInput[]
    NOT?: ProductsOnOrdersWhereInput | ProductsOnOrdersWhereInput[]
    quantity?: FloatFilter<"ProductsOnOrders"> | number
    itemPrice?: FloatFilter<"ProductsOnOrders"> | number
    variantId?: StringFilter<"ProductsOnOrders"> | string
    variantName?: StringFilter<"ProductsOnOrders"> | string
    orderId?: StringFilter<"ProductsOnOrders"> | string
    productId?: StringFilter<"ProductsOnOrders"> | string
    orders?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "productsOnOrdersId">

  export type ProductsOnOrdersOrderByWithAggregationInput = {
    productsOnOrdersId?: SortOrder
    quantity?: SortOrder
    itemPrice?: SortOrder
    variantId?: SortOrder
    variantName?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    _count?: ProductsOnOrdersCountOrderByAggregateInput
    _avg?: ProductsOnOrdersAvgOrderByAggregateInput
    _max?: ProductsOnOrdersMaxOrderByAggregateInput
    _min?: ProductsOnOrdersMinOrderByAggregateInput
    _sum?: ProductsOnOrdersSumOrderByAggregateInput
  }

  export type ProductsOnOrdersScalarWhereWithAggregatesInput = {
    AND?: ProductsOnOrdersScalarWhereWithAggregatesInput | ProductsOnOrdersScalarWhereWithAggregatesInput[]
    OR?: ProductsOnOrdersScalarWhereWithAggregatesInput[]
    NOT?: ProductsOnOrdersScalarWhereWithAggregatesInput | ProductsOnOrdersScalarWhereWithAggregatesInput[]
    productsOnOrdersId?: StringWithAggregatesFilter<"ProductsOnOrders"> | string
    quantity?: FloatWithAggregatesFilter<"ProductsOnOrders"> | number
    itemPrice?: FloatWithAggregatesFilter<"ProductsOnOrders"> | number
    variantId?: StringWithAggregatesFilter<"ProductsOnOrders"> | string
    variantName?: StringWithAggregatesFilter<"ProductsOnOrders"> | string
    orderId?: StringWithAggregatesFilter<"ProductsOnOrders"> | string
    productId?: StringWithAggregatesFilter<"ProductsOnOrders"> | string
  }

  export type ProductMoreDetailsWhereInput = {
    AND?: ProductMoreDetailsWhereInput | ProductMoreDetailsWhereInput[]
    OR?: ProductMoreDetailsWhereInput[]
    NOT?: ProductMoreDetailsWhereInput | ProductMoreDetailsWhereInput[]
    detailsId?: StringFilter<"ProductMoreDetails"> | string
    productId?: StringFilter<"ProductMoreDetails"> | string
    key?: StringFilter<"ProductMoreDetails"> | string
    value?: StringFilter<"ProductMoreDetails"> | string
    products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }

  export type ProductMoreDetailsOrderByWithRelationInput = {
    detailsId?: SortOrder
    productId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    products?: ProductsOrderByWithRelationInput
  }

  export type ProductMoreDetailsWhereUniqueInput = Prisma.AtLeast<{
    detailsId?: string
    AND?: ProductMoreDetailsWhereInput | ProductMoreDetailsWhereInput[]
    OR?: ProductMoreDetailsWhereInput[]
    NOT?: ProductMoreDetailsWhereInput | ProductMoreDetailsWhereInput[]
    productId?: StringFilter<"ProductMoreDetails"> | string
    key?: StringFilter<"ProductMoreDetails"> | string
    value?: StringFilter<"ProductMoreDetails"> | string
    products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }, "detailsId">

  export type ProductMoreDetailsOrderByWithAggregationInput = {
    detailsId?: SortOrder
    productId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    _count?: ProductMoreDetailsCountOrderByAggregateInput
    _max?: ProductMoreDetailsMaxOrderByAggregateInput
    _min?: ProductMoreDetailsMinOrderByAggregateInput
  }

  export type ProductMoreDetailsScalarWhereWithAggregatesInput = {
    AND?: ProductMoreDetailsScalarWhereWithAggregatesInput | ProductMoreDetailsScalarWhereWithAggregatesInput[]
    OR?: ProductMoreDetailsScalarWhereWithAggregatesInput[]
    NOT?: ProductMoreDetailsScalarWhereWithAggregatesInput | ProductMoreDetailsScalarWhereWithAggregatesInput[]
    detailsId?: StringWithAggregatesFilter<"ProductMoreDetails"> | string
    productId?: StringWithAggregatesFilter<"ProductMoreDetails"> | string
    key?: StringWithAggregatesFilter<"ProductMoreDetails"> | string
    value?: StringWithAggregatesFilter<"ProductMoreDetails"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    commentId?: StringFilter<"Comment"> | string
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    productId?: StringFilter<"Comment"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    replies?: ReplyListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    commentId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    user?: UsersOrderByWithRelationInput
    products?: ProductsOrderByWithRelationInput
    replies?: ReplyOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    commentId?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    productId?: StringFilter<"Comment"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    replies?: ReplyListRelationFilter
  }, "commentId">

  export type CommentOrderByWithAggregationInput = {
    commentId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    commentId?: StringWithAggregatesFilter<"Comment"> | string
    body?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    productId?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type ReplyWhereInput = {
    AND?: ReplyWhereInput | ReplyWhereInput[]
    OR?: ReplyWhereInput[]
    NOT?: ReplyWhereInput | ReplyWhereInput[]
    replyId?: StringFilter<"Reply"> | string
    body?: StringFilter<"Reply"> | string
    createdAt?: DateTimeFilter<"Reply"> | Date | string
    updatedAt?: DateTimeFilter<"Reply"> | Date | string
    name?: StringFilter<"Reply"> | string
    image?: StringNullableFilter<"Reply"> | string | null
    commentId?: StringNullableFilter<"Reply"> | string | null
    comments?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
  }

  export type ReplyOrderByWithRelationInput = {
    replyId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    comments?: CommentOrderByWithRelationInput
  }

  export type ReplyWhereUniqueInput = Prisma.AtLeast<{
    replyId?: string
    AND?: ReplyWhereInput | ReplyWhereInput[]
    OR?: ReplyWhereInput[]
    NOT?: ReplyWhereInput | ReplyWhereInput[]
    body?: StringFilter<"Reply"> | string
    createdAt?: DateTimeFilter<"Reply"> | Date | string
    updatedAt?: DateTimeFilter<"Reply"> | Date | string
    name?: StringFilter<"Reply"> | string
    image?: StringNullableFilter<"Reply"> | string | null
    commentId?: StringNullableFilter<"Reply"> | string | null
    comments?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
  }, "replyId">

  export type ReplyOrderByWithAggregationInput = {
    replyId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    _count?: ReplyCountOrderByAggregateInput
    _max?: ReplyMaxOrderByAggregateInput
    _min?: ReplyMinOrderByAggregateInput
  }

  export type ReplyScalarWhereWithAggregatesInput = {
    AND?: ReplyScalarWhereWithAggregatesInput | ReplyScalarWhereWithAggregatesInput[]
    OR?: ReplyScalarWhereWithAggregatesInput[]
    NOT?: ReplyScalarWhereWithAggregatesInput | ReplyScalarWhereWithAggregatesInput[]
    replyId?: StringWithAggregatesFilter<"Reply"> | string
    body?: StringWithAggregatesFilter<"Reply"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reply"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reply"> | Date | string
    name?: StringWithAggregatesFilter<"Reply"> | string
    image?: StringNullableWithAggregatesFilter<"Reply"> | string | null
    commentId?: StringNullableWithAggregatesFilter<"Reply"> | string | null
  }

  export type OrderTransactionWhereInput = {
    AND?: OrderTransactionWhereInput | OrderTransactionWhereInput[]
    OR?: OrderTransactionWhereInput[]
    NOT?: OrderTransactionWhereInput | OrderTransactionWhereInput[]
    transactionId?: StringFilter<"OrderTransaction"> | string
    data?: StringFilter<"OrderTransaction"> | string
    paymentConfirmData?: StringNullableFilter<"OrderTransaction"> | string | null
    paymentMethod?: StringFilter<"OrderTransaction"> | string
    date?: DateTimeFilter<"OrderTransaction"> | Date | string
    paid?: BoolFilter<"OrderTransaction"> | boolean
  }

  export type OrderTransactionOrderByWithRelationInput = {
    transactionId?: SortOrder
    data?: SortOrder
    paymentConfirmData?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    date?: SortOrder
    paid?: SortOrder
  }

  export type OrderTransactionWhereUniqueInput = Prisma.AtLeast<{
    transactionId?: string
    AND?: OrderTransactionWhereInput | OrderTransactionWhereInput[]
    OR?: OrderTransactionWhereInput[]
    NOT?: OrderTransactionWhereInput | OrderTransactionWhereInput[]
    data?: StringFilter<"OrderTransaction"> | string
    paymentConfirmData?: StringNullableFilter<"OrderTransaction"> | string | null
    paymentMethod?: StringFilter<"OrderTransaction"> | string
    date?: DateTimeFilter<"OrderTransaction"> | Date | string
    paid?: BoolFilter<"OrderTransaction"> | boolean
  }, "transactionId">

  export type OrderTransactionOrderByWithAggregationInput = {
    transactionId?: SortOrder
    data?: SortOrder
    paymentConfirmData?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    date?: SortOrder
    paid?: SortOrder
    _count?: OrderTransactionCountOrderByAggregateInput
    _max?: OrderTransactionMaxOrderByAggregateInput
    _min?: OrderTransactionMinOrderByAggregateInput
  }

  export type OrderTransactionScalarWhereWithAggregatesInput = {
    AND?: OrderTransactionScalarWhereWithAggregatesInput | OrderTransactionScalarWhereWithAggregatesInput[]
    OR?: OrderTransactionScalarWhereWithAggregatesInput[]
    NOT?: OrderTransactionScalarWhereWithAggregatesInput | OrderTransactionScalarWhereWithAggregatesInput[]
    transactionId?: StringWithAggregatesFilter<"OrderTransaction"> | string
    data?: StringWithAggregatesFilter<"OrderTransaction"> | string
    paymentConfirmData?: StringNullableWithAggregatesFilter<"OrderTransaction"> | string | null
    paymentMethod?: StringWithAggregatesFilter<"OrderTransaction"> | string
    date?: DateTimeWithAggregatesFilter<"OrderTransaction"> | Date | string
    paid?: BoolWithAggregatesFilter<"OrderTransaction"> | boolean
  }

  export type AdminCreateInput = {
    adminId: string
    fname: string
    lname: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    adminId: string
    fname: string
    lname: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
  }

  export type AdminUpdateInput = {
    adminId?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    adminId?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    adminId: string
    fname: string
    lname: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    adminId?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    adminId?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    userId: string
    fname: string
    lname: string
    phone: string
    address: string
    city: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    orders?: OrdersCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    userId: string
    fname: string
    lname: string
    phone: string
    address: string
    city: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    userId: string
    fname: string
    lname: string
    phone: string
    address: string
    city: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    categoryId: string
    name: string
    products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    categoryId: string
    name: string
    products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    categoryId: string
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VariantsCreateInput = {
    variantId: string
    variantName: string
  }

  export type VariantsUncheckedCreateInput = {
    variantId: string
    variantName: string
  }

  export type VariantsUpdateInput = {
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
  }

  export type VariantsUncheckedUpdateInput = {
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
  }

  export type VariantsCreateManyInput = {
    variantId: string
    variantName: string
  }

  export type VariantsUpdateManyMutationInput = {
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
  }

  export type VariantsUncheckedUpdateManyInput = {
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsCreateInput = {
    productId: string
    name: string
    brand: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    images?: ProductImagesCreateNestedManyWithoutProductsInput
    moreDetails?: ProductMoreDetailsCreateNestedManyWithoutProductsInput
    productsOnOrders?: ProductsOnOrdersCreateNestedManyWithoutProductsInput
    comments?: CommentCreateNestedManyWithoutProductsInput
    variants?: ProductVariantCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateInput = {
    productId: string
    name: string
    brand: string
    categoryId: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    images?: ProductImagesUncheckedCreateNestedManyWithoutProductsInput
    moreDetails?: ProductMoreDetailsUncheckedCreateNestedManyWithoutProductsInput
    productsOnOrders?: ProductsOnOrdersUncheckedCreateNestedManyWithoutProductsInput
    comments?: CommentUncheckedCreateNestedManyWithoutProductsInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    images?: ProductImagesUpdateManyWithoutProductsNestedInput
    moreDetails?: ProductMoreDetailsUpdateManyWithoutProductsNestedInput
    productsOnOrders?: ProductsOnOrdersUpdateManyWithoutProductsNestedInput
    comments?: CommentUpdateManyWithoutProductsNestedInput
    variants?: ProductVariantUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImagesUncheckedUpdateManyWithoutProductsNestedInput
    moreDetails?: ProductMoreDetailsUncheckedUpdateManyWithoutProductsNestedInput
    productsOnOrders?: ProductsOnOrdersUncheckedUpdateManyWithoutProductsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProductsNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsCreateManyInput = {
    productId: string
    name: string
    brand: string
    categoryId: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
  }

  export type ProductsUpdateManyMutationInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantCreateInput = {
    variantId: string
    variantName: string
    stock: number
    price: number
    products: ProductsCreateNestedOneWithoutVariantsInput
  }

  export type ProductVariantUncheckedCreateInput = {
    variantId: string
    variantName: string
    stock: number
    price: number
    productId: string
  }

  export type ProductVariantUpdateInput = {
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    products?: ProductsUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type ProductVariantUncheckedUpdateInput = {
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantCreateManyInput = {
    variantId: string
    variantName: string
    stock: number
    price: number
    productId: string
  }

  export type ProductVariantUpdateManyMutationInput = {
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImagesCreateInput = {
    imageId: string
    url: string
    products?: ProductsCreateNestedOneWithoutImagesInput
  }

  export type ProductImagesUncheckedCreateInput = {
    imageId: string
    url: string
    productId?: string | null
  }

  export type ProductImagesUpdateInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    products?: ProductsUpdateOneWithoutImagesNestedInput
  }

  export type ProductImagesUncheckedUpdateInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductImagesCreateManyInput = {
    imageId: string
    url: string
    productId?: string | null
  }

  export type ProductImagesUpdateManyMutationInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImagesUncheckedUpdateManyInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdersCreateInput = {
    orderId: string
    date?: Date | string
    totalPrice?: number
    deliveryFee?: number
    paymentMethod?: string | null
    deliveryAddress?: string | null
    additionalFee?: number | null
    discountFee?: number | null
    status?: string | null
    productsOnOrders?: ProductsOnOrdersCreateNestedManyWithoutOrdersInput
    user?: UsersCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    orderId: string
    date?: Date | string
    totalPrice?: number
    deliveryFee?: number
    paymentMethod?: string | null
    deliveryAddress?: string | null
    additionalFee?: number | null
    discountFee?: number | null
    status?: string | null
    userId?: string | null
    productsOnOrders?: ProductsOnOrdersUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    additionalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    productsOnOrders?: ProductsOnOrdersUpdateManyWithoutOrdersNestedInput
    user?: UsersUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    additionalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    productsOnOrders?: ProductsOnOrdersUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersCreateManyInput = {
    orderId: string
    date?: Date | string
    totalPrice?: number
    deliveryFee?: number
    paymentMethod?: string | null
    deliveryAddress?: string | null
    additionalFee?: number | null
    discountFee?: number | null
    status?: string | null
    userId?: string | null
  }

  export type OrdersUpdateManyMutationInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    additionalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdersUncheckedUpdateManyInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    additionalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductsOnOrdersCreateInput = {
    productsOnOrdersId: string
    quantity: number
    itemPrice: number
    variantId: string
    variantName: string
    orders: OrdersCreateNestedOneWithoutProductsOnOrdersInput
    products: ProductsCreateNestedOneWithoutProductsOnOrdersInput
  }

  export type ProductsOnOrdersUncheckedCreateInput = {
    productsOnOrdersId: string
    quantity: number
    itemPrice: number
    variantId: string
    variantName: string
    orderId: string
    productId: string
  }

  export type ProductsOnOrdersUpdateInput = {
    productsOnOrdersId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    itemPrice?: FloatFieldUpdateOperationsInput | number
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUpdateOneRequiredWithoutProductsOnOrdersNestedInput
    products?: ProductsUpdateOneRequiredWithoutProductsOnOrdersNestedInput
  }

  export type ProductsOnOrdersUncheckedUpdateInput = {
    productsOnOrdersId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    itemPrice?: FloatFieldUpdateOperationsInput | number
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsOnOrdersCreateManyInput = {
    productsOnOrdersId: string
    quantity: number
    itemPrice: number
    variantId: string
    variantName: string
    orderId: string
    productId: string
  }

  export type ProductsOnOrdersUpdateManyMutationInput = {
    productsOnOrdersId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    itemPrice?: FloatFieldUpdateOperationsInput | number
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsOnOrdersUncheckedUpdateManyInput = {
    productsOnOrdersId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    itemPrice?: FloatFieldUpdateOperationsInput | number
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductMoreDetailsCreateInput = {
    detailsId: string
    key: string
    value: string
    products?: ProductsCreateNestedOneWithoutMoreDetailsInput
  }

  export type ProductMoreDetailsUncheckedCreateInput = {
    detailsId: string
    productId: string
    key: string
    value: string
  }

  export type ProductMoreDetailsUpdateInput = {
    detailsId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    products?: ProductsUpdateOneWithoutMoreDetailsNestedInput
  }

  export type ProductMoreDetailsUncheckedUpdateInput = {
    detailsId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductMoreDetailsCreateManyInput = {
    detailsId: string
    productId: string
    key: string
    value: string
  }

  export type ProductMoreDetailsUpdateManyMutationInput = {
    detailsId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductMoreDetailsUncheckedUpdateManyInput = {
    detailsId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    commentId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutCommentsInput
    products: ProductsCreateNestedOneWithoutCommentsInput
    replies?: ReplyCreateNestedManyWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    commentId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    productId: string
    replies?: ReplyUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type CommentUpdateInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
    products?: ProductsUpdateOneRequiredWithoutCommentsNestedInput
    replies?: ReplyUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    replies?: ReplyUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type CommentCreateManyInput = {
    commentId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    productId: string
  }

  export type CommentUpdateManyMutationInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyCreateInput = {
    replyId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string
    image?: string | null
    comments?: CommentCreateNestedOneWithoutRepliesInput
  }

  export type ReplyUncheckedCreateInput = {
    replyId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string
    image?: string | null
    commentId?: string | null
  }

  export type ReplyUpdateInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUpdateOneWithoutRepliesNestedInput
  }

  export type ReplyUncheckedUpdateInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReplyCreateManyInput = {
    replyId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string
    image?: string | null
    commentId?: string | null
  }

  export type ReplyUpdateManyMutationInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReplyUncheckedUpdateManyInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderTransactionCreateInput = {
    transactionId: string
    data: string
    paymentConfirmData?: string | null
    paymentMethod: string
    date?: Date | string
    paid?: boolean
  }

  export type OrderTransactionUncheckedCreateInput = {
    transactionId: string
    data: string
    paymentConfirmData?: string | null
    paymentMethod: string
    date?: Date | string
    paid?: boolean
  }

  export type OrderTransactionUpdateInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    paymentConfirmData?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderTransactionUncheckedUpdateInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    paymentConfirmData?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderTransactionCreateManyInput = {
    transactionId: string
    data: string
    paymentConfirmData?: string | null
    paymentMethod: string
    date?: Date | string
    paid?: boolean
  }

  export type OrderTransactionUpdateManyMutationInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    paymentConfirmData?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderTransactionUncheckedUpdateManyInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    paymentConfirmData?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminCountOrderByAggregateInput = {
    adminId?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    adminId?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    adminId?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    userId?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    userId?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    userId?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    categoryId?: SortOrder
    name?: SortOrder
  }

  export type VariantsCountOrderByAggregateInput = {
    variantId?: SortOrder
    variantName?: SortOrder
  }

  export type VariantsMaxOrderByAggregateInput = {
    variantId?: SortOrder
    variantName?: SortOrder
  }

  export type VariantsMinOrderByAggregateInput = {
    variantId?: SortOrder
    variantName?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductImagesListRelationFilter = {
    every?: ProductImagesWhereInput
    some?: ProductImagesWhereInput
    none?: ProductImagesWhereInput
  }

  export type ProductMoreDetailsListRelationFilter = {
    every?: ProductMoreDetailsWhereInput
    some?: ProductMoreDetailsWhereInput
    none?: ProductMoreDetailsWhereInput
  }

  export type ProductsOnOrdersListRelationFilter = {
    every?: ProductsOnOrdersWhereInput
    some?: ProductsOnOrdersWhereInput
    none?: ProductsOnOrdersWhereInput
  }

  export type ProductVariantListRelationFilter = {
    every?: ProductVariantWhereInput
    some?: ProductVariantWhereInput
    none?: ProductVariantWhereInput
  }

  export type ProductImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductMoreDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsOnOrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    variantType?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    discount?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    variantType?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    discount?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    variantType?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    discount?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type ProductVariantCountOrderByAggregateInput = {
    variantId?: SortOrder
    variantName?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type ProductVariantAvgOrderByAggregateInput = {
    stock?: SortOrder
    price?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    variantId?: SortOrder
    variantName?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    variantId?: SortOrder
    variantName?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type ProductVariantSumOrderByAggregateInput = {
    stock?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProductsNullableScalarRelationFilter = {
    is?: ProductsWhereInput | null
    isNot?: ProductsWhereInput | null
  }

  export type ProductImagesCountOrderByAggregateInput = {
    imageId?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type ProductImagesMaxOrderByAggregateInput = {
    imageId?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type ProductImagesMinOrderByAggregateInput = {
    imageId?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type OrdersCountOrderByAggregateInput = {
    orderId?: SortOrder
    date?: SortOrder
    totalPrice?: SortOrder
    deliveryFee?: SortOrder
    paymentMethod?: SortOrder
    deliveryAddress?: SortOrder
    additionalFee?: SortOrder
    discountFee?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
    deliveryFee?: SortOrder
    additionalFee?: SortOrder
    discountFee?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    orderId?: SortOrder
    date?: SortOrder
    totalPrice?: SortOrder
    deliveryFee?: SortOrder
    paymentMethod?: SortOrder
    deliveryAddress?: SortOrder
    additionalFee?: SortOrder
    discountFee?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    orderId?: SortOrder
    date?: SortOrder
    totalPrice?: SortOrder
    deliveryFee?: SortOrder
    paymentMethod?: SortOrder
    deliveryAddress?: SortOrder
    additionalFee?: SortOrder
    discountFee?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    totalPrice?: SortOrder
    deliveryFee?: SortOrder
    additionalFee?: SortOrder
    discountFee?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type ProductsOnOrdersCountOrderByAggregateInput = {
    productsOnOrdersId?: SortOrder
    quantity?: SortOrder
    itemPrice?: SortOrder
    variantId?: SortOrder
    variantName?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type ProductsOnOrdersAvgOrderByAggregateInput = {
    quantity?: SortOrder
    itemPrice?: SortOrder
  }

  export type ProductsOnOrdersMaxOrderByAggregateInput = {
    productsOnOrdersId?: SortOrder
    quantity?: SortOrder
    itemPrice?: SortOrder
    variantId?: SortOrder
    variantName?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type ProductsOnOrdersMinOrderByAggregateInput = {
    productsOnOrdersId?: SortOrder
    quantity?: SortOrder
    itemPrice?: SortOrder
    variantId?: SortOrder
    variantName?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type ProductsOnOrdersSumOrderByAggregateInput = {
    quantity?: SortOrder
    itemPrice?: SortOrder
  }

  export type ProductMoreDetailsCountOrderByAggregateInput = {
    detailsId?: SortOrder
    productId?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type ProductMoreDetailsMaxOrderByAggregateInput = {
    detailsId?: SortOrder
    productId?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type ProductMoreDetailsMinOrderByAggregateInput = {
    detailsId?: SortOrder
    productId?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ReplyListRelationFilter = {
    every?: ReplyWhereInput
    some?: ReplyWhereInput
    none?: ReplyWhereInput
  }

  export type ReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    commentId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    commentId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    commentId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type ReplyCountOrderByAggregateInput = {
    replyId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    image?: SortOrder
    commentId?: SortOrder
  }

  export type ReplyMaxOrderByAggregateInput = {
    replyId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    image?: SortOrder
    commentId?: SortOrder
  }

  export type ReplyMinOrderByAggregateInput = {
    replyId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    image?: SortOrder
    commentId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrderTransactionCountOrderByAggregateInput = {
    transactionId?: SortOrder
    data?: SortOrder
    paymentConfirmData?: SortOrder
    paymentMethod?: SortOrder
    date?: SortOrder
    paid?: SortOrder
  }

  export type OrderTransactionMaxOrderByAggregateInput = {
    transactionId?: SortOrder
    data?: SortOrder
    paymentConfirmData?: SortOrder
    paymentMethod?: SortOrder
    date?: SortOrder
    paid?: SortOrder
  }

  export type OrderTransactionMinOrderByAggregateInput = {
    transactionId?: SortOrder
    data?: SortOrder
    paymentConfirmData?: SortOrder
    paymentMethod?: SortOrder
    date?: SortOrder
    paid?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ProductsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductImagesCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductImagesCreateWithoutProductsInput, ProductImagesUncheckedCreateWithoutProductsInput> | ProductImagesCreateWithoutProductsInput[] | ProductImagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutProductsInput | ProductImagesCreateOrConnectWithoutProductsInput[]
    createMany?: ProductImagesCreateManyProductsInputEnvelope
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
  }

  export type ProductMoreDetailsCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductMoreDetailsCreateWithoutProductsInput, ProductMoreDetailsUncheckedCreateWithoutProductsInput> | ProductMoreDetailsCreateWithoutProductsInput[] | ProductMoreDetailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductMoreDetailsCreateOrConnectWithoutProductsInput | ProductMoreDetailsCreateOrConnectWithoutProductsInput[]
    createMany?: ProductMoreDetailsCreateManyProductsInputEnvelope
    connect?: ProductMoreDetailsWhereUniqueInput | ProductMoreDetailsWhereUniqueInput[]
  }

  export type ProductsOnOrdersCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductsOnOrdersCreateWithoutProductsInput, ProductsOnOrdersUncheckedCreateWithoutProductsInput> | ProductsOnOrdersCreateWithoutProductsInput[] | ProductsOnOrdersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductsOnOrdersCreateOrConnectWithoutProductsInput | ProductsOnOrdersCreateOrConnectWithoutProductsInput[]
    createMany?: ProductsOnOrdersCreateManyProductsInputEnvelope
    connect?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutProductsInput = {
    create?: XOR<CommentCreateWithoutProductsInput, CommentUncheckedCreateWithoutProductsInput> | CommentCreateWithoutProductsInput[] | CommentUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProductsInput | CommentCreateOrConnectWithoutProductsInput[]
    createMany?: CommentCreateManyProductsInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ProductVariantCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductVariantCreateWithoutProductsInput, ProductVariantUncheckedCreateWithoutProductsInput> | ProductVariantCreateWithoutProductsInput[] | ProductVariantUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductsInput | ProductVariantCreateOrConnectWithoutProductsInput[]
    createMany?: ProductVariantCreateManyProductsInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type ProductImagesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductImagesCreateWithoutProductsInput, ProductImagesUncheckedCreateWithoutProductsInput> | ProductImagesCreateWithoutProductsInput[] | ProductImagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutProductsInput | ProductImagesCreateOrConnectWithoutProductsInput[]
    createMany?: ProductImagesCreateManyProductsInputEnvelope
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
  }

  export type ProductMoreDetailsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductMoreDetailsCreateWithoutProductsInput, ProductMoreDetailsUncheckedCreateWithoutProductsInput> | ProductMoreDetailsCreateWithoutProductsInput[] | ProductMoreDetailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductMoreDetailsCreateOrConnectWithoutProductsInput | ProductMoreDetailsCreateOrConnectWithoutProductsInput[]
    createMany?: ProductMoreDetailsCreateManyProductsInputEnvelope
    connect?: ProductMoreDetailsWhereUniqueInput | ProductMoreDetailsWhereUniqueInput[]
  }

  export type ProductsOnOrdersUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductsOnOrdersCreateWithoutProductsInput, ProductsOnOrdersUncheckedCreateWithoutProductsInput> | ProductsOnOrdersCreateWithoutProductsInput[] | ProductsOnOrdersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductsOnOrdersCreateOrConnectWithoutProductsInput | ProductsOnOrdersCreateOrConnectWithoutProductsInput[]
    createMany?: ProductsOnOrdersCreateManyProductsInputEnvelope
    connect?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<CommentCreateWithoutProductsInput, CommentUncheckedCreateWithoutProductsInput> | CommentCreateWithoutProductsInput[] | CommentUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProductsInput | CommentCreateOrConnectWithoutProductsInput[]
    createMany?: CommentCreateManyProductsInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ProductVariantUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductVariantCreateWithoutProductsInput, ProductVariantUncheckedCreateWithoutProductsInput> | ProductVariantCreateWithoutProductsInput[] | ProductVariantUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductsInput | ProductVariantCreateOrConnectWithoutProductsInput[]
    createMany?: ProductVariantCreateManyProductsInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductImagesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductImagesCreateWithoutProductsInput, ProductImagesUncheckedCreateWithoutProductsInput> | ProductImagesCreateWithoutProductsInput[] | ProductImagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutProductsInput | ProductImagesCreateOrConnectWithoutProductsInput[]
    upsert?: ProductImagesUpsertWithWhereUniqueWithoutProductsInput | ProductImagesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductImagesCreateManyProductsInputEnvelope
    set?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    disconnect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    delete?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    update?: ProductImagesUpdateWithWhereUniqueWithoutProductsInput | ProductImagesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductImagesUpdateManyWithWhereWithoutProductsInput | ProductImagesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
  }

  export type ProductMoreDetailsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductMoreDetailsCreateWithoutProductsInput, ProductMoreDetailsUncheckedCreateWithoutProductsInput> | ProductMoreDetailsCreateWithoutProductsInput[] | ProductMoreDetailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductMoreDetailsCreateOrConnectWithoutProductsInput | ProductMoreDetailsCreateOrConnectWithoutProductsInput[]
    upsert?: ProductMoreDetailsUpsertWithWhereUniqueWithoutProductsInput | ProductMoreDetailsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductMoreDetailsCreateManyProductsInputEnvelope
    set?: ProductMoreDetailsWhereUniqueInput | ProductMoreDetailsWhereUniqueInput[]
    disconnect?: ProductMoreDetailsWhereUniqueInput | ProductMoreDetailsWhereUniqueInput[]
    delete?: ProductMoreDetailsWhereUniqueInput | ProductMoreDetailsWhereUniqueInput[]
    connect?: ProductMoreDetailsWhereUniqueInput | ProductMoreDetailsWhereUniqueInput[]
    update?: ProductMoreDetailsUpdateWithWhereUniqueWithoutProductsInput | ProductMoreDetailsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductMoreDetailsUpdateManyWithWhereWithoutProductsInput | ProductMoreDetailsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductMoreDetailsScalarWhereInput | ProductMoreDetailsScalarWhereInput[]
  }

  export type ProductsOnOrdersUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductsOnOrdersCreateWithoutProductsInput, ProductsOnOrdersUncheckedCreateWithoutProductsInput> | ProductsOnOrdersCreateWithoutProductsInput[] | ProductsOnOrdersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductsOnOrdersCreateOrConnectWithoutProductsInput | ProductsOnOrdersCreateOrConnectWithoutProductsInput[]
    upsert?: ProductsOnOrdersUpsertWithWhereUniqueWithoutProductsInput | ProductsOnOrdersUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductsOnOrdersCreateManyProductsInputEnvelope
    set?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    disconnect?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    delete?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    connect?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    update?: ProductsOnOrdersUpdateWithWhereUniqueWithoutProductsInput | ProductsOnOrdersUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductsOnOrdersUpdateManyWithWhereWithoutProductsInput | ProductsOnOrdersUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductsOnOrdersScalarWhereInput | ProductsOnOrdersScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutProductsNestedInput = {
    create?: XOR<CommentCreateWithoutProductsInput, CommentUncheckedCreateWithoutProductsInput> | CommentCreateWithoutProductsInput[] | CommentUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProductsInput | CommentCreateOrConnectWithoutProductsInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutProductsInput | CommentUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: CommentCreateManyProductsInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutProductsInput | CommentUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutProductsInput | CommentUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ProductVariantUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductsInput, ProductVariantUncheckedCreateWithoutProductsInput> | ProductVariantCreateWithoutProductsInput[] | ProductVariantUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductsInput | ProductVariantCreateOrConnectWithoutProductsInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductsInput | ProductVariantUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductVariantCreateManyProductsInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductsInput | ProductVariantUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductsInput | ProductVariantUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductImagesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductImagesCreateWithoutProductsInput, ProductImagesUncheckedCreateWithoutProductsInput> | ProductImagesCreateWithoutProductsInput[] | ProductImagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutProductsInput | ProductImagesCreateOrConnectWithoutProductsInput[]
    upsert?: ProductImagesUpsertWithWhereUniqueWithoutProductsInput | ProductImagesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductImagesCreateManyProductsInputEnvelope
    set?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    disconnect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    delete?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    update?: ProductImagesUpdateWithWhereUniqueWithoutProductsInput | ProductImagesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductImagesUpdateManyWithWhereWithoutProductsInput | ProductImagesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
  }

  export type ProductMoreDetailsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductMoreDetailsCreateWithoutProductsInput, ProductMoreDetailsUncheckedCreateWithoutProductsInput> | ProductMoreDetailsCreateWithoutProductsInput[] | ProductMoreDetailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductMoreDetailsCreateOrConnectWithoutProductsInput | ProductMoreDetailsCreateOrConnectWithoutProductsInput[]
    upsert?: ProductMoreDetailsUpsertWithWhereUniqueWithoutProductsInput | ProductMoreDetailsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductMoreDetailsCreateManyProductsInputEnvelope
    set?: ProductMoreDetailsWhereUniqueInput | ProductMoreDetailsWhereUniqueInput[]
    disconnect?: ProductMoreDetailsWhereUniqueInput | ProductMoreDetailsWhereUniqueInput[]
    delete?: ProductMoreDetailsWhereUniqueInput | ProductMoreDetailsWhereUniqueInput[]
    connect?: ProductMoreDetailsWhereUniqueInput | ProductMoreDetailsWhereUniqueInput[]
    update?: ProductMoreDetailsUpdateWithWhereUniqueWithoutProductsInput | ProductMoreDetailsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductMoreDetailsUpdateManyWithWhereWithoutProductsInput | ProductMoreDetailsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductMoreDetailsScalarWhereInput | ProductMoreDetailsScalarWhereInput[]
  }

  export type ProductsOnOrdersUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductsOnOrdersCreateWithoutProductsInput, ProductsOnOrdersUncheckedCreateWithoutProductsInput> | ProductsOnOrdersCreateWithoutProductsInput[] | ProductsOnOrdersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductsOnOrdersCreateOrConnectWithoutProductsInput | ProductsOnOrdersCreateOrConnectWithoutProductsInput[]
    upsert?: ProductsOnOrdersUpsertWithWhereUniqueWithoutProductsInput | ProductsOnOrdersUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductsOnOrdersCreateManyProductsInputEnvelope
    set?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    disconnect?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    delete?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    connect?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    update?: ProductsOnOrdersUpdateWithWhereUniqueWithoutProductsInput | ProductsOnOrdersUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductsOnOrdersUpdateManyWithWhereWithoutProductsInput | ProductsOnOrdersUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductsOnOrdersScalarWhereInput | ProductsOnOrdersScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<CommentCreateWithoutProductsInput, CommentUncheckedCreateWithoutProductsInput> | CommentCreateWithoutProductsInput[] | CommentUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProductsInput | CommentCreateOrConnectWithoutProductsInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutProductsInput | CommentUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: CommentCreateManyProductsInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutProductsInput | CommentUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutProductsInput | CommentUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductsInput, ProductVariantUncheckedCreateWithoutProductsInput> | ProductVariantCreateWithoutProductsInput[] | ProductVariantUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductsInput | ProductVariantCreateOrConnectWithoutProductsInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductsInput | ProductVariantUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductVariantCreateManyProductsInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductsInput | ProductVariantUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductsInput | ProductVariantUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ProductsCreateWithoutVariantsInput, ProductsUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutVariantsInput
    connect?: ProductsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<ProductsCreateWithoutVariantsInput, ProductsUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutVariantsInput
    upsert?: ProductsUpsertWithoutVariantsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutVariantsInput, ProductsUpdateWithoutVariantsInput>, ProductsUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductsCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductsCreateWithoutImagesInput, ProductsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutImagesInput
    connect?: ProductsWhereUniqueInput
  }

  export type ProductsUpdateOneWithoutImagesNestedInput = {
    create?: XOR<ProductsCreateWithoutImagesInput, ProductsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutImagesInput
    upsert?: ProductsUpsertWithoutImagesInput
    disconnect?: ProductsWhereInput | boolean
    delete?: ProductsWhereInput | boolean
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutImagesInput, ProductsUpdateWithoutImagesInput>, ProductsUncheckedUpdateWithoutImagesInput>
  }

  export type ProductsOnOrdersCreateNestedManyWithoutOrdersInput = {
    create?: XOR<ProductsOnOrdersCreateWithoutOrdersInput, ProductsOnOrdersUncheckedCreateWithoutOrdersInput> | ProductsOnOrdersCreateWithoutOrdersInput[] | ProductsOnOrdersUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: ProductsOnOrdersCreateOrConnectWithoutOrdersInput | ProductsOnOrdersCreateOrConnectWithoutOrdersInput[]
    createMany?: ProductsOnOrdersCreateManyOrdersInputEnvelope
    connect?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type ProductsOnOrdersUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<ProductsOnOrdersCreateWithoutOrdersInput, ProductsOnOrdersUncheckedCreateWithoutOrdersInput> | ProductsOnOrdersCreateWithoutOrdersInput[] | ProductsOnOrdersUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: ProductsOnOrdersCreateOrConnectWithoutOrdersInput | ProductsOnOrdersCreateOrConnectWithoutOrdersInput[]
    createMany?: ProductsOnOrdersCreateManyOrdersInputEnvelope
    connect?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsOnOrdersUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<ProductsOnOrdersCreateWithoutOrdersInput, ProductsOnOrdersUncheckedCreateWithoutOrdersInput> | ProductsOnOrdersCreateWithoutOrdersInput[] | ProductsOnOrdersUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: ProductsOnOrdersCreateOrConnectWithoutOrdersInput | ProductsOnOrdersCreateOrConnectWithoutOrdersInput[]
    upsert?: ProductsOnOrdersUpsertWithWhereUniqueWithoutOrdersInput | ProductsOnOrdersUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: ProductsOnOrdersCreateManyOrdersInputEnvelope
    set?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    disconnect?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    delete?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    connect?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    update?: ProductsOnOrdersUpdateWithWhereUniqueWithoutOrdersInput | ProductsOnOrdersUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: ProductsOnOrdersUpdateManyWithWhereWithoutOrdersInput | ProductsOnOrdersUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: ProductsOnOrdersScalarWhereInput | ProductsOnOrdersScalarWhereInput[]
  }

  export type UsersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    upsert?: UsersUpsertWithoutOrdersInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductsOnOrdersUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<ProductsOnOrdersCreateWithoutOrdersInput, ProductsOnOrdersUncheckedCreateWithoutOrdersInput> | ProductsOnOrdersCreateWithoutOrdersInput[] | ProductsOnOrdersUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: ProductsOnOrdersCreateOrConnectWithoutOrdersInput | ProductsOnOrdersCreateOrConnectWithoutOrdersInput[]
    upsert?: ProductsOnOrdersUpsertWithWhereUniqueWithoutOrdersInput | ProductsOnOrdersUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: ProductsOnOrdersCreateManyOrdersInputEnvelope
    set?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    disconnect?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    delete?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    connect?: ProductsOnOrdersWhereUniqueInput | ProductsOnOrdersWhereUniqueInput[]
    update?: ProductsOnOrdersUpdateWithWhereUniqueWithoutOrdersInput | ProductsOnOrdersUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: ProductsOnOrdersUpdateManyWithWhereWithoutOrdersInput | ProductsOnOrdersUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: ProductsOnOrdersScalarWhereInput | ProductsOnOrdersScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutProductsOnOrdersInput = {
    create?: XOR<OrdersCreateWithoutProductsOnOrdersInput, OrdersUncheckedCreateWithoutProductsOnOrdersInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutProductsOnOrdersInput
    connect?: OrdersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutProductsOnOrdersInput = {
    create?: XOR<ProductsCreateWithoutProductsOnOrdersInput, ProductsUncheckedCreateWithoutProductsOnOrdersInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductsOnOrdersInput
    connect?: ProductsWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutProductsOnOrdersNestedInput = {
    create?: XOR<OrdersCreateWithoutProductsOnOrdersInput, OrdersUncheckedCreateWithoutProductsOnOrdersInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutProductsOnOrdersInput
    upsert?: OrdersUpsertWithoutProductsOnOrdersInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutProductsOnOrdersInput, OrdersUpdateWithoutProductsOnOrdersInput>, OrdersUncheckedUpdateWithoutProductsOnOrdersInput>
  }

  export type ProductsUpdateOneRequiredWithoutProductsOnOrdersNestedInput = {
    create?: XOR<ProductsCreateWithoutProductsOnOrdersInput, ProductsUncheckedCreateWithoutProductsOnOrdersInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductsOnOrdersInput
    upsert?: ProductsUpsertWithoutProductsOnOrdersInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutProductsOnOrdersInput, ProductsUpdateWithoutProductsOnOrdersInput>, ProductsUncheckedUpdateWithoutProductsOnOrdersInput>
  }

  export type ProductsCreateNestedOneWithoutMoreDetailsInput = {
    create?: XOR<ProductsCreateWithoutMoreDetailsInput, ProductsUncheckedCreateWithoutMoreDetailsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutMoreDetailsInput
    connect?: ProductsWhereUniqueInput
  }

  export type ProductsUpdateOneWithoutMoreDetailsNestedInput = {
    create?: XOR<ProductsCreateWithoutMoreDetailsInput, ProductsUncheckedCreateWithoutMoreDetailsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutMoreDetailsInput
    upsert?: ProductsUpsertWithoutMoreDetailsInput
    disconnect?: ProductsWhereInput | boolean
    delete?: ProductsWhereInput | boolean
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutMoreDetailsInput, ProductsUpdateWithoutMoreDetailsInput>, ProductsUncheckedUpdateWithoutMoreDetailsInput>
  }

  export type UsersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    connect?: UsersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ProductsCreateWithoutCommentsInput, ProductsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutCommentsInput
    connect?: ProductsWhereUniqueInput
  }

  export type ReplyCreateNestedManyWithoutCommentsInput = {
    create?: XOR<ReplyCreateWithoutCommentsInput, ReplyUncheckedCreateWithoutCommentsInput> | ReplyCreateWithoutCommentsInput[] | ReplyUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutCommentsInput | ReplyCreateOrConnectWithoutCommentsInput[]
    createMany?: ReplyCreateManyCommentsInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type ReplyUncheckedCreateNestedManyWithoutCommentsInput = {
    create?: XOR<ReplyCreateWithoutCommentsInput, ReplyUncheckedCreateWithoutCommentsInput> | ReplyCreateWithoutCommentsInput[] | ReplyUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutCommentsInput | ReplyCreateOrConnectWithoutCommentsInput[]
    createMany?: ReplyCreateManyCommentsInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    upsert?: UsersUpsertWithoutCommentsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCommentsInput, UsersUpdateWithoutCommentsInput>, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type ProductsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ProductsCreateWithoutCommentsInput, ProductsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutCommentsInput
    upsert?: ProductsUpsertWithoutCommentsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutCommentsInput, ProductsUpdateWithoutCommentsInput>, ProductsUncheckedUpdateWithoutCommentsInput>
  }

  export type ReplyUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<ReplyCreateWithoutCommentsInput, ReplyUncheckedCreateWithoutCommentsInput> | ReplyCreateWithoutCommentsInput[] | ReplyUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutCommentsInput | ReplyCreateOrConnectWithoutCommentsInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutCommentsInput | ReplyUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: ReplyCreateManyCommentsInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutCommentsInput | ReplyUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutCommentsInput | ReplyUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type ReplyUncheckedUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<ReplyCreateWithoutCommentsInput, ReplyUncheckedCreateWithoutCommentsInput> | ReplyCreateWithoutCommentsInput[] | ReplyUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutCommentsInput | ReplyCreateOrConnectWithoutCommentsInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutCommentsInput | ReplyUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: ReplyCreateManyCommentsInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutCommentsInput | ReplyUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutCommentsInput | ReplyUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrdersCreateWithoutUserInput = {
    orderId: string
    date?: Date | string
    totalPrice?: number
    deliveryFee?: number
    paymentMethod?: string | null
    deliveryAddress?: string | null
    additionalFee?: number | null
    discountFee?: number | null
    status?: string | null
    productsOnOrders?: ProductsOnOrdersCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutUserInput = {
    orderId: string
    date?: Date | string
    totalPrice?: number
    deliveryFee?: number
    paymentMethod?: string | null
    deliveryAddress?: string | null
    additionalFee?: number | null
    discountFee?: number | null
    status?: string | null
    productsOnOrders?: ProductsOnOrdersUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[]
  }

  export type CommentCreateWithoutUserInput = {
    commentId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products: ProductsCreateNestedOneWithoutCommentsInput
    replies?: ReplyCreateNestedManyWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    commentId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: string
    replies?: ReplyUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    orderId?: StringFilter<"Orders"> | string
    date?: DateTimeFilter<"Orders"> | Date | string
    totalPrice?: FloatFilter<"Orders"> | number
    deliveryFee?: FloatFilter<"Orders"> | number
    paymentMethod?: StringNullableFilter<"Orders"> | string | null
    deliveryAddress?: StringNullableFilter<"Orders"> | string | null
    additionalFee?: FloatNullableFilter<"Orders"> | number | null
    discountFee?: FloatNullableFilter<"Orders"> | number | null
    status?: StringNullableFilter<"Orders"> | string | null
    userId?: StringNullableFilter<"Orders"> | string | null
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    commentId?: StringFilter<"Comment"> | string
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    productId?: StringFilter<"Comment"> | string
  }

  export type ProductsCreateWithoutCategoryInput = {
    productId: string
    name: string
    brand: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    images?: ProductImagesCreateNestedManyWithoutProductsInput
    moreDetails?: ProductMoreDetailsCreateNestedManyWithoutProductsInput
    productsOnOrders?: ProductsOnOrdersCreateNestedManyWithoutProductsInput
    comments?: CommentCreateNestedManyWithoutProductsInput
    variants?: ProductVariantCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutCategoryInput = {
    productId: string
    name: string
    brand: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    images?: ProductImagesUncheckedCreateNestedManyWithoutProductsInput
    moreDetails?: ProductMoreDetailsUncheckedCreateNestedManyWithoutProductsInput
    productsOnOrders?: ProductsOnOrdersUncheckedCreateNestedManyWithoutProductsInput
    comments?: CommentUncheckedCreateNestedManyWithoutProductsInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsCreateManyCategoryInputEnvelope = {
    data: ProductsCreateManyCategoryInput | ProductsCreateManyCategoryInput[]
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    productId?: StringFilter<"Products"> | string
    name?: StringFilter<"Products"> | string
    brand?: StringFilter<"Products"> | string
    categoryId?: StringFilter<"Products"> | string
    price?: FloatFilter<"Products"> | number
    variantType?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    longDescription?: StringNullableFilter<"Products"> | string | null
    discount?: FloatFilter<"Products"> | number
    code?: StringFilter<"Products"> | string
    createdAt?: DateTimeFilter<"Products"> | Date | string
  }

  export type CategoryCreateWithoutProductsInput = {
    categoryId: string
    name: string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    categoryId: string
    name: string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductImagesCreateWithoutProductsInput = {
    imageId: string
    url: string
  }

  export type ProductImagesUncheckedCreateWithoutProductsInput = {
    imageId: string
    url: string
  }

  export type ProductImagesCreateOrConnectWithoutProductsInput = {
    where: ProductImagesWhereUniqueInput
    create: XOR<ProductImagesCreateWithoutProductsInput, ProductImagesUncheckedCreateWithoutProductsInput>
  }

  export type ProductImagesCreateManyProductsInputEnvelope = {
    data: ProductImagesCreateManyProductsInput | ProductImagesCreateManyProductsInput[]
  }

  export type ProductMoreDetailsCreateWithoutProductsInput = {
    detailsId: string
    key: string
    value: string
  }

  export type ProductMoreDetailsUncheckedCreateWithoutProductsInput = {
    detailsId: string
    key: string
    value: string
  }

  export type ProductMoreDetailsCreateOrConnectWithoutProductsInput = {
    where: ProductMoreDetailsWhereUniqueInput
    create: XOR<ProductMoreDetailsCreateWithoutProductsInput, ProductMoreDetailsUncheckedCreateWithoutProductsInput>
  }

  export type ProductMoreDetailsCreateManyProductsInputEnvelope = {
    data: ProductMoreDetailsCreateManyProductsInput | ProductMoreDetailsCreateManyProductsInput[]
  }

  export type ProductsOnOrdersCreateWithoutProductsInput = {
    productsOnOrdersId: string
    quantity: number
    itemPrice: number
    variantId: string
    variantName: string
    orders: OrdersCreateNestedOneWithoutProductsOnOrdersInput
  }

  export type ProductsOnOrdersUncheckedCreateWithoutProductsInput = {
    productsOnOrdersId: string
    quantity: number
    itemPrice: number
    variantId: string
    variantName: string
    orderId: string
  }

  export type ProductsOnOrdersCreateOrConnectWithoutProductsInput = {
    where: ProductsOnOrdersWhereUniqueInput
    create: XOR<ProductsOnOrdersCreateWithoutProductsInput, ProductsOnOrdersUncheckedCreateWithoutProductsInput>
  }

  export type ProductsOnOrdersCreateManyProductsInputEnvelope = {
    data: ProductsOnOrdersCreateManyProductsInput | ProductsOnOrdersCreateManyProductsInput[]
  }

  export type CommentCreateWithoutProductsInput = {
    commentId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutCommentsInput
    replies?: ReplyCreateNestedManyWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutProductsInput = {
    commentId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    replies?: ReplyUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type CommentCreateOrConnectWithoutProductsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutProductsInput, CommentUncheckedCreateWithoutProductsInput>
  }

  export type CommentCreateManyProductsInputEnvelope = {
    data: CommentCreateManyProductsInput | CommentCreateManyProductsInput[]
  }

  export type ProductVariantCreateWithoutProductsInput = {
    variantId: string
    variantName: string
    stock: number
    price: number
  }

  export type ProductVariantUncheckedCreateWithoutProductsInput = {
    variantId: string
    variantName: string
    stock: number
    price: number
  }

  export type ProductVariantCreateOrConnectWithoutProductsInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProductsInput, ProductVariantUncheckedCreateWithoutProductsInput>
  }

  export type ProductVariantCreateManyProductsInputEnvelope = {
    data: ProductVariantCreateManyProductsInput | ProductVariantCreateManyProductsInput[]
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImagesUpsertWithWhereUniqueWithoutProductsInput = {
    where: ProductImagesWhereUniqueInput
    update: XOR<ProductImagesUpdateWithoutProductsInput, ProductImagesUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductImagesCreateWithoutProductsInput, ProductImagesUncheckedCreateWithoutProductsInput>
  }

  export type ProductImagesUpdateWithWhereUniqueWithoutProductsInput = {
    where: ProductImagesWhereUniqueInput
    data: XOR<ProductImagesUpdateWithoutProductsInput, ProductImagesUncheckedUpdateWithoutProductsInput>
  }

  export type ProductImagesUpdateManyWithWhereWithoutProductsInput = {
    where: ProductImagesScalarWhereInput
    data: XOR<ProductImagesUpdateManyMutationInput, ProductImagesUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductImagesScalarWhereInput = {
    AND?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
    OR?: ProductImagesScalarWhereInput[]
    NOT?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
    imageId?: StringFilter<"ProductImages"> | string
    url?: StringFilter<"ProductImages"> | string
    productId?: StringNullableFilter<"ProductImages"> | string | null
  }

  export type ProductMoreDetailsUpsertWithWhereUniqueWithoutProductsInput = {
    where: ProductMoreDetailsWhereUniqueInput
    update: XOR<ProductMoreDetailsUpdateWithoutProductsInput, ProductMoreDetailsUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductMoreDetailsCreateWithoutProductsInput, ProductMoreDetailsUncheckedCreateWithoutProductsInput>
  }

  export type ProductMoreDetailsUpdateWithWhereUniqueWithoutProductsInput = {
    where: ProductMoreDetailsWhereUniqueInput
    data: XOR<ProductMoreDetailsUpdateWithoutProductsInput, ProductMoreDetailsUncheckedUpdateWithoutProductsInput>
  }

  export type ProductMoreDetailsUpdateManyWithWhereWithoutProductsInput = {
    where: ProductMoreDetailsScalarWhereInput
    data: XOR<ProductMoreDetailsUpdateManyMutationInput, ProductMoreDetailsUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductMoreDetailsScalarWhereInput = {
    AND?: ProductMoreDetailsScalarWhereInput | ProductMoreDetailsScalarWhereInput[]
    OR?: ProductMoreDetailsScalarWhereInput[]
    NOT?: ProductMoreDetailsScalarWhereInput | ProductMoreDetailsScalarWhereInput[]
    detailsId?: StringFilter<"ProductMoreDetails"> | string
    productId?: StringFilter<"ProductMoreDetails"> | string
    key?: StringFilter<"ProductMoreDetails"> | string
    value?: StringFilter<"ProductMoreDetails"> | string
  }

  export type ProductsOnOrdersUpsertWithWhereUniqueWithoutProductsInput = {
    where: ProductsOnOrdersWhereUniqueInput
    update: XOR<ProductsOnOrdersUpdateWithoutProductsInput, ProductsOnOrdersUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductsOnOrdersCreateWithoutProductsInput, ProductsOnOrdersUncheckedCreateWithoutProductsInput>
  }

  export type ProductsOnOrdersUpdateWithWhereUniqueWithoutProductsInput = {
    where: ProductsOnOrdersWhereUniqueInput
    data: XOR<ProductsOnOrdersUpdateWithoutProductsInput, ProductsOnOrdersUncheckedUpdateWithoutProductsInput>
  }

  export type ProductsOnOrdersUpdateManyWithWhereWithoutProductsInput = {
    where: ProductsOnOrdersScalarWhereInput
    data: XOR<ProductsOnOrdersUpdateManyMutationInput, ProductsOnOrdersUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductsOnOrdersScalarWhereInput = {
    AND?: ProductsOnOrdersScalarWhereInput | ProductsOnOrdersScalarWhereInput[]
    OR?: ProductsOnOrdersScalarWhereInput[]
    NOT?: ProductsOnOrdersScalarWhereInput | ProductsOnOrdersScalarWhereInput[]
    productsOnOrdersId?: StringFilter<"ProductsOnOrders"> | string
    quantity?: FloatFilter<"ProductsOnOrders"> | number
    itemPrice?: FloatFilter<"ProductsOnOrders"> | number
    variantId?: StringFilter<"ProductsOnOrders"> | string
    variantName?: StringFilter<"ProductsOnOrders"> | string
    orderId?: StringFilter<"ProductsOnOrders"> | string
    productId?: StringFilter<"ProductsOnOrders"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutProductsInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutProductsInput, CommentUncheckedUpdateWithoutProductsInput>
    create: XOR<CommentCreateWithoutProductsInput, CommentUncheckedCreateWithoutProductsInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutProductsInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutProductsInput, CommentUncheckedUpdateWithoutProductsInput>
  }

  export type CommentUpdateManyWithWhereWithoutProductsInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductVariantUpsertWithWhereUniqueWithoutProductsInput = {
    where: ProductVariantWhereUniqueInput
    update: XOR<ProductVariantUpdateWithoutProductsInput, ProductVariantUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductVariantCreateWithoutProductsInput, ProductVariantUncheckedCreateWithoutProductsInput>
  }

  export type ProductVariantUpdateWithWhereUniqueWithoutProductsInput = {
    where: ProductVariantWhereUniqueInput
    data: XOR<ProductVariantUpdateWithoutProductsInput, ProductVariantUncheckedUpdateWithoutProductsInput>
  }

  export type ProductVariantUpdateManyWithWhereWithoutProductsInput = {
    where: ProductVariantScalarWhereInput
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductVariantScalarWhereInput = {
    AND?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    OR?: ProductVariantScalarWhereInput[]
    NOT?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    variantId?: StringFilter<"ProductVariant"> | string
    variantName?: StringFilter<"ProductVariant"> | string
    stock?: IntFilter<"ProductVariant"> | number
    price?: FloatFilter<"ProductVariant"> | number
    productId?: StringFilter<"ProductVariant"> | string
  }

  export type ProductsCreateWithoutVariantsInput = {
    productId: string
    name: string
    brand: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    images?: ProductImagesCreateNestedManyWithoutProductsInput
    moreDetails?: ProductMoreDetailsCreateNestedManyWithoutProductsInput
    productsOnOrders?: ProductsOnOrdersCreateNestedManyWithoutProductsInput
    comments?: CommentCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutVariantsInput = {
    productId: string
    name: string
    brand: string
    categoryId: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    images?: ProductImagesUncheckedCreateNestedManyWithoutProductsInput
    moreDetails?: ProductMoreDetailsUncheckedCreateNestedManyWithoutProductsInput
    productsOnOrders?: ProductsOnOrdersUncheckedCreateNestedManyWithoutProductsInput
    comments?: CommentUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutVariantsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutVariantsInput, ProductsUncheckedCreateWithoutVariantsInput>
  }

  export type ProductsUpsertWithoutVariantsInput = {
    update: XOR<ProductsUpdateWithoutVariantsInput, ProductsUncheckedUpdateWithoutVariantsInput>
    create: XOR<ProductsCreateWithoutVariantsInput, ProductsUncheckedCreateWithoutVariantsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutVariantsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutVariantsInput, ProductsUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductsUpdateWithoutVariantsInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    images?: ProductImagesUpdateManyWithoutProductsNestedInput
    moreDetails?: ProductMoreDetailsUpdateManyWithoutProductsNestedInput
    productsOnOrders?: ProductsOnOrdersUpdateManyWithoutProductsNestedInput
    comments?: CommentUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutVariantsInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImagesUncheckedUpdateManyWithoutProductsNestedInput
    moreDetails?: ProductMoreDetailsUncheckedUpdateManyWithoutProductsNestedInput
    productsOnOrders?: ProductsOnOrdersUncheckedUpdateManyWithoutProductsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsCreateWithoutImagesInput = {
    productId: string
    name: string
    brand: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    moreDetails?: ProductMoreDetailsCreateNestedManyWithoutProductsInput
    productsOnOrders?: ProductsOnOrdersCreateNestedManyWithoutProductsInput
    comments?: CommentCreateNestedManyWithoutProductsInput
    variants?: ProductVariantCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutImagesInput = {
    productId: string
    name: string
    brand: string
    categoryId: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    moreDetails?: ProductMoreDetailsUncheckedCreateNestedManyWithoutProductsInput
    productsOnOrders?: ProductsOnOrdersUncheckedCreateNestedManyWithoutProductsInput
    comments?: CommentUncheckedCreateNestedManyWithoutProductsInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutImagesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutImagesInput, ProductsUncheckedCreateWithoutImagesInput>
  }

  export type ProductsUpsertWithoutImagesInput = {
    update: XOR<ProductsUpdateWithoutImagesInput, ProductsUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductsCreateWithoutImagesInput, ProductsUncheckedCreateWithoutImagesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutImagesInput, ProductsUncheckedUpdateWithoutImagesInput>
  }

  export type ProductsUpdateWithoutImagesInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    moreDetails?: ProductMoreDetailsUpdateManyWithoutProductsNestedInput
    productsOnOrders?: ProductsOnOrdersUpdateManyWithoutProductsNestedInput
    comments?: CommentUpdateManyWithoutProductsNestedInput
    variants?: ProductVariantUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutImagesInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moreDetails?: ProductMoreDetailsUncheckedUpdateManyWithoutProductsNestedInput
    productsOnOrders?: ProductsOnOrdersUncheckedUpdateManyWithoutProductsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProductsNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsOnOrdersCreateWithoutOrdersInput = {
    productsOnOrdersId: string
    quantity: number
    itemPrice: number
    variantId: string
    variantName: string
    products: ProductsCreateNestedOneWithoutProductsOnOrdersInput
  }

  export type ProductsOnOrdersUncheckedCreateWithoutOrdersInput = {
    productsOnOrdersId: string
    quantity: number
    itemPrice: number
    variantId: string
    variantName: string
    productId: string
  }

  export type ProductsOnOrdersCreateOrConnectWithoutOrdersInput = {
    where: ProductsOnOrdersWhereUniqueInput
    create: XOR<ProductsOnOrdersCreateWithoutOrdersInput, ProductsOnOrdersUncheckedCreateWithoutOrdersInput>
  }

  export type ProductsOnOrdersCreateManyOrdersInputEnvelope = {
    data: ProductsOnOrdersCreateManyOrdersInput | ProductsOnOrdersCreateManyOrdersInput[]
  }

  export type UsersCreateWithoutOrdersInput = {
    userId: string
    fname: string
    lname: string
    phone: string
    address: string
    city: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    userId: string
    fname: string
    lname: string
    phone: string
    address: string
    city: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type ProductsOnOrdersUpsertWithWhereUniqueWithoutOrdersInput = {
    where: ProductsOnOrdersWhereUniqueInput
    update: XOR<ProductsOnOrdersUpdateWithoutOrdersInput, ProductsOnOrdersUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductsOnOrdersCreateWithoutOrdersInput, ProductsOnOrdersUncheckedCreateWithoutOrdersInput>
  }

  export type ProductsOnOrdersUpdateWithWhereUniqueWithoutOrdersInput = {
    where: ProductsOnOrdersWhereUniqueInput
    data: XOR<ProductsOnOrdersUpdateWithoutOrdersInput, ProductsOnOrdersUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductsOnOrdersUpdateManyWithWhereWithoutOrdersInput = {
    where: ProductsOnOrdersScalarWhereInput
    data: XOR<ProductsOnOrdersUpdateManyMutationInput, ProductsOnOrdersUncheckedUpdateManyWithoutOrdersInput>
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrdersCreateWithoutProductsOnOrdersInput = {
    orderId: string
    date?: Date | string
    totalPrice?: number
    deliveryFee?: number
    paymentMethod?: string | null
    deliveryAddress?: string | null
    additionalFee?: number | null
    discountFee?: number | null
    status?: string | null
    user?: UsersCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutProductsOnOrdersInput = {
    orderId: string
    date?: Date | string
    totalPrice?: number
    deliveryFee?: number
    paymentMethod?: string | null
    deliveryAddress?: string | null
    additionalFee?: number | null
    discountFee?: number | null
    status?: string | null
    userId?: string | null
  }

  export type OrdersCreateOrConnectWithoutProductsOnOrdersInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutProductsOnOrdersInput, OrdersUncheckedCreateWithoutProductsOnOrdersInput>
  }

  export type ProductsCreateWithoutProductsOnOrdersInput = {
    productId: string
    name: string
    brand: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    images?: ProductImagesCreateNestedManyWithoutProductsInput
    moreDetails?: ProductMoreDetailsCreateNestedManyWithoutProductsInput
    comments?: CommentCreateNestedManyWithoutProductsInput
    variants?: ProductVariantCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutProductsOnOrdersInput = {
    productId: string
    name: string
    brand: string
    categoryId: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    images?: ProductImagesUncheckedCreateNestedManyWithoutProductsInput
    moreDetails?: ProductMoreDetailsUncheckedCreateNestedManyWithoutProductsInput
    comments?: CommentUncheckedCreateNestedManyWithoutProductsInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutProductsOnOrdersInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProductsOnOrdersInput, ProductsUncheckedCreateWithoutProductsOnOrdersInput>
  }

  export type OrdersUpsertWithoutProductsOnOrdersInput = {
    update: XOR<OrdersUpdateWithoutProductsOnOrdersInput, OrdersUncheckedUpdateWithoutProductsOnOrdersInput>
    create: XOR<OrdersCreateWithoutProductsOnOrdersInput, OrdersUncheckedCreateWithoutProductsOnOrdersInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutProductsOnOrdersInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutProductsOnOrdersInput, OrdersUncheckedUpdateWithoutProductsOnOrdersInput>
  }

  export type OrdersUpdateWithoutProductsOnOrdersInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    additionalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutProductsOnOrdersInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    additionalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductsUpsertWithoutProductsOnOrdersInput = {
    update: XOR<ProductsUpdateWithoutProductsOnOrdersInput, ProductsUncheckedUpdateWithoutProductsOnOrdersInput>
    create: XOR<ProductsCreateWithoutProductsOnOrdersInput, ProductsUncheckedCreateWithoutProductsOnOrdersInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutProductsOnOrdersInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutProductsOnOrdersInput, ProductsUncheckedUpdateWithoutProductsOnOrdersInput>
  }

  export type ProductsUpdateWithoutProductsOnOrdersInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    images?: ProductImagesUpdateManyWithoutProductsNestedInput
    moreDetails?: ProductMoreDetailsUpdateManyWithoutProductsNestedInput
    comments?: CommentUpdateManyWithoutProductsNestedInput
    variants?: ProductVariantUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProductsOnOrdersInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImagesUncheckedUpdateManyWithoutProductsNestedInput
    moreDetails?: ProductMoreDetailsUncheckedUpdateManyWithoutProductsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProductsNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsCreateWithoutMoreDetailsInput = {
    productId: string
    name: string
    brand: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    images?: ProductImagesCreateNestedManyWithoutProductsInput
    productsOnOrders?: ProductsOnOrdersCreateNestedManyWithoutProductsInput
    comments?: CommentCreateNestedManyWithoutProductsInput
    variants?: ProductVariantCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutMoreDetailsInput = {
    productId: string
    name: string
    brand: string
    categoryId: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    images?: ProductImagesUncheckedCreateNestedManyWithoutProductsInput
    productsOnOrders?: ProductsOnOrdersUncheckedCreateNestedManyWithoutProductsInput
    comments?: CommentUncheckedCreateNestedManyWithoutProductsInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutMoreDetailsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutMoreDetailsInput, ProductsUncheckedCreateWithoutMoreDetailsInput>
  }

  export type ProductsUpsertWithoutMoreDetailsInput = {
    update: XOR<ProductsUpdateWithoutMoreDetailsInput, ProductsUncheckedUpdateWithoutMoreDetailsInput>
    create: XOR<ProductsCreateWithoutMoreDetailsInput, ProductsUncheckedCreateWithoutMoreDetailsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutMoreDetailsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutMoreDetailsInput, ProductsUncheckedUpdateWithoutMoreDetailsInput>
  }

  export type ProductsUpdateWithoutMoreDetailsInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    images?: ProductImagesUpdateManyWithoutProductsNestedInput
    productsOnOrders?: ProductsOnOrdersUpdateManyWithoutProductsNestedInput
    comments?: CommentUpdateManyWithoutProductsNestedInput
    variants?: ProductVariantUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutMoreDetailsInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImagesUncheckedUpdateManyWithoutProductsNestedInput
    productsOnOrders?: ProductsOnOrdersUncheckedUpdateManyWithoutProductsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProductsNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type UsersCreateWithoutCommentsInput = {
    userId: string
    fname: string
    lname: string
    phone: string
    address: string
    city: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    orders?: OrdersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCommentsInput = {
    userId: string
    fname: string
    lname: string
    phone: string
    address: string
    city: string
    email: string
    password: string
    image?: string | null
    createdAt?: Date | string
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCommentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
  }

  export type ProductsCreateWithoutCommentsInput = {
    productId: string
    name: string
    brand: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    images?: ProductImagesCreateNestedManyWithoutProductsInput
    moreDetails?: ProductMoreDetailsCreateNestedManyWithoutProductsInput
    productsOnOrders?: ProductsOnOrdersCreateNestedManyWithoutProductsInput
    variants?: ProductVariantCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutCommentsInput = {
    productId: string
    name: string
    brand: string
    categoryId: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
    images?: ProductImagesUncheckedCreateNestedManyWithoutProductsInput
    moreDetails?: ProductMoreDetailsUncheckedCreateNestedManyWithoutProductsInput
    productsOnOrders?: ProductsOnOrdersUncheckedCreateNestedManyWithoutProductsInput
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutCommentsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCommentsInput, ProductsUncheckedCreateWithoutCommentsInput>
  }

  export type ReplyCreateWithoutCommentsInput = {
    replyId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string
    image?: string | null
  }

  export type ReplyUncheckedCreateWithoutCommentsInput = {
    replyId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string
    image?: string | null
  }

  export type ReplyCreateOrConnectWithoutCommentsInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutCommentsInput, ReplyUncheckedCreateWithoutCommentsInput>
  }

  export type ReplyCreateManyCommentsInputEnvelope = {
    data: ReplyCreateManyCommentsInput | ReplyCreateManyCommentsInput[]
  }

  export type UsersUpsertWithoutCommentsInput = {
    update: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateWithoutCommentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCommentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductsUpsertWithoutCommentsInput = {
    update: XOR<ProductsUpdateWithoutCommentsInput, ProductsUncheckedUpdateWithoutCommentsInput>
    create: XOR<ProductsCreateWithoutCommentsInput, ProductsUncheckedCreateWithoutCommentsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutCommentsInput, ProductsUncheckedUpdateWithoutCommentsInput>
  }

  export type ProductsUpdateWithoutCommentsInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    images?: ProductImagesUpdateManyWithoutProductsNestedInput
    moreDetails?: ProductMoreDetailsUpdateManyWithoutProductsNestedInput
    productsOnOrders?: ProductsOnOrdersUpdateManyWithoutProductsNestedInput
    variants?: ProductVariantUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCommentsInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImagesUncheckedUpdateManyWithoutProductsNestedInput
    moreDetails?: ProductMoreDetailsUncheckedUpdateManyWithoutProductsNestedInput
    productsOnOrders?: ProductsOnOrdersUncheckedUpdateManyWithoutProductsNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ReplyUpsertWithWhereUniqueWithoutCommentsInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutCommentsInput, ReplyUncheckedUpdateWithoutCommentsInput>
    create: XOR<ReplyCreateWithoutCommentsInput, ReplyUncheckedCreateWithoutCommentsInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutCommentsInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutCommentsInput, ReplyUncheckedUpdateWithoutCommentsInput>
  }

  export type ReplyUpdateManyWithWhereWithoutCommentsInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutCommentsInput>
  }

  export type ReplyScalarWhereInput = {
    AND?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
    OR?: ReplyScalarWhereInput[]
    NOT?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
    replyId?: StringFilter<"Reply"> | string
    body?: StringFilter<"Reply"> | string
    createdAt?: DateTimeFilter<"Reply"> | Date | string
    updatedAt?: DateTimeFilter<"Reply"> | Date | string
    name?: StringFilter<"Reply"> | string
    image?: StringNullableFilter<"Reply"> | string | null
    commentId?: StringNullableFilter<"Reply"> | string | null
  }

  export type CommentCreateWithoutRepliesInput = {
    commentId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutCommentsInput
    products: ProductsCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    commentId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    productId: string
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
    products?: ProductsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersCreateManyUserInput = {
    orderId: string
    date?: Date | string
    totalPrice?: number
    deliveryFee?: number
    paymentMethod?: string | null
    deliveryAddress?: string | null
    additionalFee?: number | null
    discountFee?: number | null
    status?: string | null
  }

  export type CommentCreateManyUserInput = {
    commentId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: string
  }

  export type OrdersUpdateWithoutUserInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    additionalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    productsOnOrders?: ProductsOnOrdersUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUserInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    additionalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    productsOnOrders?: ProductsOnOrdersUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    additionalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpdateWithoutUserInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUpdateOneRequiredWithoutCommentsNestedInput
    replies?: ReplyUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    replies?: ReplyUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsCreateManyCategoryInput = {
    productId: string
    name: string
    brand: string
    price: number
    variantType?: string
    description?: string | null
    longDescription?: string | null
    discount: number
    code: string
    createdAt?: Date | string
  }

  export type ProductsUpdateWithoutCategoryInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImagesUpdateManyWithoutProductsNestedInput
    moreDetails?: ProductMoreDetailsUpdateManyWithoutProductsNestedInput
    productsOnOrders?: ProductsOnOrdersUpdateManyWithoutProductsNestedInput
    comments?: CommentUpdateManyWithoutProductsNestedInput
    variants?: ProductVariantUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoryInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImagesUncheckedUpdateManyWithoutProductsNestedInput
    moreDetails?: ProductMoreDetailsUncheckedUpdateManyWithoutProductsNestedInput
    productsOnOrders?: ProductsOnOrdersUncheckedUpdateManyWithoutProductsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProductsNestedInput
    variants?: ProductVariantUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    variantType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImagesCreateManyProductsInput = {
    imageId: string
    url: string
  }

  export type ProductMoreDetailsCreateManyProductsInput = {
    detailsId: string
    key: string
    value: string
  }

  export type ProductsOnOrdersCreateManyProductsInput = {
    productsOnOrdersId: string
    quantity: number
    itemPrice: number
    variantId: string
    variantName: string
    orderId: string
  }

  export type CommentCreateManyProductsInput = {
    commentId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ProductVariantCreateManyProductsInput = {
    variantId: string
    variantName: string
    stock: number
    price: number
  }

  export type ProductImagesUpdateWithoutProductsInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImagesUncheckedUpdateWithoutProductsInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImagesUncheckedUpdateManyWithoutProductsInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductMoreDetailsUpdateWithoutProductsInput = {
    detailsId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductMoreDetailsUncheckedUpdateWithoutProductsInput = {
    detailsId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductMoreDetailsUncheckedUpdateManyWithoutProductsInput = {
    detailsId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsOnOrdersUpdateWithoutProductsInput = {
    productsOnOrdersId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    itemPrice?: FloatFieldUpdateOperationsInput | number
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUpdateOneRequiredWithoutProductsOnOrdersNestedInput
  }

  export type ProductsOnOrdersUncheckedUpdateWithoutProductsInput = {
    productsOnOrdersId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    itemPrice?: FloatFieldUpdateOperationsInput | number
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsOnOrdersUncheckedUpdateManyWithoutProductsInput = {
    productsOnOrdersId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    itemPrice?: FloatFieldUpdateOperationsInput | number
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutProductsInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
    replies?: ReplyUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutProductsInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    replies?: ReplyUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutProductsInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantUpdateWithoutProductsInput = {
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductVariantUncheckedUpdateWithoutProductsInput = {
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductsInput = {
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductsOnOrdersCreateManyOrdersInput = {
    productsOnOrdersId: string
    quantity: number
    itemPrice: number
    variantId: string
    variantName: string
    productId: string
  }

  export type ProductsOnOrdersUpdateWithoutOrdersInput = {
    productsOnOrdersId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    itemPrice?: FloatFieldUpdateOperationsInput | number
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    products?: ProductsUpdateOneRequiredWithoutProductsOnOrdersNestedInput
  }

  export type ProductsOnOrdersUncheckedUpdateWithoutOrdersInput = {
    productsOnOrdersId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    itemPrice?: FloatFieldUpdateOperationsInput | number
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsOnOrdersUncheckedUpdateManyWithoutOrdersInput = {
    productsOnOrdersId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    itemPrice?: FloatFieldUpdateOperationsInput | number
    variantId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyCreateManyCommentsInput = {
    replyId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string
    image?: string | null
  }

  export type ReplyUpdateWithoutCommentsInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReplyUncheckedUpdateWithoutCommentsInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReplyUncheckedUpdateManyWithoutCommentsInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}