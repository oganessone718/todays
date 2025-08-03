-- CreateTable
CREATE TABLE "public"."TodayVisibleFriendsGroup" (
    "id" TEXT NOT NULL,
    "todayId" TEXT NOT NULL,
    "friendsGroupId" TEXT NOT NULL,

    CONSTRAINT "TodayVisibleFriendsGroup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."TodayVisibleFriendsGroup" ADD CONSTRAINT "TodayVisibleFriendsGroup_todayId_fkey" FOREIGN KEY ("todayId") REFERENCES "public"."Today"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TodayVisibleFriendsGroup" ADD CONSTRAINT "TodayVisibleFriendsGroup_friendsGroupId_fkey" FOREIGN KEY ("friendsGroupId") REFERENCES "public"."FriendsGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
