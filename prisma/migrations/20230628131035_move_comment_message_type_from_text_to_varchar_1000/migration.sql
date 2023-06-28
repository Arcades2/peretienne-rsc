/*
  Warnings:

  - You are about to alter the column `message` on the `Comment` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1000)`.

*/
-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "message" SET DATA TYPE VARCHAR(1000);
