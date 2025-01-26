-- AlterTable
ALTER TABLE "Orders" ADD COLUMN "deliveryAddress" TEXT;
ALTER TABLE "Orders" ADD COLUMN "paymentMethod" TEXT;

-- CreateTable
CREATE TABLE "Variant" (
    "variantId" TEXT NOT NULL PRIMARY KEY,
    "variantName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProductVariant" (
    "variantId" TEXT NOT NULL PRIMARY KEY,
    "variantName" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "productId" TEXT NOT NULL,
    CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("productId") ON DELETE CASCADE ON UPDATE CASCADE
);
