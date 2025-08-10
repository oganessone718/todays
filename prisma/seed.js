import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // --- 1. 사용자 생성 ---
  // 모든 사용자의 비밀번호를 bcrypt로 해싱합니다.
  const usersToCreate = [
    {
      loginId: "oganesson",
      password: await bcrypt.hash("e718", 10),
      nickname: "오가네손",
      introduction: "Hello, world!",
      diaryName: "오가네손의 일기장",
    },
    {
      loginId: "ella",
      password: await bcrypt.hash("0729", 10),
      nickname: "민주",
      introduction: "잠은 죽어서 자면 돼",
      diaryName: "작고귀여운내방",
    },
    {
      loginId: "easy_senior",
      password: await bcrypt.hash("www", 10),
      nickname: "진혁",
      introduction: "Wwwwww 쑻",
      diaryName: "만만한 고삼",
    },
    {
      loginId: "sbp",
      password: await bcrypt.hash("1014", 10),
      nickname: "성빈",
      introduction: "강아지를 사랑해요 🐶",
      diaryName: "수다로그",
    },
    {
      loginId: "yum",
      password: await bcrypt.hash("yumyum", 10), // 해싱 추가
      nickname: "유민",
      introduction: "♥",
      diaryName: "회식",
    },
    {
      loginId: "joonce",
      password: await bcrypt.hash("juice", 10), // 해싱 추가
      nickname: "정윤",
      introduction: "응애",
      diaryName: "성장일지",
    },
    {
      loginId: "jiyoung02",
      password: await bcrypt.hash("helloWorld!", 10), // 해싱 추가
      nickname: "지영",
      introduction: "매일매일이 새로워요.",
      diaryName: "지영로그",
    },
    {
      loginId: "hyunwoo03",
      password: await bcrypt.hash("pass1234", 10), // 해싱 추가
      nickname: "현우",
      introduction: "프론트엔드 개발자",
      diaryName: "코드다이어리",
    },
    {
      loginId: "soojin04",
      password: await bcrypt.hash("ilovedogs", 10), // 해싱 추가
      nickname: "수진",
      introduction: "강아지를 사랑해요 🐶",
      diaryName: "멍멍일기장",
    },
    {
      loginId: "doyoung05",
      password: await bcrypt.hash("asdf", 10), // 해싱 추가
      nickname: "도영",
      introduction: null,
      diaryName: "도영의 생각노트",
    },
    {
      loginId: "eunji06",
      password: await bcrypt.hash("12345678", 10), // 해싱 추가
      nickname: "은지",
      introduction: "따뜻한 일상을 기록합니다.",
      diaryName: "햇살노트",
    },
    {
      loginId: "taemin07",
      password: await bcrypt.hash("taeminpass!", 10), // 해싱 추가
      nickname: "태민",
      introduction: "음악과 함께 사는 삶",
      diaryName: "멜로디로그",
    },
    {
      loginId: "hanna08",
      password: await bcrypt.hash("abcdefg1", 10), // 해싱 추가
      nickname: "한나",
      introduction: "글을 쓰는 디자이너입니다.",
      diaryName: "한나의 드로잉일기",
    },
    {
      loginId: "junho09",
      password: await bcrypt.hash("qwer", 10), // 해싱 추가
      nickname: "준호",
      introduction: "백엔드를 공부중입니다.",
      diaryName: "개발일지",
    },
    {
      loginId: "yuri10",
      password: await bcrypt.hash("yuri2025", 10), // 해싱 추가
      nickname: "유리",
      introduction: "오늘도 평화롭게 ✨",
      diaryName: "유리의 마음일기",
    },
  ];

  await prisma.user.createMany({
    data: usersToCreate,
    skipDuplicates: true,
  });
  console.log("✅ Users created.");

  // --- 2. 사용자 정보 조회 및 Map 생성 ---
  // 이후 작업을 위해 모든 사용자의 loginId와 id를 매핑합니다.
  const allUsers = await prisma.user.findMany({
    select: { id: true, loginId: true },
  });
  const userMap = new Map(allUsers.map((user) => [user.loginId, user.id]));

  const oganessonId = userMap.get("oganesson");
  if (!oganessonId) {
    console.error("Error: oganesson user not found.");
    return;
  }

  // --- 3. 친구 관계 생성 ---
  // oganesson을 제외한 모든 사용자와 친구 관계를 맺습니다.
  const friendshipsToCreate = allUsers
    .filter((user) => user.id !== oganessonId)
    .map((user) => ({
      user1Id: oganessonId,
      user2Id: user.id,
    }));

  await prisma.friendship.createMany({
    data: friendshipsToCreate,
    skipDuplicates: true,
  });
  console.log("✅ Friendships created for oganesson.");

  // --- 4. 친구 그룹 생성 ---
  const sparksGroup = await prisma.friendsGroup.create({
    data: { name: "개발팀", userId: oganessonId, description: "개발팀 그룹입니다." },
  });
  const kaistGroup = await prisma.friendsGroup.create({
    data: { name: "임원진", userId: oganessonId, description: "임원진 그룹입니다." },
  });
  const onetedGroup = await prisma.friendsGroup.create({
    data: { name: "16기", userId: oganessonId, description: "16기 그룹입니다." },
  });
  console.log("✅ FriendGroups created.");

  // 생성된 그룹 정보를 Map으로 만듭니다.
  const groupMap = new Map([
    ["개발팀", sparksGroup.id],
    ["임원진", kaistGroup.id],
    ["16기", onetedGroup.id],
  ]);

  // --- 5. 그룹에 친구 추가 ---
  const groupFriendsToCreate = [
    // 개발팀 그룹
    { friendsGroupId: sparksGroup.id, friendId: userMap.get("ella") },
    { friendsGroupId: sparksGroup.id, friendId: userMap.get("sbp") },
    // 임원진 그룹
    { friendsGroupId: kaistGroup.id, friendId: userMap.get("ella") },
    { friendsGroupId: kaistGroup.id, friendId: userMap.get("easy_senior") },
    { friendsGroupId: kaistGroup.id, friendId: userMap.get("sbp") },
    { friendsGroupId: kaistGroup.id, friendId: userMap.get("yum") },
    { friendsGroupId: kaistGroup.id, friendId: userMap.get("joonce") },
    // 16기 그룹
    { friendsGroupId: onetedGroup.id, friendId: userMap.get("ella") },
    { friendsGroupId: onetedGroup.id, friendId: userMap.get("yum") },
    { friendsGroupId: onetedGroup.id, friendId: userMap.get("joonce") },
  ].filter((gf) => gf.friendId); // friendId가 없는 경우 (userMap.get이 undefined를 반환) 제외

  await prisma.groupFriend.createMany({
    data: groupFriendsToCreate,
    skipDuplicates: true,
  });
  console.log("✅ GroupFriends created for oganesson's groups.");

  // --- 6. 태그 생성 ---
  await prisma.tag.createMany({
    data: [
      { userId: userMap.get("oganesson"), name: "코딩" },
      { userId: userMap.get("oganesson"), name: "프로젝트" },
      { userId: userMap.get("oganesson"), name: "일상" },
      { userId: userMap.get("oganesson"), name: "스팍스" },
      { userId: userMap.get("ella"), name: "회식" },
      { userId: userMap.get("ella"), name: "주말" },
      { userId: userMap.get("easy_senior"), name: "알고리즘" },
    ].filter((t) => t.userId), // userId가 없는 경우 제외
    skipDuplicates: true,
  });
  console.log("✅ Tags created.");

  // --- 7. Today(게시물) 생성 ---
  // 생성된 태그 정보를 Map으로 만듭니다.
  const allTags = await prisma.tag.findMany({
    select: { id: true, name: true, userId: true },
  });
  const tagMap = new Map(allTags.map((t) => [`${t.userId}-${t.name}`, t.id]));

  // 예시 1: oganesson 작성, '개발팀' 그룹에 공개
  await prisma.today.create({
    data: {
      userId: userMap.get("oganesson"),
      title: "프로젝트 회의",
      emojiUrl: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f64c.png",
      content: "오늘 @ella 랑 @sbp 랑 같이 프로젝트 회의했다. 좋은 아이디어가 많이 나왔다! 다음 주까지 기능 구현 화이팅! #코딩 #프로젝트",
      date: new Date("2025-08-09T15:00:00Z"),
      todayTags: {
        create: [
          { tagId: tagMap.get(`${userMap.get("oganesson")}-코딩`) },
          { tagId: tagMap.get(`${userMap.get("oganesson")}-스팍스`) },
          { tagId: tagMap.get(`${userMap.get("oganesson")}-프로젝트`) },
        ].filter((t) => t.tagId),
      },
      todayMentionedUsers: {
        create: [
          { mentionedUserId: userMap.get("ella") },
          { mentionedUserId: userMap.get("sbp") },
        ].filter((m) => m.mentionedUserId),
      },
      todayVisibleFriendsGroups: {
        create: [{ friendsGroupId: groupMap.get("개발팀") }].filter(
          (g) => g.friendsGroupId
        ),
      },
    },
  });

  // 예시 2: ella 작성, 특정 친구들('oganesson', 'yum')에게만 공개
  await prisma.today.create({
    data: {
      userId: userMap.get("ella"),
      title: "[회식 공지]",
      emojiUrl: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/spaghetti_1f35d.png",
      content: `\n\n안녕하세요, 여러분!\n힘들었던 한 주를 마무리하고, 다가오는 주말을 힘차게 맞이하기 위해!\n이번 주 금요일에 다 함께 맛있는 저녁을 먹으려고 합니다.\n\n언제? 👉 이번 주 금요일 (8/15) 저녁 8시\n어디서? 👉 @@고깃집 (우리가 늘 가던 거기!)\n무엇을? 👉 지글지글 맛있는 고기와 시원한 맥주! 🍻\n\n모두들 잊지 말고, 금요일 저녁 8시까지 @@고깃집으로 모여주세요!\n맛있는 고기와 함께 그동안 못다 한 이야기 나누며 즐거운 시간 보냈으면 좋겠습니다.\n\n그럼 금요일에 만나요! 😎\n\n`,
      date: new Date("2025-08-08T12:30:00Z"),
      todayTags: {
        create: [{ tagId: tagMap.get(`${userMap.get("ella")}-회식`) }].filter(
          (t) => t.tagId
        ),
      },
      todayMentionedUsers: {
        create: [{ mentionedUserId: userMap.get("yum") }].filter(
          (m) => m.mentionedUserId
        ),
      },
      todayVisibleUsers: {
        create: [
          { visibleUserId: userMap.get("oganesson") },
          { visibleUserId: userMap.get("yum") },
        ].filter((u) => u.visibleUserId),
      },
    },
  });

  // 예시 3: sbp 작성, 모두에게 공개 (공개 범위 설정 없음)
  await prisma.today.create({
    data: {
      userId: userMap.get("sbp"),
      title: "태풍 관련 긴급 알림",
      emojiUrl: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/2757.png",
      content: `안녕하세요, 경영지원팀입니다.\n\n내일(8/11 월) 한반도에 상륙할 것으로 예보된 태풍에 대비하여, 전 임직원의 안전을 위해 전사 재택근무를 실시합니다.\n모든 임직원은 내일 출근하지 마시고, 안전한 자택에서 근무를 진행해 주시기 바랍니다.\n\n언제? ➡️ 2025년 8월 11일 (월)\n누가? ➡️ 전 임직원\n어떻게? ➡️ 자택에서 원격 근무 (업무 관련 소통은 백오피스 게시글 활용)\n\n창문 단속 등 주변 안전을 다시 한번 확인하시고, 불필요한 외출은 삼가 주시기 바랍니다.\n모두 태풍 피해 없이 안전한 하루 보내시길 바랍니다! 🙏\n`,
      date: new Date("2025-08-10T09:00:00Z"),
    },
  });

  // 예시 4: easy_senior 작성, 친구 전체 공개
  // 이 예시에서는 'oganesson'에게만 공개하는 것으로 단순화
  await prisma.today.create({
    data: {
      userId: userMap.get("easy_senior"),
      title: "알고리즘 스터디",
      emojiUrl: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4bb.png",
      content: "오늘도 팀원들과 함께 알고리즘 문제 풀이 완료. 팀원들과 스터디를 하니 친목도 다지게 되는 것 같네요. ^^ 이번 스터디 BEST 팀원은 @sbp입니다. 다음주도 화이팅입니다. #알고리즘",
      date: new Date("2025-08-10T11:00:00Z"),
      todayTags: {
        create: [
          { tagId: tagMap.get(`${userMap.get("easy_senior")}-알고리즘`) },
        ].filter((t) => t.tagId),
      },
      todayMentionedUsers: {
          create: [{ mentionedUserId: userMap.get("sbp") }].filter(
              (m) => m.mentionedUserId
          ),
      },
      todayVisibleUsers: {
        create: [{ visibleUserId: userMap.get("oganesson") }].filter(
          (u) => u.visibleUserId
        ),
      },
    },
  });
  console.log("✅ Todays created.");
}

main()
  .then(async () => {
    console.log("✅ Seeding complete");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seeding failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
