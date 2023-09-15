const { editDataName } = require("../gateways/memory-storage-gateway");

const putDataUserHandler = (req,res) => {
    let name = req.body.name;
    let id = req.body.id;
    let age = req.body.age
    editDataName(id, name, age)

    res.send({error:false, message:"Succes"})
}

module.exports = {putDataUserHandler}