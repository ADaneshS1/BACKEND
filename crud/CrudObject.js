const createData = (bank, data) => {
    bank.push(data);
    return bank;
};

const addObj = (bank, data) => {
    bank.push(data);
    return bank;
};

const findData = (bank, id) => {
    return bank.find((value) => value.id === id);
};

const updateData = (bank, id, value) => {
    if(typeof id === 'string') {
        id = parseInt(id);
    }
    const index = bank.findIndex((value) => value.id === id);
    bank[index] = { ...bank[index], id, name: value};
    return bank;
};

const deleteData = (bank, id) => {
    const index = bank.findIndex((value) => { return value.id === id });
    bank.splice(index, 1);
    return bank;
};

const findByname = (bank, name) => {
    return bank.find((value) => value.name.includes(name))
}

const updateAllData = (bank,id,dataBaru) => {
    if(typeof id === 'string') {
        id = parseInt(id);
    }

    const index = bank.findIndex((value) => value.id === id);
    bank[index] = {...bank[index], ...dataBaru} // Data lama direplace dengan data baru.
    return bank;
}

const checkId = (bank, id) => {
    if(typeof id === 'string') {
        id = parseInt(id);
    }

    const index = bank.findIndex((value) => value.id === id);
    if (index === -1) {
        return false
    };
    return true;
}

module.exports = { createData, addObj, findData, updateData, deleteData, findByname, updateAllData, checkId };