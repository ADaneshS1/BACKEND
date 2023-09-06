const { showAllData, savingData } = require('../gateways/memory-storage-gateway');
const { nameValidation, ageValid } = require('../validation/validation')

const postDataUserHandler = (req,res) => {
    if(!req.body.name) {
        res.status(400)
        return res.send({error:true, message:'tidak memiliki parameter nama'});
    };

    if(!req.body.age) {
        res.status(400)
        return res.send({error:true, message:'tidak memiliki parameter umur'});
    };

    let {name, age} = req.body;

    // Mengambil data nama
    let realNameRes = nameValidation(name);
    let realAgeRes = ageValid(age);

    if(realNameRes.error) {
        res.status(400)
        return res.send(realNameRes)
    };

    if(realAgeRes.error) {
        res.status(400)
        return res.send(realAgeRes)
    };

    savingData(realNameRes.data, realAgeRes.data) // simpan data di memori (memoriGateway)
    res.send({data: showAllData()});
};

module.exports = {postDataUserHandler}