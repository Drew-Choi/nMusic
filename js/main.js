//MAIN
const wrapper = document.querySelector(".swiper-wrapper");
const slide = document.querySelectorAll(".album-box"); // 배열로 가지고 옴
let len = slide.length;

// const names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let arryAlbum = [
  { img: "1", name: "나쁜X", item: "dance" },
  { img: "2", name: "Love or Die", item: "kpop" },
  { img: "3", name: "Hype boy", item: "kpop" },
  { img: "4", name: "A&W", item: "pop" },
  { img: "5", name: "ditto", item: "kpop" },
  { img: "6", name: "죽일 놈 (Guilty)", item: "hiphop" },
  { img: "7", name: "그라데이션", item: "kpop" },
  { img: "8", name: "VILLAIN DIES", item: "kpop" },
  { img: "9", name: "Teddy Bear", item: "dance" },
  { img: "10", name: "After Like", item: "kpop" },
  { img: "11", name: "오르트구름", item: "kpop" },
  { img: "12", name: "자격지심 (Feat. ZICO)", item: "hiphop" },
  { img: "13", name: "85mm", item: "classic" },
  { img: "14", name: "캔디", item: "kpop" },
  { img: "15", name: "Nxde", item: "kpop" },
  { img: "16", name: "Pink Venom", item: "kpop" },
  { img: "17", name: "It's Not Unusual", item: "classic" },
  { img: "18", name: "건물 사이에 피어난 장미 (Rose Blossom)", item: "dance" },
  { img: "19", name: "I Feel Like Dancing", item: "pop" },
  { img: "20", name: "Best Disaster", item: "pop" },
  { img: "21", name: "The River", item: "classic" },
  { img: "22", name: "TRUSTFALL", item: "pop" },
  { img: "23", name: "NOT SORRY (Feat. pH-1) (Prod. by Slom)", item: "hiphop" },
  { img: "24", name: "괴짜 (Freak)", item: "hiphop" },
  { img: "25", name: "연애소설 (Feat. 아이유)", item: "hiphop" },
  { img: "26", name: "Right Here (Feat. Benny Sings)", item: "pop" },
  { img: "27", name: "파이팅 해야지 (Feat. 이영지)", item: "dance" },
  { img: "28", name: "ANTIFRAGILE", item: "dance" },
  { img: "29", name: "WHEN I MOVE", item: "dance" },
  { img: "30", name: "SMILEY (Feat. BIBI)", item: "dance" },
];

