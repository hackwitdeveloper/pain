const SftwoModel = require("../model/sf_model_two");

class SftwoServices{
    static async sftwoAnswers(email,sf13,sf14,sf15,sf16,sf17,sf18,sf19){
        try{
            const createsftwoAnswer = new SftwoModel({email,sf13,sf14,sf15,sf16,sf17,sf18,sf19});
            return await createsftwoAnswer.save();
        }catch(err){
            throw err;
        }
    }
}
module.exports = SftwoServices;