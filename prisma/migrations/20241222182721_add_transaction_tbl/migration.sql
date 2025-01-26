-- CreateTable
CREATE TABLE "OrderTransaction" (
    "transactionId" TEXT NOT NULL PRIMARY KEY,
    "data" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paid" BOOLEAN NOT NULL DEFAULT false
);
