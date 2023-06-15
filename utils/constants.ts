/**
 * 카테고리 코드값
 */
const codes = {
  marketItemCategory: {
    depth1: [
      {
        code: "a1",
        codename: "농수축산물",
        depth2: [
          {
            code: "b1",
            codename: "야채/채소",
            depth3: [
              {
                code: "c01",
                codename: "양파",
              },
              {
                code: "c02",
                codename: "마늘",
              },
              {
                code: "c03",
                codename: "대파",
              },
              {
                code: "c04",
                codename: "상추",
              },
            ],
          },
          {
            code: "b2",
            codename: "과일",
            depth3: [
              {
                code: "c05",
                codename: "쌈채소",
              },
              {
                code: "c06",
                codename: "깻잎",
              },
              {
                code: "c07",
                codename: "시금치",
              },
              {
                code: "c08",
                codename: "잎채소",
              },
            ],
          },
          {
            code: "b3",
            codename: "쌀/잡곡/견과",
            depth3: [
              {
                code: "c09",
                codename: "나물",
              },
              {
                code: "c10",
                codename: "호박",
              },
              {
                code: "c11",
                codename: "가지",
              },
              {
                code: "c12",
                codename: "옥수수",
              },
            ],
          },
          {
            code: "b4",
            codename: "수산/건어물",
            depth3: [
              {
                code: "c17",
                codename: "skincare",
              },
              {
                code: "c18",
                codename: "fragrances",
              },
            ],
          },
          {
            code: "b5",
            codename: "축산/계란",
            depth3: [
              {
                code: "c13",
                codename: "오이",
              },
              {
                code: "c14",
                codename: "파프리카",
              },
              {
                code: "c15",
                codename: "피망",
              },
              {
                code: "c16",
                codename: "고추",
              },
            ],
          },
          {
            code: "b6",
            codename: "AA",
            depth3: [
              {
                code: "c19",
                codename: "laptops",
              },
            ],
          },
        ],
      },
      {
        code: "a2",
        codename: "가공식품",
        depth2: [
          {
            code: "b7",
            codename: "SS",
            depth3: [
              {
                code: "c1",
                codename: "양파",
              },
              {
                code: "c2",
                codename: "마늘",
              },
              {
                code: "c3",
                codename: "대파",
              },
              {
                code: "c4",
                codename: "상추",
              },
            ],
          },
          {
            code: "b8",
            codename: "DD",
            depth3: [
              {
                code: "c5",
                codename: "쌈채소",
              },
              {
                code: "c6",
                codename: "깻잎",
              },
              {
                code: "c7",
                codename: "시금치",
              },
              {
                code: "c8",
                codename: "잎채소",
              },
            ],
          },
          {
            code: "b9",
            codename: "FF",
            depth3: [
              {
                code: "c17",
                codename: "skincare",
              },
              {
                code: "c18",
                codename: "fragrances",
              },
            ],
          },
          {
            code: "b10",
            codename: "ZZ",
            depth3: [
              {
                code: "c19",
                codename: "laptops",
              },
            ],
          },
        ],
      },
      {
        code: "a3",
        codename: "배달용품",
        depth2: [
          {
            code: "b11",
            codename: "XX",
            depth3: [
              {
                code: "c01",
                codename: "양파",
              },
              {
                code: "c02",
                codename: "마늘",
              },
              {
                code: "c03",
                codename: "대파",
              },
              {
                code: "c04",
                codename: "상추",
              },
            ],
          },
          {
            code: "b12",
            codename: "CC",
            depth3: [
              {
                code: "c05",
                codename: "쌈채소",
              },
              {
                code: "c06",
                codename: "깻잎",
              },
              {
                code: "c07",
                codename: "시금치",
              },
              {
                code: "c08",
                codename: "잎채소",
              },
            ],
          },
          {
            code: "b13",
            codename: "VV",
            depth3: [
              {
                code: "c17",
                codename: "skincare",
              },
              {
                code: "c18",
                codename: "fragrances",
              },
            ],
          },
          {
            code: "b14",
            codename: "BB",
            depth3: [
              {
                code: "c19",
                codename: "laptops",
              },
            ],
          },
        ],
      },
    ],
    filterList: [
      {
        code: "c01",
        codename: "양파",
      },
      {
        code: "c02",
        codename: "마늘",
      },
      {
        code: "c03",
        codename: "대파",
      },
      {
        code: "c04",
        codename: "상추",
      },
      {
        code: "c05",
        codename: "쌈채소",
      },
      {
        code: "c06",
        codename: "깻잎",
      },
      {
        code: "c07",
        codename: "시금치",
      },
      {
        code: "c08",
        codename: "잎채소",
      },
      {
        code: "c09",
        codename: "나물",
      },
      {
        code: "c10",
        codename: "호박",
      },
      {
        code: "c11",
        codename: "가지",
      },
      {
        code: "c12",
        codename: "옥수수",
      },
      {
        code: "c13",
        codename: "오이",
      },
      {
        code: "c14",
        codename: "파프리카",
      },
      {
        code: "c15",
        codename: "피망",
      },
      {
        code: "c16",
        codename: "고추",
      },
      {
        code: "c17",
        codename: "skincare",
      },
      {
        code: "c18",
        codename: "fragrances",
      },

      {
        code: "c19",
        codename: "laptops",
      },
    ],
  },
};
export default Object.freeze(codes);
