-- CreateTable
CREATE TABLE `Admin` (
    `adminId` VARCHAR(191) NOT NULL,
    `fname` VARCHAR(191) NOT NULL,
    `lname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Admin_email_key`(`email`),
    PRIMARY KEY (`adminId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `userId` VARCHAR(191) NOT NULL,
    `fname` VARCHAR(191) NOT NULL,
    `lname` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categories` (
    `categoryId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Variants` (
    `variantId` VARCHAR(191) NOT NULL,
    `variantName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`variantId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `productId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `variantType` VARCHAR(191) NOT NULL DEFAULT 'Variant',
    `description` VARCHAR(191) NULL,
    `longDescription` VARCHAR(191) NULL,
    `discount` DOUBLE NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductVariants` (
    `variantId` VARCHAR(191) NOT NULL,
    `variantName` VARCHAR(191) NOT NULL,
    `stock` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `productId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`variantId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductImages` (
    `imageId` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NULL,

    PRIMARY KEY (`imageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `orderId` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `totalPrice` DOUBLE NOT NULL DEFAULT 0,
    `deliveryFee` DOUBLE NOT NULL DEFAULT 0,
    `paymentMethod` VARCHAR(191) NULL,
    `deliveryAddress` VARCHAR(191) NULL,
    `additionalFee` DOUBLE NULL,
    `discountFee` DOUBLE NULL,
    `status` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NULL,

    PRIMARY KEY (`orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductsOnOrders` (
    `productsOnOrdersId` VARCHAR(191) NOT NULL,
    `quantity` DOUBLE NOT NULL,
    `itemPrice` DOUBLE NOT NULL,
    `variantId` VARCHAR(191) NOT NULL,
    `variantName` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`productsOnOrdersId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductMoreDetails` (
    `detailsId` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `detailKey` VARCHAR(191) NOT NULL,
    `detailValue` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`detailsId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comments` (
    `commentId` VARCHAR(191) NOT NULL,
    `body` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`commentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Replies` (
    `replyId` VARCHAR(191) NOT NULL,
    `body` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL DEFAULT 'LightHousebd',
    `image` VARCHAR(191) NULL,
    `commentId` VARCHAR(191) NULL,

    PRIMARY KEY (`replyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderTransactions` (
    `transactionId` VARCHAR(191) NOT NULL,
    `data` VARCHAR(191) NOT NULL,
    `paymentConfirmData` VARCHAR(191) NULL,
    `paymentMethod` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `paid` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`transactionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Categories`(`categoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductVariants` ADD CONSTRAINT `ProductVariants_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductImages` ADD CONSTRAINT `ProductImages_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`userId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsOnOrders` ADD CONSTRAINT `ProductsOnOrders_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Orders`(`orderId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsOnOrders` ADD CONSTRAINT `ProductsOnOrders_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`productId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductMoreDetails` ADD CONSTRAINT `ProductMoreDetails_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comments` ADD CONSTRAINT `Comments_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comments` ADD CONSTRAINT `Comments_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Replies` ADD CONSTRAINT `Replies_commentId_fkey` FOREIGN KEY (`commentId`) REFERENCES `Comments`(`commentId`) ON DELETE CASCADE ON UPDATE CASCADE;
