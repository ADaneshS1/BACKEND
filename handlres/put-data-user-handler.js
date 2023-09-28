const { editNamaUmurData, isIdExisted } = require("../gateways/mongodb-gateway");
const { nameValidation, ageValid } = require('../validation/validation')

const putDataUserHandler = async (req,res) => {

    try {
        if(!req.body || !req.body.id) {
            return res.send({error:true, message:"Harap memasukkan id"});
        }
    
        const name = req.body.name;
        const id = req.body.id;
        const age = req.body.age
    
        if(id < 0 || id >= 1000) {
            return res.send({error:true, message:"Id harus antara 0 - 1000"});
        }
    
        if(!isIdExisted(id)) {
            res.status(400);
            return res.send({error:true, message:"Id tidak ditemukan"});
        }
    
        // Mengambil data nama
        let realNameRes = nameValidation(name);
        let realAgeRes = ageValid(age);
    
        if (realNameRes.error) {
            res.status(400);
            return res.send(realNameRes)
        }
    
        if (realAgeRes.error) {
            res.status(400);
            return res.send(realAgeRes)
        }
    
        await editNamaUmurData(id,realNameRes.data, realAgeRes.data)
    
        res.send({error:false, message:"Succes"})
    } catch(error){
        res.send({ error: true, message: error.message });
    }

    
}

module.exports = {putDataUserHandler}