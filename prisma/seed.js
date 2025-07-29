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

  // oganesson 유저를 제외한 모든 유저의 id 조회
  const allOtherUsers = await prisma.user.findMany({
    where: {
      NOT: {
        userId: "oganesson",
      },
    },
    select: { id: true },
  });

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