const createData = (bank, data) => {
    bank.push(data);
    return bank;
};
const readAll = (bank) => {
    return bank;
};
const readByIdx = (bank, idx) => {
    return bank[idx];
};
const updateData = (bank, idx, data) => {
    bank[idx] = data
    return bank
};
const deleteData = (bank, idx) => {
    bank.splice(idx, 3) // Number adalah length(jumlah) yang akan dihapus
    return bank 
};

module.exports = {createData, readAll, readByIdx, updateData, deleteData}