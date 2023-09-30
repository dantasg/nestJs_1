-- CreateTable
CREATE TABLE "userCab" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT NOT NULL,
    "finalname" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "userDet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userCabId" INTEGER,
    "description" TEXT NOT NULL,
    CONSTRAINT "userDet_userCabId_fkey" FOREIGN KEY ("userCabId") REFERENCES "userCab" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
