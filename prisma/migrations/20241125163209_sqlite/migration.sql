-- CreateTable
CREATE TABLE "Products" (
    "productId" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "ratings" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "code" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProductImages" (
    "imageId" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
