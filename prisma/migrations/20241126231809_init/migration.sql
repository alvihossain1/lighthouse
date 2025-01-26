-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductImages" (
    "imageId" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "productId" TEXT,
    CONSTRAINT "ProductImages_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ProductImages" ("imageId", "productId", "url") SELECT "imageId", "productId", "url" FROM "ProductImages";
DROP TABLE "ProductImages";
ALTER TABLE "new_ProductImages" RENAME TO "ProductImages";
CREATE TABLE "new_ProductMoreDetails" (
    "detailsId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    PRIMARY KEY ("detailsId", "productId"),
    CONSTRAINT "ProductMoreDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ProductMoreDetails" ("detailsId", "key", "productId", "value") SELECT "detailsId", "key", "productId", "value" FROM "ProductMoreDetails";
DROP TABLE "ProductMoreDetails";
ALTER TABLE "new_ProductMoreDetails" RENAME TO "ProductMoreDetails";
CREATE TABLE "new_ProductsOnOrders" (
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" REAL NOT NULL,
    "itemPrice" REAL NOT NULL,

    PRIMARY KEY ("orderId", "productId"),
    CONSTRAINT "ProductsOnOrders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders" ("orderId") ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT "ProductsOnOrders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE NO ACTION ON UPDATE CASCADE
);
INSERT INTO "new_ProductsOnOrders" ("itemPrice", "orderId", "productId", "quantity") SELECT "itemPrice", "orderId", "productId", "quantity" FROM "ProductsOnOrders";
DROP TABLE "ProductsOnOrders";
ALTER TABLE "new_ProductsOnOrders" RENAME TO "ProductsOnOrders";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
