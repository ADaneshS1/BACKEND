const createObj = (bank, obj) => {
    bank.push(obj)
    return bank
}

const addObj = (bank, obj) => {
    bank.push(obj)
    return bank
}

const findById = (bank, id) => {
    return bank.find((value)=> value.id === id) 
}

const updateObj = (bank, id, obj) => {
    const index = bank.findIndex((value)=> value.id === id)
    bank[index] = {id, name: obj};
    return bank
}

const deleteObj = (bank, id) => {
    const index = bank.findIndex((value)=> value.id === id)
    bank.splice(index, 1)
    return bank
}

module.exports = {createObj, addObj, findById, updateObj, deleteObj}