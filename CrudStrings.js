const createStr = (bank, data) => {
    bank.push(data)
    return bank
}

const readByIdx = (bank, idx) => {
    return bank[idx]
}

const updateStr = (bank, idx, data) => {
    bank[idx] = data
    return bank
}

const deleteStr = (bank, idx) => {
    bank.splice(idx, 1)
    return bank
}

module.exports = {createStr, readByIdx, updateStr, deleteStr}