/*
  Warnings:

  - The primary key for the `OrdersOnProducts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `productId` on table `OrdersOnProducts` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrdersOnProducts" (
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" REAL NOT NULL,
    "itemPrice" REAL NOT NULL,

    PRIMARY KEY ("orderId", "productId"),
    CONSTRAINT "OrdersOnProducts_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders" ("orderId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrdersOnProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrdersOnProducts" ("itemPrice", "orderId", "productId", "quantity") SELECT "itemPrice", "orderId", "productId", "quantity" FROM "OrdersOnProducts";
DROP TABLE "OrdersOnProducts";
ALTER TABLE "new_OrdersOnProducts" RENAME TO "OrdersOnProducts";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
