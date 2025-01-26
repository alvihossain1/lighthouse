-- AlterTable
ALTER TABLE "OrderTransaction" ADD COLUMN "paymentConfirmData" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "productId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "variantType" TEXT NOT NULL DEFAULT 'Variant',
    "description" TEXT,
    "longDescription" TEXT,
    "discount" REAL NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Products" ("brand", "categoryId", "code", "createdAt", "description", "discount", "longDescription", "name", "price", "productId", "variantType") SELECT "brand", "categoryId", "code", "createdAt", "description", "discount", "longDescription", "name", "price", "productId", coalesce("variantType", 'Variant') AS "variantType" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
