const SfthreeModel = require("../model/sf_model_three");

class SfthreeServices{
    static async sfthreeAnswers(email,sf20,sf21,sf22,sf23,sf24,sf25,sf26,sf27,sf28,sf29,sf30,sf31,sf32,sf33,sf34,sf35,sf36){
        try{
            const createsfthreeAnswer = new SfthreeModel({email,sf20,sf21,sf22,sf23,sf24,sf25,sf26,sf27,sf28,sf29,sf30,sf31,sf32,sf33,sf34,sf35,sf36});
            return await createsfthreeAnswer.save();
        }catch(err){
            throw err;
        }
    }
    static async checkuser(email){
        try{
            return await SfthreeModel.findOne({email});

        }catch(error){
            throw error;
        }
    }
}
module.exports = SfthreeServices;