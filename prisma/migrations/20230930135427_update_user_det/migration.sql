/*
  Warnings:

  - Added the required column `phone` to the `userDet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userDet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userCabId" INTEGER,
    "description" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    CONSTRAINT "userDet_userCabId_fkey" FOREIGN KEY ("userCabId") REFERENCES "userCab" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_userDet" ("description", "id", "userCabId") SELECT "description", "id", "userCabId" FROM "userDet";
DROP TABLE "userDet";
ALTER TABLE "new_userDet" RENAME TO "userDet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
