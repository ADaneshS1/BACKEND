const { createStr, readByIdx, updateStr, deleteStr } = require("./CrudStrings");

describe("Test CrudStrings", () => {
    test("create should succes", () => {
        let bank = [];
        let result = createStr(bank, "apple")
        expect(result).toEqual(["apple"])
    })

    test(" readByIdx should succes", () => {
        let bank = ['apple', 'mango', 'orange'];
        let result = readByIdx(bank, 1)
        expect(result).toEqual("mango")
    })

    test("updateStr should succes", () => {
        let bank = ['apple', 'mango', 'orange'];
        let result = updateStr(bank, 2, "pear")
        expect(result).toEqual(["apple", "mango", "pear"])
    })

    test("deleteStr should succes", () => {
        let bank = ['apple', 'mango', 'orange'];
        let result = deleteStr(bank, 0)
        expect(result).toEqual(["mango", "orange"])
    })
})