let newArryAlbum = [
  // 요청사항 반영한 arryAlbum
  {
    img: "1",

    name: "Lowlife Princess: Noir",
    artist: "비비(BIBI)",
    date: "2022.11.18",
    item: "dance",
    country: "국내",
    info: "BIBI THE 1st ALBUM",
    infoSub:
      "때론 광기어리고, 때론 날카롭게 아픔을 찔러댄다. 과장없이 가장 현실적인 위로, 비비의 현재를 그대로 투영한 새 음반",
    track: [
      { title: "Intro", time: "01:07" },
      { title: "철학보다 무서운건 비비의 총알", time: "03:10" },
      { title: "나쁜X", time: "02:45" },
      { title: "가면무도회", time: "03:23" },
      { title: "모토스피드 24시", time: "02:13" },
      { title: "불륜", time: "01:06" },
    ],
  },
  {
    img: "2",
    name: "Love Never Dies",
    artist: "TNX",
    date: "2023.02.15",
    item: "kpop",
    country: "국내",
    info: "TNX The 2nd Mini Album [ Love Never Dies ]",
    infoSub:
      "10-20대의 아픈 청춘과 사랑 그리고 이별이라는 주제를 담은 [Love Never Dies]는 1번부터 6번 트랙까지 청춘의 사랑과 이별의 과정을 한 앨범 안에 음악적으로 녹여낸 앨범",
    track: [
      { title: "Love Never Dies", time: "01:38" },
      { title: "I Need U", time: "03:12" },
      { title: "Love or Die", time: "03:05" },
      { title: "Wasn't Ready", time: "03:04" },
      { title: "Slingshot", time: "03:02" },
      { title: "따따따 (Short Ver.)", time: "01:37" },
    ],
  },
  {
    img: "3",
    name: "NewJeans 1st EP 'New Jeans'",
    artist: "NewJeans",
    date: "2022.8.1",
    item: "dance",
    country: "국내",
    info: "NewJeans 1st EP 'New Jeans' Album",
    infoSub:
      "1st EP 'New Jeans'는 NewJeans가 추구하는 '좋은 음악'에 대한 질문을 던진다.",
    track: [
      { title: "Attention", time: "02:58" },
      { title: "Hype Boy", time: "02:56" },
      { title: "Cookie", time: "03:53" },
      { title: "Hurt", time: "02:55" },
    ],
  },
  {
    img: "4",
    name: "A&W",
    artist: "Lana Del Rey",
    date: "2023.02.13",
    item: "pop",
    country: "해외",
    info: "Lana Del Rey's New Single Album",
    infoSub:
      "라나 델 레이가 높은 관심 속에서 새 싱글을 발표했다. 7분의 긴 구성 중 전반부는 포크 스타일, 후반부는 힙합 비트가 중심에 있다. 라나 델 레이는 활동 초반에 힙합 비트를 즐겨 썼으며 'Born To Die' 같은 초기 히트곡을 트립 합으로 분류하는 이들도 있다. 제목 'A&W'는 'American Whore'를 뜻한다고 한다.",
    track: [{ title: "A&W", time: "07:14" }],
  },
  {
    img: "5",
    name: "NewJeans 'OMG'",
    artist: "NewJeans",
    date: "2023.01.02",
    item: "dance",
    country: "국내",
    info: "NewJeans 1st Single EP 'New Jeans' Album",
    infoSub:
      "첫 겨울을 맞이하는 NewJeans의 새 앨범 “OMG”는 조금은 묘한 거리감, 조금은 낯선 배경 속에서 다시 한번 관계를 이야기한다. 그리고 그 안에 특별하고 의미 있는 선물을 담아내고 있다. 1st. EP “New Jeans”에서 담아냈던, 사람의 관계와 끌림에 대해 이야기하며 함께 있을 때 더 빛나는 10대 소녀들이 들려주는 '우리'라는 서사는 모습을 바꿔가며 또 한 번 펼쳐진다. 낯섦을 지나 공감, 환대, 호혜에 기반을 둘 때, '우리'는 더 가까워지고, 함께 성장한다고 믿는다.",
    track: [
      { title: "OMG", time: "03:32" },
      { title: "Ditto", time: "03:05" },
    ],
  },
  {
    img: "6",
    name: "Band Of Dynamic Brothers",
    artist: "다이나믹 듀오",
    date: "2009.10.07",
    item: "hiphop",
    country: "국내",
    info: "다이나믹듀오의 5집 앨범",
    infoSub:
      "영화 “Band of Brothers'에서 영감을 얻은 이번 타이틀은 영화 안에서 군인들(이지중대)이 아닌 그들의 ‘음악 밴드’를 의미하며 결국 ”역동적인 음악을 하는 밴드 형제“들로 풀이 할 수 있다.",
    track: [
      {
        title: "그림에 떡 (Dynamic Sinsa Rangers)",
        time: "03:49",
      },
      { title: "돈이다가 아니야 (Get Money) (Feat. 강산에)", time: "04:04" },
      { title: "두꺼비집 (One More Drink) (Feat. 0cd)", time: "03:52" },
      {
        title: "잔돈은 됐어요 (Keep The Change)",
        time: "04:11",
      },
      { title: "죽일 놈 (Guilty)", time: "03:43" },
      {
        title: "왜 벌써가 (Be My Brownie) (Feat. Bumky Of Komplex)",
        time: "03:57",
      },
    ],
  },
  {
    img: "7",
    name: "5.3",
    artist: "10CM",
    date: "2022.7.3",
    item: "kpop",
    country: "국내",
    info: "당신이 그려낼 이 여름의 그라데이션 10CM '5.3' 디지털 싱글 앨범",
    infoSub:
      "단조로운 하얀 일상에 번져버린 잉크 자국처럼, 상대에게 돌이킬 수 없이 빠져버린 마음을 담아낸 곡이다. '그라데이션'이라는 키워드로 '너로 물들어 버렸다'는 마음을 표현하는 이 곡이 올여름 당신의 마음도 짙게 물들이길 바란다.",
    track: [
      { title: "그라데이션", time: "03:21" },
      { title: "그라데이션(Inst)", time: "03:21" },
    ],
  },
  {
    img: "8",
    name: "I NEVER DIE",
    artist: "(여자) 아이들",
    date: "2022.3.14",
    item: "kpop",
    country: "국내",
    info: "(여자)아이들의 첫 정규 앨범 [I NEVER DIE]",
    infoSub:
      "[I NEVER DIE]는 (여자)아이들에게 주어진 것뿐만 아니라 세상의 모든 편견에 대한 그들의 감정과 생각들을 고스란히 담아낸 앨범이다. 물러서지 않고 세상과 마주한 (여자)아이들은 나는 나일 뿐이라고 말하며 자신들의 가치를 절대 잃지 않는다.",
    track: [
      { title: "TOMBOY", time: "02:54" },
      { title: "말리지 마", time: "02:24" },
      { title: "VILLAIN DIES", time: "03:04" },
      { title: "ALREADY", time: "03:21" },
      { title: "POLAROID", time: "03:38" },
      { title: "ESCAPE", time: "03:29" },
    ],
  },
  {
    // { img: "9", name: "Teddy Bear", item: "dance" },
    img: "9",
    name: "Teddy Bear",
    artist: "STAYC",
    date: "2023.02.03",
    item: "dance",
    country: "국내",
    info: "STAYC 싱글 앨범",
    infoSub:
      "STAYC(스테이씨)의 밝고 키치한 ‘틴프레시(TEENFRESH)색으로 희망과 위안을 주는 긍정의 메시지!",
    track: [
      { title: "Poppy", time: "2:58" },
      { title: "Teddy", time: "3:12" },
    ],
  },
  {
    // { img: "10", name: "After Like", item: "kpop" },
    img: "10",
    name: "After Like",
    artist: "IVE",
    date: "2022.08.22",
    item: "kpop",
    country: "국내",
    info: "IVE 3RD SINGLE ALBUM <After LIKE>",
    infoSub:
      "자신감과 자유로움, 두 가지 키워드로 설명이 부족한 아이브가 다시 한 번 K팝 지형을 바꿀 준비를 마쳤다. 최고의 조합을 강조한 출사표 'ELEVEN', 6명 멤버들의 비주얼과 당당한 애티튜드를 드러낸 'LOVE DIVE', 그 다음은 다채로운 매력으로 가득 채운 'After LIKE'로 또 한 번 존재감을 증명할 차례다. 시작부터 완벽했던 아이브가 자신감 있게 새로운 시대를 예고한다.",
    track: [
      { title: "After LIKE", time: "2:30" },
      { title: "My Satisfaction", time: "3:40" },
    ],
  },
  {
    // { img: "11", name: "오르트구름", item: "kpop" },
    img: "11",
    name: "END THEORY",
    artist: "윤하",
    date: "2021.11.16",
    item: "kpop",
    country: "국내",
    info: "윤하 정규 6집 [End Theory]",
    infoSub:
      "딛고 지내온 모든 것들을 사랑하기로 했다. 정확히는, 사랑하는 선택을 하기로 했다. 그것은 시간이나 사람이나 감정의 형태로 남아있다. 더 이상의 시공간은 중요하지 않다. 주어진 시간이 얼만큼 남았는지는 모른다. 너와 내가 지나온 모든 것들이 우리를 만들었고, 그것은 대화의 주제로 이따금씩 돌아 볼 수 있겠지만 이상도 이하도 아니다. 다만, 서로를 제대로 사랑할 수 있는 이해의 기반이 되길바란다. 우리는 선택한 대로 살아간다. 설령, 선택이 정해져 있더라도.",
    track: [
      { title: "P.R.R.W", time: "3:06" },
      { title: "나는 계획이 있다", time: "3:01" },
      { title: "오르트구름", time: "2:45" },
      { title: "물의 여행", time: "3:04" },
      { title: "잘지내", time: "3:21" },
      { title: "반짝, 빛을 내", time: "3:12" },
    ],
  },
  {
    // { img: "12", name: "자격지심 (Feat. ZICO)", item: "hiphop" },
    img: "12",
    name: "FIVE SENSES",
    artist: "BE'O",
    date: "2022.09.29",
    item: "hiphop",
    country: "국내",
    info: "BE’O The 1st EP [FIVE SENSES]",
    infoSub:
      "있는 그대로의 ‘저’를 담아 보고 싶었어요. 감각, 경험, 감정. 제가 겪은 것들에 대해 솔직하고 꾸밈없이 음악으로 표현해보고 싶었거든요. 물론 보여드리고 싶지 않은 모습도 있지만 그런 모습들까지 보여드려야 진짜 저다운 앨범이 완성될 것 같았어요. 누구에게나 한 번쯤은 있었을 법한 이야기부터 저만 알고 싶은 개인적인 이야기까지. 제 노래가 여러분들께 ‘공감’이자 ‘위로’가 되었으면 좋겠습니다. ",
    track: [
      { title: "Brunch", time: "3:20" },
      { title: "줄", time: "3:55" },
      { title: "자격지심 (Feat. ZICO)", time: "3:12" },
      { title: "BBI YOUNG", time: "3:05" },
      { title: "Nostalgia", time: "3:07" },
    ],
  },
  {
    // { img: "13", name: "85mm", item: "classic" },
    img: "13",
    name: "85mm",
    artist: "Ludovico Einaudi(루도비코 에이나우디)",
    date: "2023.02.24",
    item: "classic",
    country: "USA",
    info: "싱글",
    infoSub: "Ludovico Einaudi(루도비코 에이나우디) 뉴에이지 클래식 음악",
    track: [{ title: "85mm", time: "5:01" }],
  },
  {
    // { img: "14", name: "캔디", item: "kpop" },
    img: "14",
    name: "Candy",
    artist: "NCT DREAM",
    date: "2022.12.16",
    item: "kpop",
    country: "국내",
    info: "EP(미니)",
    infoSub:
      "NCT DREAM의 청량한 매력으로 재탄생한 타이틀 곡 ‘Candy’! 국민 윈터송 탄생 예감!",
    track: [
      { title: "Candy", time: "3:01" },
      { title: "Graduation", time: "3:54" },
      { title: "Tangerine Love", time: "3:12" },
      { title: "입김", time: "3:04" },
      { title: "문", time: "3:08" },
      { title: "발자국", time: "3:01" },
    ],
  },
  {
    // { img: "15", name: "Nxde", item: "kpop" },
    img: "15",
    name: "I love",
    artist: "(여자)아이들",
    date: "2022.10.17",
    item: "kpop",
    country: "국내",
    info: "EP(미니)",
    infoSub:
      "[I love]는 ‘나’는 내가 아닌 다른 누군가가 원하는 모습이 아닌 그냥 ‘나’ 본연의 모습으로 존재해야 마땅하며 내가 원하지 않는 겉치레는 벗어 던지고 꾸밈없는 본모습을 보여주겠다는 당찬 각오를 담고 있다. 앨범에 수록된 6개의 트랙은 각기 다른 사랑에 대한 이야기를 음악적으로 풀어냈다. 팝, 록, 인디 팝, 힙합 등의 다채로운 장르를 (여자)아이들만의 스타일로 충분히 소화해냈다. 이번 앨범 또한 전소연이 총괄 프로듀서로서 앨범 제작 전반을 주도적으로 진두지휘하였으며 멤버들이 전곡 작곡, 작사에 참여하여 ‘만능 아티스트’다운 면모를 충분히 입증한다.",
    track: [
      { title: "Nxde", time: "3:15" },
      { title: "LOVE", time: "3:01" },
      { title: "Change", time: "3:00" },
      { title: "Reset", time: "2:58" },
      { title: "조각품", time: "3:04" },
      { title: "DARK", time: "3:12" },
    ],
  },
  {
    // { img: "16", name: "Pink Venom", item: "kpop" },
    img: "16",
    name: "BORN PINK",
    artist: "BLACKPINK",
    date: "2022.09.16",
    item: "kpop",
    country: "국내",
    info: "블랙핑크 두 번째 정규 앨범",
    infoSub:
      "[BORN PINK]는 태생부터 남다른 존재감을 지닌 BLACKPINK의 자신감을 드러내는 앨범명으로, 타이틀곡 ‘Shut Down’을 비롯한 BLACKPINK만의 강렬한 사운드를 담은 독보적인 트랙 8곡이 수록됐다.",
    track: [
      { title: "Pink Venom", time: "3:45" },
      { title: "Shut Down", time: "4:05" },
      { title: "Typa Girl", time: "4:12" },
      { title: "Yeah Yeah Yeah", time: "3:59" },
      { title: "Hard to Love", time: "3:05" },
      { title: "Tally", time: "3:10" },
    ],
  },
  {
    // { img: "17", name: "It's Not Unusual", item: "classic" },
    img: "17",
    name: "It's Not Unusual",
    artist: "Hauser",
    date: "2023.02.17",
    item: "classic",
    country: "usa",
    info: "Hauser classic",
    infoSub: "",
    track: [{ title: "It's Not Unusual", time: "4:12" }],
  },
  {
    // { img: "18", name: "건물 사이에 피어난 장미 (Rose Blossom)", item: "dance" },
    img: "18",
    name: "Rose Blossom",
    artist: "H1-KEY",
    date: "2023.01.05",
    item: "dance",
    country: "국내",
    info: "EP(미니)",
    infoSub:
      "완전히 새로워진 비주얼과 더욱 당당해진 태도로 돌아온 하이키! 데뷔 1주년에 맞춰 2023년 1월 5일 컴백! 꿈을 포기하지 않고 악착같이 피어나려는 이들에게 바치는 앨범 [Rose Blossom]",
    track: [
      { title: "Ring the Alarm", time: "3:12" },
      { title: "건물 사이에 피어난 장미", time: "4:12" },
      { title: "Crown Jewel", time: "4:30" },
      { title: "You Are My Key", time: "4:23" },
      { title: "Dream Trip", time: "5:01" },
    ],
  },
  {
    // { img: "19", name: "I Feel Like Dancing", item: "pop" },
    img: "19",
    name: "I Feel Like Dancing",
    artist: "Jason Mraz",
    date: "2023.02.15",
    item: "pop",
    country: "usa",
    info: "Json Mraz Single",
    infoSub: "",
    track: [{ title: "I Feel Like Dancing", time: "4:12" }],
  },
  {
    // { img: "20", name: "Best Disaster", item: "pop" },
    img: "20",
    name: "Best Disaster",
    artist: "Cuco",
    date: "2023.02.17",
    item: "pop",
    country: "usa",
    info: "Cuco Single",
    infoSub: "",
    track: [{ title: "Best Disaster", time: "4:23" }],
  },
  {
    // { img: "21", name: "The River", item: "classic" },
    img: "21",
    name: "The River",
    artist: "정재일",
    date: "2023.01.13",
    item: "classic",
    country: "usa",
    info: "Jeong Jae-Il new age album",
    infoSub: "",
    track: [{ title: "The River", time: "6:12" }],
  },
  {
    // { img: "22", name: "TRUSTFALL", item: "pop" },
    img: "22",
    name: "TRUSTFALL",
    artist: "P!nk",
    date: "2023.01.27",
    item: "pop",
    country: "usa",
    info: "P!nk single",
    infoSub: "",
    track: [{ title: "TRUSTFALL", time: "4:12" }],
  },
  {
    // { img: "23", name: "NOT SORRY (Feat. pH-1) (Prod. by Slom)", item: "hiphop" },
    img: "23",
    name: "쇼미더머니 11 Episode 3",
    artist: "Various Artists",
    date: "2022.12.17",
    item: "hiphop",
    country: "국내",
    info: "show me the money episode 11",
    infoSub: "SHOW ME THE MONEY 11 WHO'S THE NEW ONE?",
    track: [
      { title: "Holiday", time: "4:16" },
      { title: "으리으리", time: "3:12" },
      { title: "BLUE CHECK", time: "5:12" },
      { title: "나침반", time: "4:44" },
      { title: "BINGO", time: "4:01" },
      { title: "펄펄", time: "3:44" },
    ],
  },
  {
    // { img: "24", name: "괴짜 (Freak)", item: "hiphop" },
    img: "24",
    name: "Grown Ass Kid",
    artist: "지코",
    date: "2022.07.27",
    item: "hiphop",
    country: "국내",
    info: "EP(미니)",
    infoSub:
      "ZICO는 여전히 트렌드에 민감하고, 본인이 좋아하는 음악을 할 때 더욱 빛나는 아티스트다. 다른 모든 것이 변할 때도, 변하지 않는 음악 취향과 열정, 에너지는 ZICO가 긴 공백기를 뛰어넘어 다시금 아티스트로서 활동에 박차를 가할 수 있는 이유이다. 새 EP의 제목 [Grown Ass Kid]에는 그런 의미가 함축되어 있다.",
    track: [
      { title: "괴짜(Freak)", time: "3:33" },
      { title: "SEOUL DRIFT", time: "3:12" },
      { title: "Trach Talk", time: "5:12" },
      { title: "OMZ freestyle", time: "4:12" },
      { title: "Nocturnal animals", time: "3:45" },
    ],
  },
  {
    // { img: "25", name: "연애소설 (Feat. 아이유)", item: "hiphop" },
    img: "25",
    name: "WE'VE DONE SOMETHING WONDERFUL",
    artist: "에픽하이",
    date: "2017.10.23",
    item: "hiphop",
    country: "국내",
    info: "에픽하이 정규",
    infoSub:
      "누구나 공감할 수 있는 가사들과 연애소설의 아이유, 노땡큐의 송민호, 사이먼 도미닉, 더콰이엇, 빈차의 오혁, 문배동 단골집의 크러쉬 등 곡의 완성도를 더해줄 특급 피처링은 에픽하이의 음악과 잘 어우러져 앨범의 다양성을 높인다.",
    track: [
      { title: "난 사람이 제일 무서워", time: "4:01" },
      { title: "연애소설(Feat.아이유)", time: "4:03" },
      { title: "노땡큐", time: "3:45" },
      { title: "빈차(Feat.오혁)", time: "3:23" },
    ],
  },
  {
    // { img: "26", name: "Right Here (Feat. Benny Sings)", item: "pop" },
    img: "26",
    name: "Right Here",
    artist: "M.I.L.K",
    date: "2023.02.17",
    item: "pop",
    country: "usa",
    info: "싱글",
    infoSub: "M.I.L.K Single",
    track: [{ title: "Right Here (Feat. Benny Sings)", time: "4:32" }],
  },
  {
    // { img: "27", name: "파이팅 해야지 (Feat. 이영지)", item: "dance" },
    img: "27",
    name: "부석순 1st Single Album 'SECOND WIND'",
    artist: "부석순",
    date: "2023.02.06",
    item: "dance",
    country: "국내",
    info: "부석순 Single",
    infoSub:
      "힘들고 포기하고 싶은 순간! 새로운 변화의 바람…‘SECOND WIND' ‘나를 위한 응원단' 부석순...지친 일상 속 웃음과 활기를 ‘파이팅 해야지' 목표를 향해 달려라 ‘가장 짜릿한 순간' 위한 파이팅! ‘러닝 크루 (Running Crew)'",
    track: [
      { title: "파이팅 해야지(Feat. 이영지)", time: "3:56" },
      { title: "LUNCH", time: "4:12" },
      { title: "7시에 들어줘(Feat. Peder Elias", time: "3:44" },
    ],
  },
  {
    // { img: "28", name: "ANTIFRAGILE", item: "dance" },
    img: "28",
    name: "ANTIFRAGILE",
    artist: "LE SSERAFIM (르세라핌)",
    date: "2022.10.17",
    item: "dance",
    country: "국내",
    info: "EP(미니)",
    infoSub:
      "르세라핌, 10월 17일 미니 2집 ‘ANTIFRAGILE' 발매 ‘5개월 만의 컴백' 시련을 마주할수록 더 단단해지는 르세라핌 타이틀곡, 라틴 리듬 가미된 팝 장르 곡…독특한 후렴구에 중독!",
    track: [
      { title: "The Hydra", time: "3:44" },
      { title: "ANTIFRAGILE", time: "4:01" },
      { title: "Impurities", time: "4:23" },
      { title: "No Celestial", time: "3:54" },
      { title: "Good Parts", time: "3:23" },
    ],
  },
  {
    // { img: "29", name: "WHEN I MOVE", item: "dance" },
    img: "29",
    name: "MOVE AGAIN",
    artist: "카라",
    date: "2022.11.29",
    item: "dance",
    country: "국내",
    info: "EP(미니)",
    infoSub:
      "레전드 걸그룹 카라가 15주년을 맞아 [15th Anniversary Special Album ‘MOVE AGAIN’을 발표하며 전격 컴백했다. 카라는 지난 2015년 5월 발표한 미니 7집 ‘인 러브(In Love)’ 이후 7년 만의 컴백으로, 이번 컴백은 데뷔 15주년을 맞아 박규리, 한승연, 허영지는 물론, 니콜, 강지영까지 합류한 완전체라 더욱 의미가 깊다.",
    track: [
      { title: "Happy Hour", time: "3:56" },
      { title: "WHEN I MOVE", time: "3:12" },
      { title: "Shout It Out", time: "3:55" },
      { title: "Oxygen", time: "4:11" },
    ],
  },
  {
    // { img: "30", name: "SMILEY (Feat. BIBI)", item: "dance" },
    img: "30",
    name: "ˣ‿ˣ (SMiLEY)",
    artist: "YENA (최예나)",
    date: "2022.01.17",
    item: "dance",
    country: "국내",
    info: "EP(미니)",
    infoSub:
      "퍼포먼스, 보컬, 랩, 예능 까지 섭렵한 YENA(최예나)의 솔로 핫데뷔! 홀로서기를 넘어 이제는 아티스트적인 면모까지 선보이며 한층 성장한 YENA를 만날 수 있는 데뷔 앨범 ˣ‿ˣ (SMiLEY) YENA만의 행복 에너지가 가득 담긴 데뷔곡 ‘SMILEY’, 스마일 히어로의 행복 파워가 모두에게 전파된다!",
    track: [
      { title: "Before Anyone Else", time: "2:33" },
      { title: "SMILEY", time: "3:12" },
      { title: "Lxxk 2 U", time: "4:12" },
      { title: "PRETTY BOYS", time: "5:01" },
      { title: "VACAY", time: "3:33" },
    ],
  },
];

