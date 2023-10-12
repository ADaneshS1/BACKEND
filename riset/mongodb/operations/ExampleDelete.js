const deleteById = async (collection, id) => {
    const dataRes = collection.deleteOne({id});//id:id. 
    return dataRes
}

module.exports = {deleteById}