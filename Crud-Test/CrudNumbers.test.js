const { createData, readAll, readByIdx, updateData, deleteData } = require ("./CrudNumbers");
describe('test crud numbers', () => {
    test("When create should succes", () => {
        let bank = [];
        let result = createData(bank, 5)
        expect(result).toEqual([5]);
    });

    test("when readAll should succes", () => {
        let bank = [3, 4, 5];
        let result = readAll(bank)
        expect(result).toEqual([3, 4, 5]);
    });

    test("when readByIdx should succes", () => {
        let bank = [3, 4, 5];
        let result = readByIdx(bank, 2)
        expect(result).toEqual(5);
    });

    test("when updateData should succes", () => {
        let bank = [3, 4, 5];
        let result = updateData(bank, 1, 8)
        expect(result).toEqual([3, 8, 5]);
    });

    test("when deleteData should succes", () => {
        let bank = [2,3,4,5];
        let result = deleteData(bank, 1,2,3)
        expect(result).toEqual([2]);
    });
});