const classicData = newArryAlbum.filter((el) => el.item == "classic");
const popData = newArryAlbum.filter((el) => el.item == "pop");
const danceData = newArryAlbum.filter((el) => el.item == "dance");
const hiphopData = newArryAlbum.filter((el) => el.item == "hiphop");
const kpopData = newArryAlbum.filter((el) => el.item == "kpop");

for (let i = 0; i < len; i++) {
  // 해당 부분으로 인해서 따로 DOM 요소를 생성해 붙일 필요 X
  // DOM을 만들어서 붙여주게 되면 최초 All 탭에서 항목이 안 보이는 경우가 생기므로 아래와 같이 처리

  // 사진 부분 일괄 적용
  const pic = slide[i];
  if (i < 30) {
    pic.setAttribute("data-item", `${arryAlbum[i].item}`); //추가한 코드
    // pic.setAttribute("id", `${arryAlbum[i].name}`);
    pic.setAttribute("name", `${newArryAlbum[i].name}`);
    pic.setAttribute("artist", `${newArryAlbum[i].artist}`);
    pic.setAttribute("date", `${newArryAlbum[i].date}`);
    pic.setAttribute("info", `${newArryAlbum[i].info}`);
    pic.setAttribute("info-sub", `${newArryAlbum[i].infoSub}`);
    pic.setAttribute("track-len", `${newArryAlbum[i].track.length}`);
    for (let j = 0; j < newArryAlbum[i].track.length; j++) {
      pic.setAttribute(`track-title${j}`, `${newArryAlbum[i].track[j].title}`);
      pic.setAttribute(`track-time${j}`, `${newArryAlbum[i].track[j].time}`);
    }

    pic.style.backgroundImage = `url("../img/main_album/main_album${arryAlbum[i].img}.png")`;
    pic.style.boxShadow = `0px 0px 1px #e6e6e6`;
  }
}

