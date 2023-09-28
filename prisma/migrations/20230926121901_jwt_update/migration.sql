-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserJWT" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT NOT NULL,
    "finalname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createcAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_UserJWT" ("createcAt", "deletedAt", "email", "finalname", "firstname", "id", "password", "updatedAt") SELECT "createcAt", "deletedAt", "email", "finalname", "firstname", "id", "password", "updatedAt" FROM "UserJWT";
DROP TABLE "UserJWT";
ALTER TABLE "new_UserJWT" RENAME TO "UserJWT";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
