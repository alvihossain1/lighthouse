/*
  Warnings:

  - You are about to drop the `OrdersOnProducts` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `key` on table `MoreProductDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `value` on table `MoreProductDetails` required. This step will fail if there are existing NULL values in that column.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "OrdersOnProducts";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ProductsOnOrders" (
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" REAL NOT NULL,
    "itemPrice" REAL NOT NULL,

    PRIMARY KEY ("orderId", "productId"),
    CONSTRAINT "ProductsOnOrders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders" ("orderId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductsOnOrders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MoreProductDetails" (
    "detailsId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    PRIMARY KEY ("detailsId", "productId"),
    CONSTRAINT "MoreProductDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MoreProductDetails" ("detailsId", "key", "productId", "value") SELECT "detailsId", "key", "productId", "value" FROM "MoreProductDetails";
DROP TABLE "MoreProductDetails";
ALTER TABLE "new_MoreProductDetails" RENAME TO "MoreProductDetails";
CREATE TABLE "new_Orders" (
    "orderId" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalPrice" REAL NOT NULL DEFAULT 0,
    "deliveryFee" REAL NOT NULL DEFAULT 0,
    "additionalFee" REAL,
    "discountFee" REAL
);
INSERT INTO "new_Orders" ("additionalFee", "date", "deliveryFee", "orderId", "totalPrice") SELECT "additionalFee", "date", "deliveryFee", "orderId", "totalPrice" FROM "Orders";
DROP TABLE "Orders";
ALTER TABLE "new_Orders" RENAME TO "Orders";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