// kpop
const kpopBox = document.createElement("div");
kpopBox.setAttribute('class','album-box');

const inner = document.querySelector('.section3 .inner');
inner.append(kpopBox);

const kpopWrapper = document.createElement("div");
kpopWrapper.setAttribute("class", "swiper-wrapper");
kpopWrapper.style.marginTop = '30px';
kpopWrapper.style.gap = '50px';

const kpopSwiper2 = document.createElement("div");
kpopSwiper2.setAttribute("class","swiper2");
kpopSwiper2.classList.add('albums');
kpopSwiper2.append(kpopWrapper);

const kpopArr = document.createElement("div");
kpopArr.setAttribute("class","arr");

const kpopTitle = document.createElement("p");
kpopTitle.textContent = "K-POP";
kpopTitle.style.textAlign = "left";
kpopTitle.style.font = "normal normal bold 24px/29px Pretendard";
kpopTitle.style.position = 'relative';

kpopArr.append(kpopTitle);

kpopArr.append(kpopSwiper2);

const albums = document.querySelector(".albums");
albums.append(kpopArr);


for (let i = 0; i < kpopData.length; i++) {

    const swiperSlide = document.createElement("div");
    swiperSlide.setAttribute("class",'swiper-slide');
    swiperSlide.style.width = '200px';
    swiperSlide.style.marginTop = '0';
    swiperSlide.style.marginRight = '40px';
    kpopWrapper.append(swiperSlide);

    const kpop = document.createElement("div");
    kpop.setAttribute("class",'album-box');
    kpop.classList.add('kpopPic');
    swiperSlide.append(kpop);

  // 사진 부분 일괄 적용
  const kpopSlide = document.querySelectorAll('.kpopPic');
  const kpopPic = kpopSlide[i];
  if (i < 30) {
    kpopPic.setAttribute("data-item", `${kpopData[i].item}`);
    kpopPic.setAttribute("name", `${kpopData[i].name}`);
    kpopPic.setAttribute("artist", `${kpopData[i].artist}`);
    kpopPic.setAttribute("date", `${kpopData[i].date}`);
    kpopPic.setAttribute("info", `${kpopData[i].info}`);
    kpopPic.setAttribute("info-sub", `${kpopData[i].infoSub}`);
    kpopPic.setAttribute("track-len", `${kpopData[i].track.length}`);
    for (let j = 0; j < kpopData[i].track.length; j++) {
      kpopPic.setAttribute(`track-title${j}`, `${kpopData[i].track[j].title}`);
      kpopPic.setAttribute(`track-time${j}`, `${kpopData[i].track[j].time}`);
    }

    kpopPic.style.backgroundImage = `url("../img/main_album/main_album${kpopData[i].img}.png")`;
    kpopPic.style.boxShadow = `0px 0px 1px #e6e6e6`;
  }
}

