/*
  Warnings:

  - The primary key for the `ProductsOnOrders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `productsOnOrdersId` to the `ProductsOnOrders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductsOnOrders" (
    "productsOnOrdersId" TEXT NOT NULL PRIMARY KEY,
    "quantity" REAL NOT NULL,
    "itemPrice" REAL NOT NULL,
    "variantId" TEXT NOT NULL,
    "variantName" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    CONSTRAINT "ProductsOnOrders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders" ("orderId") ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT "ProductsOnOrders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE NO ACTION ON UPDATE CASCADE
);
INSERT INTO "new_ProductsOnOrders" ("itemPrice", "orderId", "productId", "quantity", "variantId", "variantName") SELECT "itemPrice", "orderId", "productId", "quantity", "variantId", "variantName" FROM "ProductsOnOrders";
DROP TABLE "ProductsOnOrders";
ALTER TABLE "new_ProductsOnOrders" RENAME TO "ProductsOnOrders";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
