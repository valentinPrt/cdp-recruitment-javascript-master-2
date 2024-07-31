const { filter, count } = require("./utils");

describe("test utils.js", () => {
  describe("filter", () => {
    it("with empty params should return undefined", () => {
      const result = filter();
      expect(result).toEqual([]);
    });

    it("with full item but no word should empty array", () => {
      const result = filter([
        {
          name: "country1",
          people: [
            {
              name: "people1",
              animals: [
                {
                  name: "animal1",
                },
              ],
            },
          ],
        },
      ]);
      expect(result).toEqual([]);
    });

    it("with full item should filter and return right item", () => {
      const result = filter(
        [
          {
            name: "country1",
            people: [
              {
                name: "people1",
                animals: [
                  {
                    name: "animal1",
                  },
                  {
                    name: "wrongValue",
                  },
                ],
              },
            ],
          },
        ],
        "animal"
      );

      expect(result).toEqual([
        {
          name: "country1",
          people: [
            {
              name: "people1",
              animals: [
                {
                  name: "animal1",
                },
              ],
            },
          ],
        },
      ]);
    });
  });

  describe("count", () => {
    it("without params, should return empty array", () => {
      const result = count();
      expect(result).toEqual([])
    });

    it("without right data, should add count in name string", () => {
        const result = count([
            {
                name: "country1",
                people: [
                  {
                    name: "people1",
                    animals: [
                      {
                        name: "animal1",
                      },
                      {
                        name: "animal2",
                      },
                      {
                        name: "animal3",
                      },
                    ],
                  },
                ],
              },
        ]);
        expect(result).toEqual(
            [
                {
                    name: "country1 [1]",
                    people: [
                      {
                        name: "people1 [3]",
                        animals: [
                          {
                            name: "animal1",
                          },
                          {
                            name: "animal2",
                          },
                          {
                            name: "animal3",
                          },
                        ],
                      },
                    ],
                  },
            ]
        );
      });
  });
});