// pop
const popBox = document.createElement("div");
popBox.setAttribute('class','album-box');

inner.append(popBox);

const popWrapper = document.createElement("div");
popWrapper.setAttribute("class", "swiper-wrapper");
popWrapper.style.marginTop = '30px';
popWrapper.style.gap = '50px';

const popSwiper2 = document.createElement("div");
popSwiper2.setAttribute("class","swiper2");
popSwiper2.classList.add('albums');
popSwiper2.append(popWrapper);

const popArr = document.createElement("div");
popArr.setAttribute("class","arr");

const popTitle = document.createElement("p");
popTitle.textContent = "POP";
popTitle.style.textAlign = "left";
popTitle.style.font = "normal normal bold 24px/29px Pretendard";
popTitle.style.position = 'relative';

popArr.append(popTitle);

popArr.append(popSwiper2);

albums.append(popArr);

for (let i = 0; i < popData.length; i++) {

    const swiperSlide = document.createElement("div");
    swiperSlide.setAttribute("class",'swiper-slide');
    swiperSlide.style.width = '200px';
    swiperSlide.style.marginTop = '0';
    swiperSlide.style.marginRight = '40px';
    popWrapper.append(swiperSlide);

    const pop = document.createElement("div");
    pop.setAttribute("class",'album-box');
    pop.classList.add('popPic');
    swiperSlide.append(pop);

  // 사진 부분 일괄 적용
  const popSlide = document.querySelectorAll('.popPic');
  const popPic = popSlide[i];
  if (i < 30) {
    popPic.setAttribute("data-item", `${popData[i].item}`);
    popPic.setAttribute("name", `${popData[i].name}`);
    popPic.setAttribute("artist", `${popData[i].artist}`);
    popPic.setAttribute("date", `${popData[i].date}`);
    popPic.setAttribute("info", `${popData[i].info}`);
    popPic.setAttribute("info-sub", `${popData[i].infoSub}`);
    popPic.setAttribute("track-len", `${popData[i].track.length}`);
    for (let j = 0; j < popData[i].track.length; j++) {
      popPic.setAttribute(`track-title${j}`, `${popData[i].track[j].title}`);
      popPic.setAttribute(`track-time${j}`, `${popData[i].track[j].time}`);
    }

    popPic.style.backgroundImage = `url("../img/main_album/main_album${popData[i].img}.png")`;
    popPic.style.boxShadow = `0px 0px 1px #e6e6e6`;
  }
}

