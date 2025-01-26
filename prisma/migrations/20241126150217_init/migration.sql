/*
  Warnings:

  - You are about to drop the `MoreProductDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MoreProductDetails";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ProductMoreDetails" (
    "detailsId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    PRIMARY KEY ("detailsId", "productId"),
    CONSTRAINT "ProductMoreDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE RESTRICT ON UPDATE CASCADE
);
