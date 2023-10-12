const { showAllData, savingData } = require('../gateways/mongodb-gateway');
const { nameValidation, ageValid } = require('../validation/validation');

const postDataUserHandler = async (req,res) => {
    console.log(req.body)
    try {
        if(!req.body.name) {
            res.status(400)
            return res.send({error:true, message:'tidak memiliki parameter nama'});
        };
    
        if(!req.body.age) {
            res.status(400)
            return res.send({error:true, message:'tidak memiliki parameter umur'});
        };

        let {name, age} = req.body;

        // Mengambil data 
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

        console.log("Terjadi keselahan: ",realNameRes.data, realAgeRes.data)
        await savingData(realNameRes.data, realAgeRes.data)
        res.send({data: await showAllData()});
    } catch(error) {
        res.send({ error: true, message: error.message });
    }
};

module.exports = {postDataUserHandler}