// hiphop
const hiphopBox = document.createElement('div');
hiphopBox.setAttribute('class','album-box');

inner.append(hiphopBox);

const hiphopWrapper = document.createElement('div');
hiphopWrapper.setAttribute('class','swiper-wrapper');
hiphopWrapper.style.marginTop = '30px';
hiphopWrapper.style.gap = '50px';

const hiphopSwiper2 = document.createElement('div');
hiphopSwiper2.setAttribute('class','swiper2');
hiphopSwiper2.classList.add('albums');
hiphopSwiper2.append(hiphopWrapper);

const hiphopArr = document.createElement("div");
hiphopArr.setAttribute("class","arr");

const hiphopTitle = document.createElement('p');
hiphopTitle.textContent = 'Hip-hop';
hiphopTitle.style.textAlign = 'left';
hiphopTitle.style.font = 'normal normal bold 24px/29px Pretendard';
hiphopTitle.style.position = 'relative';

hiphopArr.append(hiphopTitle);

hiphopArr.append(hiphopSwiper2);

albums.append(hiphopArr);

for (let i = 0; i< hiphopData.length; i++) {
  const swiperSlide = document.createElement("div");
  swiperSlide.setAttribute("class",'swiper-slide');
  swiperSlide.style.width = '200px';
  swiperSlide.style.marginTop = '0';
  swiperSlide.style.marginRight = '40px';
  hiphopWrapper.append(swiperSlide);

  const hiphop = document.createElement('div');
  hiphop.setAttribute('class','album-box');
  hiphop.classList.add('hiphopPic');
  swiperSlide.append(hiphop);

  // 사진 부분 일괄 적용
  const hiphopSlide = document.querySelectorAll('.hiphopPic');
  const hiphopPic = hiphopSlide[i];
  if (i < 30) {
    hiphopPic.setAttribute("data-item", `${hiphopData[i].item}`);
    hiphopPic.setAttribute("name", `${hiphopData[i].name}`);
    hiphopPic.setAttribute("artist", `${hiphopData[i].artist}`);
    hiphopPic.setAttribute("date", `${hiphopData[i].date}`);
    hiphopPic.setAttribute("info", `${hiphopData[i].info}`);
    hiphopPic.setAttribute("info-sub", `${hiphopData[i].infoSub}`);
    hiphopPic.setAttribute("track-len", `${hiphopData[i].track.length}`);
    for (let j = 0; j < hiphopData[i].track.length; j++) {
      hiphopPic.setAttribute(`track-title${j}`, `${hiphopData[i].track[j].title}`);
      hiphopPic.setAttribute(`track-time${j}`, `${hiphopData[i].track[j].time}`);
    }

    hiphopPic.style.backgroundImage = `url("../img/main_album/main_album${hiphopData[i].img}.png")`;
    hiphopPic.style.boxShadow = `0px 0px 1px #e6e6e6`;
  }
} 

