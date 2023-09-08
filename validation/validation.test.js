const {nameValidation, ageValid} = require('./validation')

describe('testing validation', () => {
    test('when input less 3 character should be error', ()=> {
        let result = nameValidation("ab");
        expect(result).toEqual(
            {error:true, message:'Nama harus lebih dari 3'}
        );
    });

    test('when input a number should be error', ()=> {
        let result = nameValidation("123456");
        expect(result).toEqual(
            {error:true, message:'Nama tidak boleh diisi dengan angka'}
        );
    });

    test('when input more then 20 should be error', ()=> {
        let result = nameValidation("asdfghjklpoqwertyuimnbvcxz");
        expect(result).toEqual(
            {error:true, message:'Nama tidak boleh diisi lebih dari 20'}
        );
    });

    test('when input  space should be error', ()=> {
        let result = nameValidation("   ");
        expect(result).toEqual(
            {error:true, message:'Nama harus lebih dari 3'}
        );
    });

    test('should succes', ()=> {
        let result = nameValidation("Danesh");
        expect(result).toEqual(
            {error:false, message:'Confirm', data:'Danesh'}
        );
    });

    test('should succes', ()=> {
        let result = nameValidation("Ahmad");
        expect(result).toEqual(
            {error:false, message:'Confirm', data:'Ahmad'}
        );
    });

});

describe('test ageValid', ()=> {
    test('when less 12 shouldbe error', ()=> {
        let result = ageValid(12);
        expect(result).toEqual({error:true, message:"Underage"});
    });

    test('when more 80 shouldbe error', ()=> {
        let result = ageValid(90);
        expect(result).toEqual({error:true, message:"Moreage"});
    });

    test('should succes', ()=> {
        let result = ageValid(16);
        expect(result).toEqual(
            {error:false, message:'Nice Confirm', data:16}
        );
    });

});