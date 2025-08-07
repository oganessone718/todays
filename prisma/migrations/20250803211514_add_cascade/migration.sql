-- DropForeignKey
ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_todayId_fkey";

-- DropForeignKey
ALTER TABLE "public"."FriendsGroup" DROP CONSTRAINT "FriendsGroup_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."GroupFriend" DROP CONSTRAINT "GroupFriend_friendId_fkey";

-- DropForeignKey
ALTER TABLE "public"."GroupFriend" DROP CONSTRAINT "GroupFriend_friendsGroupId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Reaction" DROP CONSTRAINT "Reaction_todayId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Tag" DROP CONSTRAINT "Tag_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Today" DROP CONSTRAINT "Today_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TodayMentionUser" DROP CONSTRAINT "TodayMentionUser_mentionedUserId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TodayMentionUser" DROP CONSTRAINT "TodayMentionUser_todayId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TodayTag" DROP CONSTRAINT "TodayTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TodayTag" DROP CONSTRAINT "TodayTag_todayId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TodayVisibleFriendsGroup" DROP CONSTRAINT "TodayVisibleFriendsGroup_friendsGroupId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TodayVisibleFriendsGroup" DROP CONSTRAINT "TodayVisibleFriendsGroup_todayId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TodayVisibleUser" DROP CONSTRAINT "TodayVisibleUser_todayId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TodayVisibleUser" DROP CONSTRAINT "TodayVisibleUser_visibleUserId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Today" ADD CONSTRAINT "Today_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TodayTag" ADD CONSTRAINT "TodayTag_todayId_fkey" FOREIGN KEY ("todayId") REFERENCES "public"."Today"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TodayTag" ADD CONSTRAINT "TodayTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TodayMentionUser" ADD CONSTRAINT "TodayMentionUser_todayId_fkey" FOREIGN KEY ("todayId") REFERENCES "public"."Today"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TodayMentionUser" ADD CONSTRAINT "TodayMentionUser_mentionedUserId_fkey" FOREIGN KEY ("mentionedUserId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TodayVisibleUser" ADD CONSTRAINT "TodayVisibleUser_todayId_fkey" FOREIGN KEY ("todayId") REFERENCES "public"."Today"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TodayVisibleUser" ADD CONSTRAINT "TodayVisibleUser_visibleUserId_fkey" FOREIGN KEY ("visibleUserId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TodayVisibleFriendsGroup" ADD CONSTRAINT "TodayVisibleFriendsGroup_todayId_fkey" FOREIGN KEY ("todayId") REFERENCES "public"."Today"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TodayVisibleFriendsGroup" ADD CONSTRAINT "TodayVisibleFriendsGroup_friendsGroupId_fkey" FOREIGN KEY ("friendsGroupId") REFERENCES "public"."FriendsGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Tag" ADD CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_todayId_fkey" FOREIGN KEY ("todayId") REFERENCES "public"."Today"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reaction" ADD CONSTRAINT "Reaction_todayId_fkey" FOREIGN KEY ("todayId") REFERENCES "public"."Today"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FriendsGroup" ADD CONSTRAINT "FriendsGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GroupFriend" ADD CONSTRAINT "GroupFriend_friendsGroupId_fkey" FOREIGN KEY ("friendsGroupId") REFERENCES "public"."FriendsGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GroupFriend" ADD CONSTRAINT "GroupFriend_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
