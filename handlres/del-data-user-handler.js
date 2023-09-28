const { removeData, isIdExisted } = require("../gateways/mongodb-gateway");

const delDataUserHandler = async (req,res) => {

    try {
        if(!req.body || !req.body.id) {
            res.status(400)
            return res.send({error:true, message:"Harap memasukkan id"});
        }
    
        const id = req.body.id;
    
        if(id <= 0 || id >= 1000) {
            res.status(400)
            return res.send({error:true, message:"Id harus antara 0 - 1000"});
        }
    
        if(!isIdExisted(id)) {
            res.status(400);
            return res.send({error:true, message:"Id tidak ditemukan"});
        }
    
        await removeData(id)
    
        res.send({error:false, message:"Succes"});
    } catch(error){

    }
}

module.exports = {delDataUserHandler}