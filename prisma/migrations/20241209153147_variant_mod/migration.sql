/*
  Warnings:

  - You are about to drop the column `quantity` on the `ProductVariant` table. All the data in the column will be lost.
  - You are about to drop the column `ratings` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Products` table. All the data in the column will be lost.
  - Made the column `productId` on table `ProductVariant` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductVariant" (
    "variantId" TEXT NOT NULL PRIMARY KEY,
    "variantName" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "productId" TEXT NOT NULL,
    CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ProductVariant" ("price", "productId", "stock", "variantId", "variantName") SELECT "price", "productId", "stock", "variantId", "variantName" FROM "ProductVariant";
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
    "discount" REAL NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Products" ("brand", "categoryId", "code", "createdAt", "description", "discount", "longDescription", "name", "price", "productId") SELECT "brand", "categoryId", "code", "createdAt", "description", "discount", "longDescription", "name", "price", "productId" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
