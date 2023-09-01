const getLargestNumber = (bank, data) => {
    bank % 2;
    return bank;
};

const filterEvenNumber = (bank) => {
    const index = bank.filter((value) => value % 2)
    return index;
};

const sumArray = (bank) => {
    const index = bank.reduce((value, val) => value + val)
    return index;
};

const findDuplicates = (bank) => {
    const index = bank.filter((item, index) => bank.indexOf(item) !== index)
    const dupli = index(bank)
    return dupli;
};

const sortArray = (bank) => {
    const index = bank.sort((value, val) => value - val)
    return index;
};

const calculateAverage = (bank) => {
    let sum = 0
    for (let number of bank) {
        sum += number;
    }
    average = sum / bank.length;
    return average;
};


module.exports = { getLargestNumber, filterEvenNumber, sumArray, sortArray, calculateAverage, findDuplicates };