/*
  Warnings:

  - Added the required column `paymentMethod` to the `OrderTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrderTransaction" (
    "transactionId" TEXT NOT NULL PRIMARY KEY,
    "data" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paid" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_OrderTransaction" ("data", "date", "paid", "transactionId") SELECT "data", "date", "paid", "transactionId" FROM "OrderTransaction";
DROP TABLE "OrderTransaction";
ALTER TABLE "new_OrderTransaction" RENAME TO "OrderTransaction";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
