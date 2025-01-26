/*
  Warnings:

  - The primary key for the `ProductsOnOrders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `productsOnOrdersId` to the `ProductsOnOrders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductVariant" (
    "variantId" TEXT NOT NULL PRIMARY KEY,
    "variantName" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "productId" TEXT,
    CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ProductVariant" ("price", "productId", "quantity", "stock", "variantId", "variantName") SELECT "price", "productId", "quantity", "stock", "variantId", "variantName" FROM "ProductVariant";
DROP TABLE "ProductVariant";
ALTER TABLE "new_ProductVariant" RENAME TO "ProductVariant";
CREATE TABLE "new_Products" (
    "productId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT,
    "longDescription" TEXT,
    "stock" INTEGER NOT NULL,
    "ratings" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Products" ("brand", "categoryId", "code", "createdAt", "description", "discount", "name", "price", "productId", "ratings", "stock") SELECT "brand", "categoryId", "code", "createdAt", "description", "discount", "name", "price", "productId", "ratings", "stock" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
CREATE TABLE "new_ProductsOnOrders" (
    "productsOnOrdersId" TEXT NOT NULL PRIMARY KEY,
    "quantity" REAL NOT NULL,
    "itemPrice" REAL NOT NULL,
    "variantId" TEXT,
    "variantName" TEXT,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    CONSTRAINT "ProductsOnOrders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders" ("orderId") ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT "ProductsOnOrders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE NO ACTION ON UPDATE CASCADE
);
INSERT INTO "new_ProductsOnOrders" ("itemPrice", "orderId", "productId", "quantity") SELECT "itemPrice", "orderId", "productId", "quantity" FROM "ProductsOnOrders";
DROP TABLE "ProductsOnOrders";
ALTER TABLE "new_ProductsOnOrders" RENAME TO "ProductsOnOrders";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
