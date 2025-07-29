import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 기존 유저 생성 코드
  await prisma.user.createMany({
    data: [
      {
        userId: "oganesson",
        password: "e718",
        nickname: "오가네손",
        introduction: "Hello, world!",
        diaryName: "오가네손의 일기장",
      },
      {
        userId: "jiyoung02",
        password: "helloWorld!",
        nickname: "Young",
        introduction: "매일매일이 새로워요.",
        diaryName: "지영로그",
      },
      {
        userId: "hyunwoo03",
        password: "pass1234",
        nickname: "Hwoo",
        introduction: "프론트엔드 개발자",
        diaryName: "코드다이어리",
      },
      {
        userId: "soojin04",
        password: "ilovedogs",
        nickname: "SJ",
        introduction: "강아지를 사랑해요 🐶",
        diaryName: "멍멍일기장",
      },
      {
        userId: "doyoung05",
        password: "asdf",
        nickname: "DY",
        introduction: null,
        diaryName: "도영의 생각노트",
      },
      {
        userId: "eunji06",
        password: "12345678",
        nickname: "은지",
        introduction: "따뜻한 일상을 기록합니다.",
        diaryName: "햇살노트",
      },
      {
        userId: "taemin07",
        password: "taeminpass!",
        nickname: "TM",
        introduction: "음악과 함께 사는 삶",
        diaryName: "멜로디로그",
      },
      {
        userId: "hanna08",
        password: "abcdefg1",
        nickname: "한나",
        introduction: "글을 쓰는 디자이너입니다.",
        diaryName: "한나의 드로잉일기",
      },
      {
        userId: "junho09",
        password: "qwer",
        nickname: "준호",
        introduction: "백엔드를 공부중입니다.",
        diaryName: "개발일지",
      },
      {
        userId: "yuri10",
        password: "yuri2025",
        nickname: "유리",
        introduction: "오늘도 평화롭게 ✨",
        diaryName: "유리의 마음일기",
      },
    ],
    skipDuplicates: true, // 중복 방지
  });

  // oganesson 유저의 id 조회
  const oganessonUser = await prisma.user.findUnique({
    where: { userId: "oganesson" },
    select: { id: true },
  });

  if (!oganessonUser) {
    console.error("Error: oganesson user not found.");
    return;
  }

  // oganesson 유저를 제외한 모든 유저의 id 조회 및 userId와 id 매핑
  const allOtherUsers = await prisma.user.findMany({
    where: {
      NOT: {
        userId: "oganesson",
      },
    },
    select: { id: true, userId: true },
  });

  const userIdToIdMap = new Map(
    allOtherUsers.map((user) => [user.userId, user.id])
  );

  // Friendship 레코드 생성 데이터 준비
  const friendshipsToCreate = allOtherUsers.map((user) => ({
    user1Id: oganessonUser.id,
    user2Id: user.id,
  }));

  // Friendship 레코드 생성
  await prisma.friendship.createMany({
    data: friendshipsToCreate,
    skipDuplicates: true, // 이미 존재하는 관계는 건너뛰기
  });

  console.log("✅ Friendships created for oganesson.");

  // FriendGroup 생성
  const sparksGroup = await prisma.friendsGroup.create({
    data: {
      name: "스팍스",
      userId: oganessonUser.id,
    },
  });

  const kaistGroup = await prisma.friendsGroup.create({
    data: {
      name: "KAIST",
      userId: oganessonUser.id,
    },
  });

  const developerGroup = await prisma.friendsGroup.create({
    data: {
      name: "개발자",
      userId: oganessonUser.id,
    },
  });

  console.log("✅ FriendGroups created.");

  // GroupFriend 레코드 생성 데이터 준비 (오버랩 포함)
  const groupFriendsToCreate = [
    // 스팍스 그룹
    {
      friendsGroupId: sparksGroup.id,
      friendId: userIdToIdMap.get("jiyoung02"),
    },
    {
      friendsGroupId: sparksGroup.id,
      friendId: userIdToIdMap.get("soojin04"),
    },
    {
      friendsGroupId: sparksGroup.id,
      friendId: userIdToIdMap.get("taemin07"),
    },

    // KAIST 그룹 (jiyoung02, hyunwoo03 오버랩)
    {
      friendsGroupId: kaistGroup.id,
      friendId: userIdToIdMap.get("jiyoung02"),
    },
    {
      friendsGroupId: kaistGroup.id,
      friendId: userIdToIdMap.get("hyunwoo03"),
    },
    {
      friendsGroupId: kaistGroup.id,
      friendId: userIdToIdMap.get("doyoung05"),
    },

    // 개발자 그룹 (hyunwoo03, junho09 오버랩)
    {
      friendsGroupId: developerGroup.id,
      friendId: userIdToIdMap.get("hyunwoo03"),
    },
    {
      friendsGroupId: developerGroup.id,
      friendId: userIdToIdMap.get("junho09"),
    },
    {
      friendsGroupId: developerGroup.id,
      friendId: userIdToIdMap.get("hanna08"),
    },
  ].filter((gf) => gf.friendId); // 유효한 friendId만 포함

  // GroupFriend 레코드 생성
  await prisma.groupFriend.createMany({
    data: groupFriendsToCreate,
    skipDuplicates: true, // 이미 존재하는 관계는 건너뛰기
  });

  console.log("✅ GroupFriends created for oganesson's groups.");
}

main()
  .then(() => {
    console.log("✅ Seeding complete");
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