// classic
const classicBox = document.createElement('div');
classicBox.setAttribute('class','album-box');

inner.append(classicBox);

const classicWrapper = document.createElement('div');
classicWrapper.setAttribute('class','swiper-wrapper');
classicWrapper.style.marginTop = '30px';
classicWrapper.style.gap = '50px';

const classicSwiper2 = document.createElement('div');
classicSwiper2.setAttribute('class','swiper2');
classicSwiper2.classList.add('albums');
classicSwiper2.append(classicWrapper);

const classicArr = document.createElement('div');
classicArr.setAttribute("class","arr");

const classicTitle = document.createElement('p');
classicTitle.textContent = 'Classic';
classicTitle.style.textAlign = 'left';
classicTitle.style.font = 'normal normal bold 24px/29px Pretendard';
classicTitle.style.position = 'relative';

classicArr.append(classicTitle);

classicArr.append(classicSwiper2);

albums.append(classicArr);

for (let i = 0; i< classicData.length; i++) {
  const swiperSlide = document.createElement("div");
  swiperSlide.setAttribute("class",'swiper-slide');
  swiperSlide.style.width = '200px';
  swiperSlide.style.marginTop = '0';
  swiperSlide.style.marginRight = '40px';
  classicWrapper.append(swiperSlide);

  const classic = document.createElement('div');
  classic.setAttribute('class','album-box');
  classic.classList.add('classicPic');
  swiperSlide.append(classic);

  // 사진 부분 일괄 적용
  const classicSlide = document.querySelectorAll('.classicPic');
  const classicPic = classicSlide[i];
  if (i < 30) {
    classicPic.setAttribute("data-item", `${classicData[i].item}`);
    classicPic.setAttribute("name", `${classicData[i].name}`);
    classicPic.setAttribute("artist", `${classicData[i].artist}`);
    classicPic.setAttribute("date", `${classicData[i].date}`);
    classicPic.setAttribute("info", `${classicData[i].info}`);
    classicPic.setAttribute("info-sub", `${classicData[i].infoSub}`);
    classicPic.setAttribute("track-len", `${classicData[i].track.length}`);
    for (let j = 0; j < classicData[i].track.length; j++) {
      classicPic.setAttribute(`track-title${j}`, `${classicData[i].track[j].title}`);
      classicPic.setAttribute(`track-time${j}`, `${classicData[i].track[j].time}`);
    }

    classicPic.style.backgroundImage = `url("../img/main_album/main_album${classicData[i].img}.png")`;
    classicPic.style.boxShadow = `0px 0px 1px #e6e6e6`;
  }
} 

// dance
const danceBox = document.createElement('div');
danceBox.setAttribute('class','album-box');

inner.append(danceBox);

const danceWrapper = document.createElement('div');
danceWrapper.setAttribute('class','swiper-wrapper');
danceWrapper.style.marginTop = '30px';
danceWrapper.style.gap = '50px';

const danceSwiper2 = document.createElement('div');
danceSwiper2.setAttribute('class','swiper2');
danceSwiper2.classList.add('albums');
danceSwiper2.append(danceWrapper);

const danceArr = document.createElement("div");
danceArr.setAttribute("class","arr");

