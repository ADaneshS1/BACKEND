const { sum, reduce, times, divide } = require("./myMath")

describe.skip('testing mymath', ()=> {

    test('test sum should succes', ()=> {
        let result = sum(30,10)

        expect(result).toEqual(40)
    });

    test('test reduce should succes', ()=> {
        let result2 = reduce(30,10)

        expect(result2).toEqual(20)
    });

    test('test times should succes', ()=> {
        let result3 = times(30,10)

        expect(result3).toEqual(300)
    });

    test('test divide should succes', ()=> {
        let result4 = divide(30,10)

        expect(result4).toEqual(3)
    });
});