import { SongDataType } from "../Common/ChartCard/ChartCard";

interface ChartDataResponse {
  platform: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
  chart: SongDataType[];
  date: string;
  hour: number;
}

export default function dummydata() {
  const data: ChartDataResponse = {
    platform: "Melon",
    date: "2023-09-01",
    hour: 15,
    chart: [
      {
        rank: 1,
        previous: 1,
        likes: "168617",
        song: {
          id: 36617841,
          name: "Seven (feat. Latto) - Clean Ver.",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11286070.jpg?v=1693548480868",
          artists: {
            id: 725987,
            name: "정국",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/725987.jpg?v=1689317703945",
          },
        },
      },
      {
        rank: 2,
        previous: 2,
        likes: "141224",
        song: {
          id: 36599950,
          name: "Super Shy",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11281456.jpg?v=1693548480769",
          artists: {
            id: 3114174,
            name: "NewJeans",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3114174.jpg?v=1688712903971",
          },
        },
      },
      {
        rank: 3,
        previous: 3,
        likes: "95372",
        song: {
          id: 36635522,
          name: "ETA",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11281456.jpg?v=1693548480769",
          artists: {
            id: 3114174,
            name: "NewJeans",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3114174.jpg?v=1688712903971",
          },
        },
      },
      {
        rank: 4,
        previous: 4,
        likes: "49572",
        song: {
          id: 36502910,
          name: "모래 알갱이",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11258233.jpg?v=1693548480648",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 5,
        previous: 5,
        likes: "37021",
        song: {
          id: 36681074,
          name: "Fast Forward",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11300771.jpg?v=1693548782383",
          artists: {
            id: 968260,
            name: "전소미",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/968260.jpg?v=1690182008634",
          },
        },
      },
      {
        rank: 6,
        previous: 6,
        likes: "202196",
        song: {
          id: 34061322,
          name: "사랑은 늘 도망가",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10735654.jpg?v=1693519555028",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 7,
        previous: 10,
        likes: "122959",
        song: {
          id: 36382580,
          name: "헤어지자 말해요",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11227533.jpg?v=1688655608551",
          artists: {
            id: 738480,
            name: "박재정",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/738480.jpg?v=1687702614810",
          },
        },
      },
      {
        rank: 8,
        previous: 7,
        likes: "97729",
        song: {
          id: 34908740,
          name: "우리들의 블루스",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10923444.jpg?v=1693548480449",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 9,
        previous: 8,
        likes: "28061",
        song: {
          id: 36713849,
          name: "Love Lee",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11309190.jpg?v=1693530109486",
          artists: {
            id: 712452,
            name: "AKMU (악뮤)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/712452.jpg?v=1692687434533",
          },
        },
      },
      {
        rank: 10,
        previous: 9,
        likes: "79511",
        song: {
          id: 35008524,
          name: "다시 만날 수 있을까",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10923444.jpg?v=1693548480449",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 11,
        previous: 16,
        likes: "42554",
        song: {
          id: 36616378,
          name: "사막에서 꽃을 피우듯",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11285867.jpg?v=1693490658486",
          artists: {
            id: 673033,
            name: "우디 (Woody)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/673033.jpg?v=1689326403893",
          },
        },
      },
      {
        rank: 12,
        previous: 11,
        likes: "67977",
        song: {
          id: 35008525,
          name: "무지개",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10923444.jpg?v=1693548480449",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 13,
        previous: 18,
        likes: "195547",
        song: {
          id: 36356993,
          name: "I AM",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11211297.jpg?v=1688396408220",
          artists: {
            id: 3055146,
            name: "IVE (아이브)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3055146.jpg?v=1687701750473",
          },
        },
      },
      {
        rank: 14,
        previous: 12,
        likes: "50469",
        song: {
          id: 35834584,
          name: "Polaroid",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11102375.jpg?v=1692915304930",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 15,
        previous: 13,
        likes: "55455",
        song: {
          id: 35008527,
          name: "아버지",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10923444.jpg?v=1693548480449",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 16,
        previous: 14,
        likes: "55760",
        song: {
          id: 35834583,
          name: "London Boy",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11102375.jpg?v=1692915304930",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 17,
        previous: 15,
        likes: "170503",
        song: {
          id: 32508053,
          name: "이제 나만 믿어요",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10412319.jpg?v=1693490652424",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 18,
        previous: 22,
        likes: "132476",
        song: {
          id: 36430773,
          name: "퀸카 (Queencard)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11240232.jpg?v=1693490656771",
          artists: {
            id: 2137482,
            name: "(여자)아이들",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/2137482.jpg?v=1687700802529",
          },
        },
      },
      {
        rank: 19,
        previous: 17,
        likes: "51283",
        song: {
          id: 35008534,
          name: "인생찬가",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10923444.jpg?v=1693548480449",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 20,
        previous: 19,
        likes: "52543",
        song: {
          id: 35008528,
          name: "A bientot",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10923444.jpg?v=1693548480449",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 21,
        previous: 20,
        likes: "50233",
        song: {
          id: 35008526,
          name: "손이 참 곱던 그대",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10923444.jpg?v=1693548480449",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 22,
        previous: 25,
        likes: "139281",
        song: {
          id: 36490426,
          name: "Steal The Show (From “엘리멘탈”)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11254858.jpg?v=1693490657111",
          artists: {
            id: 1956543,
            name: "Lauv",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/1956543.jpg?v=1691670672196",
          },
        },
      },
      {
        rank: 23,
        previous: 21,
        likes: "51415",
        song: {
          id: 35008531,
          name: "사랑해 진짜",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10923444.jpg?v=1693548480449",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 24,
        previous: 23,
        likes: "49350",
        song: {
          id: 35008532,
          name: "연애편지",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10923444.jpg?v=1693548480449",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 25,
        previous: 24,
        likes: "96963",
        song: {
          id: 36581408,
          name: "Still With You",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11277386.jpg?v=1693522875867",
          artists: {
            id: 725987,
            name: "정국",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/725987.jpg?v=1689317703945",
          },
        },
      },
      {
        rank: 26,
        previous: 26,
        likes: "48822",
        song: {
          id: 35008530,
          name: "보금자리",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10923444.jpg?v=1693548480449",
          artists: {
            id: 994944,
            name: "임영웅",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994944.jpg?v=1687702993810",
          },
        },
      },
      {
        rank: 27,
        previous: 27,
        likes: "24583",
        song: {
          id: 36699655,
          name: "Bubble",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11305820.jpg?v=1693490659286",
          artists: {
            id: 2899290,
            name: "STAYC(스테이씨)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/2899290.jpg?v=1692176979668",
          },
        },
      },
      {
        rank: 28,
        previous: 28,
        likes: "120931",
        song: {
          id: 36416114,
          name: "Spicy",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11236264.jpg?v=1689033608993",
          artists: {
            id: 2899555,
            name: "aespa",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/2899555.jpg?v=1693378359356",
          },
        },
      },
      {
        rank: 29,
        previous: 29,
        likes: "279135",
        song: {
          id: 35454426,
          name: "Hype boy",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11011565.jpg?v=1693490654438",
          artists: {
            id: 3114174,
            name: "NewJeans",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3114174.jpg?v=1688712903971",
          },
        },
      },
      {
        rank: 30,
        previous: 32,
        likes: "71629",
        song: {
          id: 36599949,
          name: "New Jeans",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11281456.jpg?v=1693548480769",
          artists: {
            id: 3114174,
            name: "NewJeans",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3114174.jpg?v=1688712903971",
          },
        },
      },
      {
        rank: 31,
        previous: 31,
        likes: "104151",
        song: {
          id: 36411344,
          name: "이브, 프시케 그리고 푸른 수염의 아내",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11234678.jpg?v=1693490656567",
          artists: {
            id: 3092950,
            name: "LE SSERAFIM (르세라핌)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3092950.jpg?v=1687701865931",
          },
        },
      },
      {
        rank: 32,
        previous: 30,
        likes: "28916",
        song: {
          id: 36713850,
          name: "후라이의 꿈",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11309190.jpg?v=1693530109486",
          artists: {
            id: 712452,
            name: "AKMU (악뮤)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/712452.jpg?v=1692687434533",
          },
        },
      },
      {
        rank: 33,
        previous: 37,
        likes: "148976",
        song: {
          id: 36318125,
          name: "Kitsch",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11211297.jpg?v=1688396408220",
          artists: {
            id: 3055146,
            name: "IVE (아이브)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3055146.jpg?v=1687701750473",
          },
        },
      },
      {
        rank: 34,
        previous: 33,
        likes: "37062",
        song: {
          id: 36691823,
          name: "Love Me Again",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11303638.jpg?v=1693544565690",
          artists: {
            id: 725989,
            name: "V",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/725989.jpg?v=1691737192028",
          },
        },
      },
      {
        rank: 35,
        previous: 34,
        likes: "458062",
        song: {
          id: 32872978,
          name: "Dynamite",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10479150.jpg?v=1693490652519",
          artists: {
            id: 672375,
            name: "방탄소년단",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/672375.jpg?v=1687702457071",
          },
        },
      },
      {
        rank: 36,
        previous: 35,
        likes: "67021",
        song: {
          id: 36516320,
          name: "Take Two",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11261503.jpg?v=1693490657418",
          artists: {
            id: 672375,
            name: "방탄소년단",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/672375.jpg?v=1687702457071",
          },
        },
      },
      {
        rank: 37,
        previous: 39,
        likes: "269459",
        song: {
          id: 35945927,
          name: "Ditto",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11127145.jpg?v=1693490655063",
          artists: {
            id: 3114174,
            name: "NewJeans",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3114174.jpg?v=1688712903971",
          },
        },
      },
      {
        rank: 38,
        previous: 42,
        likes: "115919",
        song: {
          id: 36411342,
          name: "UNFORGIVEN (feat. Nile Rodgers)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11234678.jpg?v=1693490656567",
          artists: {
            id: 3092950,
            name: "LE SSERAFIM (르세라핌)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3092950.jpg?v=1687701865931",
          },
        },
      },
      {
        rank: 39,
        previous: 41,
        likes: "111246",
        song: {
          id: 35299693,
          name: "Summer (Feat. BE’O (비오))",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10984354.jpg?v=1693490654363",
          artists: {
            id: 943079,
            name: "Paul Blanco",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/943079.jpg?v=1687702917718",
          },
        },
      },
      {
        rank: 40,
        previous: 38,
        likes: "550463",
        song: {
          id: 30244931,
          name: "봄날",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10037969.jpg?v=1693490652252",
          artists: {
            id: 672375,
            name: "방탄소년단",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/672375.jpg?v=1687702457071",
          },
        },
      },
      {
        rank: 41,
        previous: 36,
        likes: "67941",
        song: {
          id: 36313117,
          name: "Like Crazy",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11205764.jpg?v=1693490655688",
          artists: {
            id: 725985,
            name: "지민",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/725985.jpg?v=1687702589541",
          },
        },
      },
      {
        rank: 42,
        previous: 44,
        likes: "22178",
        song: {
          id: 36582681,
          name: "CAKE",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11277647.jpg?v=1693490657891",
          artists: {
            id: 2622030,
            name: "ITZY (있지)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/2622030.jpg?v=1689231903544",
          },
        },
      },
      {
        rank: 43,
        previous: 46,
        likes: "21907",
        song: {
          id: 35667692,
          name: "그중에 그대를 만나",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11062828.jpg?v=1693548480543",
          artists: {
            id: 720018,
            name: "김호중",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/720018.jpg?v=1687702569017",
          },
        },
      },
      {
        rank: 44,
        previous: 45,
        likes: "28859",
        song: {
          id: 36694466,
          name: "Rainy Days",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11303638.jpg?v=1693544565690",
          artists: {
            id: 725989,
            name: "V",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/725989.jpg?v=1691737192028",
          },
        },
      },
      {
        rank: 45,
        previous: 43,
        likes: "128811",
        song: {
          id: 35849863,
          name: "Dreamers [Music from the FIFA World Cup Qatar 2022 Official Soundtrack] (Feat. FIFA Sound)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11106209.jpg?v=1693490654826",
          artists: {
            id: 725987,
            name: "정국",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/725987.jpg?v=1689317703945",
          },
        },
      },
      {
        rank: 46,
        previous: 47,
        likes: "76325",
        song: {
          id: 36351997,
          name: "사람 Pt.2 (feat. 아이유)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11219412.jpg?v=1693490656117",
          artists: {
            id: 725988,
            name: "Agust D",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/725988.jpg?v=1687702589871",
          },
        },
      },
      {
        rank: 47,
        previous: 40,
        likes: "292344",
        song: {
          id: 33507137,
          name: "Butter",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10612483.jpg?v=1693490652811",
          artists: {
            id: 672375,
            name: "방탄소년단",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/672375.jpg?v=1687702457071",
          },
        },
      },
      {
        rank: 48,
        previous: 49,
        likes: "233998",
        song: {
          id: 35454425,
          name: "Attention",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11011565.jpg?v=1693490654438",
          artists: {
            id: 3114174,
            name: "NewJeans",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3114174.jpg?v=1688712903971",
          },
        },
      },
      {
        rank: 49,
        previous: 51,
        likes: "150248",
        song: {
          id: 36391236,
          name: "손오공",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11229537.jpg?v=1693490656243",
          artists: {
            id: 861436,
            name: "세븐틴 (SEVENTEEN)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/861436.jpg?v=1687702809620",
          },
        },
      },
      {
        rank: 50,
        previous: 50,
        likes: "192701",
        song: {
          id: 35985167,
          name: "OMG",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11127145.jpg?v=1693490655063",
          artists: {
            id: 3114174,
            name: "NewJeans",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3114174.jpg?v=1688712903971",
          },
        },
      },
      {
        rank: 51,
        previous: 48,
        likes: "39167",
        song: {
          id: 36710003,
          name: "KIDDING",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11308283.jpg?v=1693497887328",
          artists: {
            id: 3059851,
            name: "이세계아이돌",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3059851.jpg?v=1687701766508",
          },
        },
      },
      {
        rank: 52,
        previous: 52,
        likes: "235892",
        song: {
          id: 35546497,
          name: "After LIKE",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11034298.jpg?v=1687936204962",
          artists: {
            id: 3055146,
            name: "IVE (아이브)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3055146.jpg?v=1687701750473",
          },
        },
      },
      {
        rank: 53,
        previous: 56,
        likes: "228107",
        song: {
          id: 33666269,
          name: "Permission to Dance",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10648182.jpg?v=1693490653038",
          artists: {
            id: 672375,
            name: "방탄소년단",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/672375.jpg?v=1687702457071",
          },
        },
      },
      {
        rank: 54,
        previous: 54,
        likes: "42807",
        song: {
          id: 36632907,
          name: "Cool With You",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11281456.jpg?v=1693548480769",
          artists: {
            id: 3114174,
            name: "NewJeans",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3114174.jpg?v=1688712903971",
          },
        },
      },
      {
        rank: 55,
        previous: 53,
        likes: "242205",
        song: {
          id: 34847378,
          name: "LOVE DIVE",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10909179.jpg?v=1693490654015",
          artists: {
            id: 3055146,
            name: "IVE (아이브)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3055146.jpg?v=1687701750473",
          },
        },
      },
      {
        rank: 56,
        previous: 55,
        likes: "311586",
        song: {
          id: 34819473,
          name: "사건의 지평선",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10903868.jpg?v=1693490653914",
          artists: {
            id: 203912,
            name: "윤하 (YOUNHA)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/203912.jpg?v=1687700727816",
          },
        },
      },
      {
        rank: 57,
        previous: 57,
        likes: "183587",
        song: {
          id: 35640751,
          name: "I Don't Think That I Like Her",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10844485.jpg?v=1693490653471",
          artists: {
            id: 838654,
            name: "Charlie Puth",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/838654.jpg?v=1687702773344",
          },
        },
      },
      {
        rank: 58,
        previous: 61,
        likes: "57639",
        song: {
          id: 36241824,
          name: "on the street (with J. Cole)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11194815.jpg?v=1693378980531",
          artists: {
            id: 725984,
            name: "j-hope",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/725984.jpg?v=1692341670176",
          },
        },
      },
      {
        rank: 59,
        previous: 65,
        likes: "29465",
        song: {
          id: 36595401,
          name: "잘 지내자, 우리 (여름날 우리 X 로이킴)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11280645.jpg?v=1693490658050",
          artists: {
            id: 699632,
            name: "로이킴",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/699632.jpg?v=1688712904386",
          },
        },
      },
      {
        rank: 60,
        previous: 59,
        likes: "170678",
        song: {
          id: 36110996,
          name: "파이팅 해야지 (Feat. 이영지)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11166539.jpg?v=1693490655376",
          artists: {
            id: 2112233,
            name: "부석순 (SEVENTEEN)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/2112233.jpg?v=1687700782023",
          },
        },
      },
      {
        rank: 61,
        previous: 58,
        likes: "32986",
        song: {
          id: 36518341,
          name: "나에게 그대만이",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11262009.jpg?v=1693490657512",
          artists: {
            id: 2893700,
            name: "탑현",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/2893700.jpg?v=1687701410688",
          },
        },
      },
      {
        rank: 62,
        previous: 62,
        likes: "103288",
        song: {
          id: 36105548,
          name: "Teddy Bear",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11165170.jpg?v=1693490655268",
          artists: {
            id: 2899290,
            name: "STAYC(스테이씨)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/2899290.jpg?v=1692176979668",
          },
        },
      },
      {
        rank: 63,
        previous: 63,
        likes: "119613",
        song: {
          id: 36331121,
          name: "꽃",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11214411.jpg?v=1693490655886",
          artists: {
            id: 995174,
            name: "지수 (JISOO)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/995174.jpg?v=1687702995074",
          },
        },
      },
      {
        rank: 64,
        previous: 70,
        likes: "27521",
        song: {
          id: 36500102,
          name: "사실말야내가말야그게그러니까말이야",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11257305.jpg?v=1693490657194",
          artists: {
            id: 858125,
            name: "케이시 (Kassy)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/858125.jpg?v=1687702794471",
          },
        },
      },
      {
        rank: 65,
        previous: 64,
        likes: "192923",
        song: {
          id: 34657844,
          name: "사랑인가 봐",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10871162.jpg?v=1693490653671",
          artists: {
            id: 839732,
            name: "멜로망스",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/839732.jpg?v=1687702778522",
          },
        },
      },
      {
        rank: 66,
        previous: 68,
        likes: "191043",
        song: {
          id: 8037843,
          name: "Dangerously",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/2336926.jpg?v=1693490660256",
          artists: {
            id: 838654,
            name: "Charlie Puth",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/838654.jpg?v=1687702773344",
          },
        },
      },
      {
        rank: 67,
        previous: 60,
        likes: "273761",
        song: {
          id: 4446485,
          name: "너의 모든 순간",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/2232505.jpg?v=1693490660186",
          artists: {
            id: 3305,
            name: "성시경",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3305.jpg?v=1687702069959",
          },
        },
      },
      {
        rank: 68,
        previous: 71,
        likes: "166836",
        song: {
          id: 35931532,
          name: "Candy",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11124139.jpg?v=1693490654995",
          artists: {
            id: 1066419,
            name: "NCT DREAM",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/1066419.jpg?v=1688712903846",
          },
        },
      },
      {
        rank: 69,
        previous: 69,
        likes: "64503",
        song: {
          id: 36546894,
          name: "ISTJ",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11268653.jpg?v=1693490657647",
          artists: {
            id: 1066419,
            name: "NCT DREAM",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/1066419.jpg?v=1688712903846",
          },
        },
      },
      {
        rank: 70,
        previous: 66,
        likes: "61109",
        song: {
          id: 36180700,
          name: "심(心)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11180278.jpg?v=1687935311098",
          artists: {
            id: 524801,
            name: "DK(디셈버)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/524801.jpg?v=1687702264945",
          },
        },
      },
      {
        rank: 71,
        previous: 67,
        likes: "38838",
        song: {
          id: 36334401,
          name: "사랑하지 않아서 그랬어",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11215072.jpg?v=1693490655968",
          artists: {
            id: 471741,
            name: "임한별",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/471741.jpg?v=1687702221205",
          },
        },
      },
      {
        rank: 72,
        previous: 74,
        likes: "22226",
        song: {
          id: 36637828,
          name: "여름이 들려 (Summer Comes)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11290943.jpg?v=1693490658709",
          artists: {
            id: 857994,
            name: "오마이걸 (OH MY GIRL)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/857994.jpg?v=1690189504258",
          },
        },
      },
      {
        rank: 73,
        previous: 72,
        likes: "18695",
        song: {
          id: 36065180,
          name: "당신을 만나",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11154876.jpg?v=1693476181208",
          artists: {
            id: 720018,
            name: "김호중",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/720018.jpg?v=1687702569017",
          },
        },
      },
      {
        rank: 74,
        previous: 75,
        likes: "167914",
        song: {
          id: 35729104,
          name: "ANTIFRAGILE",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11078496.jpg?v=1693490654604",
          artists: {
            id: 3092950,
            name: "LE SSERAFIM (르세라핌)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3092950.jpg?v=1687701865931",
          },
        },
      },
      {
        rank: 75,
        previous: 79,
        likes: "17020",
        song: {
          id: 36517231,
          name: "사랑의 바보",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11261705.jpg?v=1687935916111",
          artists: {
            id: 484881,
            name: "제이세라",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/484881.jpg?v=1687702234814",
          },
        },
      },
      {
        rank: 76,
        previous: 73,
        likes: "90080",
        song: {
          id: 36001290,
          name: "건물 사이에 피어난 장미 (Rose Blossom)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11140018.jpg?v=1693490655164",
          artists: {
            id: 3064111,
            name: "H1-KEY (하이키)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3064111.jpg?v=1692781532252",
          },
        },
      },
      {
        rank: 77,
        previous: 84,
        likes: "31573",
        song: {
          id: 36613696,
          name: "I WANT",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11285148.jpg?v=1693490658394",
          artists: {
            id: 3055146,
            name: "IVE (아이브)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3055146.jpg?v=1687701750473",
          },
        },
      },
      {
        rank: 78,
        previous: 80,
        likes: "39049",
        song: {
          id: 36404853,
          name: "물론",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11233031.jpg?v=1693490656495",
          artists: {
            id: 28801,
            name: "허각",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/28801.jpg?v=1687701360508",
          },
        },
      },
      {
        rank: 79,
        previous: 81,
        likes: "29672",
        song: {
          id: 36480197,
          name: "첫 키스에 내 심장은 120BPM",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11252233.jpg?v=1693490657017",
          artists: {
            id: 994005,
            name: "경서",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/994005.jpg?v=1687702991315",
          },
        },
      },
      {
        rank: 80,
        previous: 78,
        likes: "37423",
        song: {
          id: 36635524,
          name: "ASAP",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11281456.jpg?v=1693548480769",
          artists: {
            id: 3114174,
            name: "NewJeans",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3114174.jpg?v=1688712903971",
          },
        },
      },
      {
        rank: 81,
        previous: 86,
        likes: "270926",
        song: {
          id: 33658563,
          name: "STAY",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10646395.jpg?v=1693490652967",
          artists: {
            id: 2743730,
            name: "The Kid LAROI",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/2743730.jpg?v=1687701162731",
          },
        },
      },
      {
        rank: 82,
        previous: 77,
        likes: "56550",
        song: {
          id: 36428682,
          name: "잠깐 시간 될까",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11239639.jpg?v=1693490656672",
          artists: {
            id: 2138620,
            name: "이무진",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/2138620.jpg?v=1687700809497",
          },
        },
      },
      {
        rank: 83,
        previous: 76,
        likes: "19736",
        song: {
          id: 35690912,
          name: "나의 목소리로",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11069174.jpg?v=1693476180898",
          artists: {
            id: 720018,
            name: "김호중",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/720018.jpg?v=1687702569017",
          },
        },
      },
      {
        rank: 84,
        previous: 83,
        likes: "5512",
        song: {
          id: 36713131,
          name: "미친 사랑의 노래",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11308936.jpg?v=1693490659510",
          artists: {
            id: 428803,
            name: "김연지",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/428803.jpg?v=1687783461696",
          },
        },
      },
      {
        rank: 85,
        previous: 82,
        likes: "115107",
        song: {
          id: 36206259,
          name: "Cupid",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11188020.jpg?v=1693490655486",
          artists: {
            id: 3156910,
            name: "FIFTY FIFTY",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3156910.jpg?v=1687701991483",
          },
        },
      },
      {
        rank: 86,
        previous: 105,
        likes: "172758",
        song: {
          id: 34864406,
          name: "That's Hilarious",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10844485.jpg?v=1693490653471",
          artists: {
            id: 838654,
            name: "Charlie Puth",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/838654.jpg?v=1687702773344",
          },
        },
      },
      {
        rank: 87,
        previous: 93,
        likes: "172297",
        song: {
          id: 34431086,
          name: "취중고백",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10816959.jpg?v=1693490653373",
          artists: {
            id: 839736,
            name: "김민석 (멜로망스)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/839736.jpg?v=1687702778853",
          },
        },
      },
      {
        rank: 88,
        previous: 99,
        likes: "64099",
        song: {
          id: 36430774,
          name: "Allergy",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11240232.jpg?v=1693490656771",
          artists: {
            id: 2137482,
            name: "(여자)아이들",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/2137482.jpg?v=1687700802529",
          },
        },
      },
      {
        rank: 89,
        previous: 91,
        likes: "57600",
        song: {
          id: 36601157,
          name: "In Bloom",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11281739.jpg?v=1693490658262",
          artists: {
            id: 3466604,
            name: "ZEROBASEONE (제로베이스원)",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/3466604.jpg?v=1688980204248",
          },
        },
      },
      {
        rank: 90,
        previous: 100,
        likes: "86736",
        song: {
          id: 35252996,
          name: "해요 (2022)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10975276.jpg?v=1693490654252",
          artists: {
            id: 1024489,
            name: "#안녕",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/1024489.jpg?v=1687700343771",
          },
        },
      },
      {
        rank: 91,
        previous: 98,
        likes: "25562",
        song: {
          id: 36440243,
          name: "사랑..그게 뭔데",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11242411.jpg?v=1693490656885",
          artists: {
            id: 227595,
            name: "지아",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/227595.jpg?v=1687700883334",
          },
        },
      },
      {
        rank: 92,
        previous: 92,
        likes: "125935",
        song: {
          id: 30444778,
          name: "민들레 (single ver.)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10066942.jpg?v=1693490652319",
          artists: {
            id: 773385,
            name: "우효",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/773385.jpg?v=1687702678447",
          },
        },
      },
      {
        rank: 93,
        previous: 102,
        likes: "176477",
        song: {
          id: 33496587,
          name: "다정히 내 이름을 부르면",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10610525.jpg?v=1693490652680",
          artists: {
            id: 2863470,
            name: "경서예지",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/2863470.jpg?v=1690268103735",
          },
        },
      },
      {
        rank: 94,
        previous: 106,
        likes: "46346",
        song: {
          id: 36546897,
          name: "Yogurt Shake",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11268653.jpg?v=1693490657647",
          artists: {
            id: 1066419,
            name: "NCT DREAM",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/1066419.jpg?v=1688712903846",
          },
        },
      },
      {
        rank: 95,
        previous: 85,
        likes: "18084",
        song: {
          id: 35609035,
          name: "인생은 뷰티풀",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11048906.jpg?v=1693468929447",
          artists: {
            id: 720018,
            name: "김호중",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/720018.jpg?v=1687702569017",
          },
        },
      },
      {
        rank: 96,
        previous: 89,
        likes: "19512",
        song: {
          id: 36726727,
          name: "Baggy Jeans",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11312119.jpg?v=1693378989342",
          artists: {
            id: 960278,
            name: "NCT U",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/960278.jpg?v=1692602026772",
          },
        },
      },
      {
        rank: 97,
        previous: 103,
        likes: "241383",
        song: {
          id: 34754292,
          name: "TOMBOY",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10890384.jpg?v=1693490653799",
          artists: {
            id: 2137482,
            name: "(여자)아이들",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/2137482.jpg?v=1687700802529",
          },
        },
      },
      {
        rank: 98,
        previous: 87,
        likes: "21634",
        song: {
          id: 35307770,
          name: "빛이 나는 사람",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10985673.jpg?v=1693479803326",
          artists: {
            id: 720018,
            name: "김호중",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/720018.jpg?v=1687702569017",
          },
        },
      },
      {
        rank: 99,
        previous: 90,
        likes: "25838",
        song: {
          id: 32906341,
          name: "애인이 되어줄게요 (Prod. 알고보니, 혼수상태)",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/10486198.jpg?v=1693479803009",
          artists: {
            id: 720018,
            name: "김호중",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/720018.jpg?v=1687702569017",
          },
        },
      },
      {
        rank: 100,
        previous: 88,
        likes: "18482",
        song: {
          id: 35466599,
          name: "주마등",
          image:
            "https://cdn.chartin.me/metadata/image/album/melon/11014554.jpg?v=1693479803423",
          artists: {
            id: 720018,
            name: "김호중",
            image:
              "https://cdn.chartin.me/metadata/image/artist/melon/720018.jpg?v=1687702569017",
          },
        },
      },
    ],
  };
  return data;
}
