/*
  Warnings:

  - The primary key for the `ProductsOnOrders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `productsOnOrdersId` on the `ProductsOnOrders` table. All the data in the column will be lost.
  - Made the column `variantId` on table `ProductsOnOrders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `variantName` on table `ProductsOnOrders` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductsOnOrders" (
    "quantity" REAL NOT NULL,
    "itemPrice" REAL NOT NULL,
    "variantId" TEXT NOT NULL,
    "variantName" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    PRIMARY KEY ("orderId", "productId", "variantId"),
    CONSTRAINT "ProductsOnOrders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders" ("orderId") ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT "ProductsOnOrders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE NO ACTION ON UPDATE CASCADE
);
INSERT INTO "new_ProductsOnOrders" ("itemPrice", "orderId", "productId", "quantity", "variantId", "variantName") SELECT "itemPrice", "orderId", "productId", "quantity", "variantId", "variantName" FROM "ProductsOnOrders";
DROP TABLE "ProductsOnOrders";
ALTER TABLE "new_ProductsOnOrders" RENAME TO "ProductsOnOrders";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
