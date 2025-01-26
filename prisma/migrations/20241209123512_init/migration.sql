/*
  Warnings:

  - The primary key for the `ProductMoreDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductMoreDetails" (
    "detailsId" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "ProductMoreDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ProductMoreDetails" ("detailsId", "key", "productId", "value") SELECT "detailsId", "key", "productId", "value" FROM "ProductMoreDetails";
DROP TABLE "ProductMoreDetails";
ALTER TABLE "new_ProductMoreDetails" RENAME TO "ProductMoreDetails";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
