-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductImages" (
    "imageId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "productId" TEXT,
    CONSTRAINT "ProductImages_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ProductImages" ("imageId", "name") SELECT "imageId", "name" FROM "ProductImages";
DROP TABLE "ProductImages";
ALTER TABLE "new_ProductImages" RENAME TO "ProductImages";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
