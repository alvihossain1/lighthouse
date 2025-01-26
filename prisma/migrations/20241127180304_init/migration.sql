-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Orders" (
    "orderId" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalPrice" REAL NOT NULL DEFAULT 0,
    "deliveryFee" REAL NOT NULL DEFAULT 0,
    "additionalFee" REAL,
    "discountFee" REAL,
    "userId" TEXT,
    CONSTRAINT "Orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("userId") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Orders" ("additionalFee", "date", "deliveryFee", "discountFee", "orderId", "totalPrice") SELECT "additionalFee", "date", "deliveryFee", "discountFee", "orderId", "totalPrice" FROM "Orders";
DROP TABLE "Orders";
ALTER TABLE "new_Orders" RENAME TO "Orders";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
