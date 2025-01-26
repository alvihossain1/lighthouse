/*
  Warnings:

  - You are about to drop the column `category` on the `Category` table. All the data in the column will be lost.
  - The primary key for the `OrdersOnProducts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `categoryName` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "MoreProductDetails" (
    "detailsId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "key" TEXT,
    "value" TEXT,

    PRIMARY KEY ("detailsId", "productId"),
    CONSTRAINT "MoreProductDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "categoryId" TEXT NOT NULL PRIMARY KEY,
    "categoryName" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    CONSTRAINT "Category_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Category" ("categoryId", "productId") SELECT "categoryId", "productId" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE UNIQUE INDEX "Category_productId_key" ON "Category"("productId");
CREATE TABLE "new_OrdersOnProducts" (
    "orderId" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT,
    "quantity" REAL NOT NULL,
    "itemPrice" REAL NOT NULL,
    CONSTRAINT "OrdersOnProducts_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders" ("orderId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrdersOnProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_OrdersOnProducts" ("itemPrice", "orderId", "productId", "quantity") SELECT "itemPrice", "orderId", "productId", "quantity" FROM "OrdersOnProducts";
DROP TABLE "OrdersOnProducts";
ALTER TABLE "new_OrdersOnProducts" RENAME TO "OrdersOnProducts";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
