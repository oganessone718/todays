/*
  Warnings:

  - Added the required column `description` to the `FriendsGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."FriendsGroup" ADD COLUMN     "description" TEXT NOT NULL;
