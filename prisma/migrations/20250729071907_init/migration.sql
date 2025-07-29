-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "userId" VARCHAR(20) NOT NULL,
    "password" TEXT,
    "nickname" VARCHAR(12) NOT NULL,
    "introduction" VARCHAR(200),
    "diaryName" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Today" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" VARCHAR(20) NOT NULL,
    "emojiUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Today_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TodayTag" (
    "id" TEXT NOT NULL,
    "todayId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "TodayTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TodayMentionUser" (
    "id" TEXT NOT NULL,
    "todayId" TEXT NOT NULL,
    "mentionedUserId" TEXT NOT NULL,

    CONSTRAINT "TodayMentionUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TodayVisibleUser" (
    "id" TEXT NOT NULL,
    "todayId" TEXT NOT NULL,
    "visibleUserId" TEXT NOT NULL,

    CONSTRAINT "TodayVisibleUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "todayId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "parentCommentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "todayId" TEXT NOT NULL,
    "emojiUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Friendship" (
    "id" TEXT NOT NULL,
    "user1Id" TEXT NOT NULL,
    "user2Id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Friendship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FriendsGroup" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "FriendsGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupFriend" (
    "id" TEXT NOT NULL,
    "friendsGroupId" TEXT NOT NULL,
    "friendId" TEXT NOT NULL,

    CONSTRAINT "GroupFriend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "actorUserId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Friendship_user1Id_user2Id_key" ON "Friendship"("user1Id", "user2Id");

-- AddForeignKey
ALTER TABLE "Today" ADD CONSTRAINT "Today_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TodayTag" ADD CONSTRAINT "TodayTag_todayId_fkey" FOREIGN KEY ("todayId") REFERENCES "Today"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TodayTag" ADD CONSTRAINT "TodayTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TodayMentionUser" ADD CONSTRAINT "TodayMentionUser_todayId_fkey" FOREIGN KEY ("todayId") REFERENCES "Today"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TodayMentionUser" ADD CONSTRAINT "TodayMentionUser_mentionedUserId_fkey" FOREIGN KEY ("mentionedUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TodayVisibleUser" ADD CONSTRAINT "TodayVisibleUser_todayId_fkey" FOREIGN KEY ("todayId") REFERENCES "Today"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TodayVisibleUser" ADD CONSTRAINT "TodayVisibleUser_visibleUserId_fkey" FOREIGN KEY ("visibleUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_todayId_fkey" FOREIGN KEY ("todayId") REFERENCES "Today"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentCommentId_fkey" FOREIGN KEY ("parentCommentId") REFERENCES "Comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_todayId_fkey" FOREIGN KEY ("todayId") REFERENCES "Today"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_user1Id_fkey" FOREIGN KEY ("user1Id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_user2Id_fkey" FOREIGN KEY ("user2Id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendsGroup" ADD CONSTRAINT "FriendsGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupFriend" ADD CONSTRAINT "GroupFriend_friendsGroupId_fkey" FOREIGN KEY ("friendsGroupId") REFERENCES "FriendsGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupFriend" ADD CONSTRAINT "GroupFriend_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_actorUserId_fkey" FOREIGN KEY ("actorUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
