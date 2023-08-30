const { createObj, addObj, findById, updateObj, deleteObj } = require("./CrudObj");

describe("Test CRUD Obj", () => {
    test("when create obj should success", () => {
        let bank = []
        let result = createObj(bank, {id:1, name:'adi'});
        expect(result).toEqual([{id:1, name:'adi'}]);
    });

    test("when add obj should success", () => {
        let bank = [{id:1, name:'adi'}]
        let result = addObj(bank, {id:2, name:'budi'});
        expect(result).toEqual([
            {id:1, name:'adi'},
            {id:2, name:'budi'}
        ]);
    });

    test("when find obj should success", () => {
        let bank = [
            {id:1, name:'adi'},
            {id:2, name:'budi'}
        ]
        let result = findById(bank, 2); //  Pakai dataArray.find((value) => value.id === id)
        expect(result).toEqual({id:2, name:'budi'});
    });

    test("when update obj should success", () => {
        let bank = [
            {id:1, name:'adi'},
            {id:2, name:'budi'}
        ]
        let result = updateObj(bank, 1, 'ari'); // Pakai objectArray.findIndex((value) => value.id == id)
        expect(result).toEqual([
            {id:1, name:'ari'},
            {id:2, name:'budi'}
        ]);
    });

    test("when delete obj should success", () => {
        let bank = [
            {id:1, name:'adi'},
            {id:2, name:'budi'}
        ]
        let result = deleteObj(bank, 1); //  Pakai dataArray.findIndex(value) => value.id === id
        expect(result).toEqual([{id:2, name:'budi'}]);
    });
});