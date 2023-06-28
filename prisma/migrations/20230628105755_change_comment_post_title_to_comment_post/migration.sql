/*
  Warnings:

  - You are about to drop the column `postTitle` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `post` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "postTitle",
ADD COLUMN     "post" TEXT NOT NULL;
