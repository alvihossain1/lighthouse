/*
  Warnings:

  - Added the required column `category` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "categoryId" TEXT NOT NULL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    CONSTRAINT "Category_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Category" ("categoryId", "productId") SELECT "categoryId", "productId" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE UNIQUE INDEX "Category_productId_key" ON "Category"("productId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