const danceTitle = document.createElement('p');
danceTitle.textContent = 'Dance';
danceTitle.style.textAlign = 'left';
danceTitle.style.font = 'normal normal bold 24px/29px Pretendard';
danceTitle.style.position = 'relative';

danceArr.append(danceTitle);

danceArr.append(danceSwiper2);

albums.append(danceArr);

for (let i = 0; i< danceData.length; i++) {
  const swiperSlide = document.createElement("div");
  swiperSlide.setAttribute("class",'swiper-slide');
  swiperSlide.style.width = '200px';
  swiperSlide.style.marginTop = '0';
  swiperSlide.style.marginRight = '40px';
  danceWrapper.append(swiperSlide);

  const dance = document.createElement('div');
  dance.setAttribute('class','album-box');
  dance.classList.add('dancePic');
  swiperSlide.append(dance);

  // 사진 부분 일괄 적용
  const danceSlide = document.querySelectorAll('.dancePic');
  const dancePic = danceSlide[i];
  if (i < 30) {
    dancePic.setAttribute("data-item", `${danceData[i].item}`);
    dancePic.setAttribute("name", `${danceData[i].name}`);
    dancePic.setAttribute("artist", `${danceData[i].artist}`);
    dancePic.setAttribute("date", `${danceData[i].date}`);
    dancePic.setAttribute("info", `${danceData[i].info}`);
    dancePic.setAttribute("info-sub", `${danceData[i].infoSub}`);
    dancePic.setAttribute("track-len", `${danceData[i].track.length}`);
    for (let j = 0; j < danceData[i].track.length; j++) {
      dancePic.setAttribute(`track-title${j}`, `${danceData[i].track[j].title}`);
      dancePic.setAttribute(`track-time${j}`, `${danceData[i].track[j].time}`);
    }

    dancePic.style.backgroundImage = `url("../img/main_album/main_album${danceData[i].img}.png")`;
    dancePic.style.boxShadow = `0px 0px 1px #e6e6e6`;
  }
} 

// 문서 로딩이 끝나면 실행되는 구문
$(document).ready(function () {

  let list = $(".list"); // All, KPOP, POP, Comedy 의 탭을 변수에 저장

  let swiperSlide = document.querySelectorAll(
    ".swiper2.albums .swiper-wrapper .swiper-slide"
  ); // 스와이퍼에 들어있는 슬라이드 '전부'를 배열로 받기

  const arrs = document.querySelectorAll('.arr');

  list.on("click", function () {

    list.removeClass("active");
    $(this).addClass("active");

    let dataFilter = $(this).attr("data-filter");

    const AllWrapper = document.querySelector('.albums .swiper-wrapper');
    const allSlide = document.querySelectorAll(".albums p");

    let genreZone = document.querySelector(".genre-zone");
    genreZone.textContent = "";
    let genre = document.createElement("p");

    if (dataFilter !== 'all') {
      inner.style.height = '300px';

      AllWrapper.style.display = 'flex';

      const allTitle = document.querySelector('.all-title');
      allTitle.style.display = 'none';

      for (let i = 0; i < arrs.length; i++ ) {
        arrs[i].style.display = 'none';
      }

      genre.textContent = $(this)[0].outerText;
      genre.setAttribute(
        "style",
        "text-align: left; font: normal normal bold 24px/29px Pretendard; padding-left: 80px;"
      );
      genreZone.append(genre);

      for (let i = 0; i < swiperSlide.length; i++) {
        // 스와이퍼 슬라이드(모두) 초기 설정 (hide 클래스: O, active 클래스: X)
        swiperSlide[i].classList.add("hide");
        swiperSlide[i].classList.remove("active");

        // dataFilter가 'all'이거나, 슬라이드 내부 div 요소(.album-box)의 data-item 속성이 dataFilter의 값과 '같을때' active 클래스 적용 (hide 클래스 X)
        if (
          swiperSlide[i].querySelector(".album-box").getAttribute("data-item") ===
            dataFilter
        ) {
          swiperSlide[i].classList.remove("hide");
          swiperSlide[i].classList.add("active");
        }
      }

      // All에 띄워둔 스와이퍼 슬라이드 영역 삭제
      for (let i = 0; i < allSlide.length; i++) {
        allSlide[i].style.display = 'none';
        const prevBtn = document.querySelector(`.swiper-button-prev.mainSwiper${i+1}`);
        prevBtn.style.display = 'none';
        const nextBtn = document.querySelector(`.swiper-button-next.mainSwiper${i+1}`);
        nextBtn.style.display = 'none';
      }
    } else {
      inner.style.height = '2200px';

      for (let i = 0; i < arrs.length; i++ ) {
        arrs[i].style.display = 'block';
      }

      const allTitle = document.querySelector('.all-title');
      allTitle.style.display = 'block';

      for (let i = 0; i < swiperSlide.length; i++) {
        if (
          dataFilter === "all"
        ) {
          swiperSlide[i].classList.remove("hide");
          swiperSlide[i].classList.add("active");
        }
      }

      // All에 띄워둔 스와이퍼 슬라이드 영역 복원
      for (let i = 0; i < allSlide.length; i++) {
        allSlide[i].style.display = 'block';
      }
    }
  });
});

const slideBox = document.querySelectorAll(".swiper-slide");
const albumBox = document.querySelectorAll(".album-box");

for (let i = 0; i < albumBox.length; i++) {
  albumBox[i].addEventListener("mouseover", function (e) {
    albumBox[i].textContent = "";
    const hoverBox = document.createElement("div");
    hoverBox.setAttribute("class", "hoverBox");
    albumBox[i].append(hoverBox);
    hoverBox.textContent = `${e.target.getAttribute("name")}`;
  });
  albumBox[i].addEventListener("mouseout", function (e) {
    albumBox[i].textContent = "";
  });
}