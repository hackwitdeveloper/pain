const PcsModel = require("../model/pcs_model");

class PcsServices{
    static async pcsAnswers(email,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13){
        try{
            const createPcsAnswer = new PcsModel({email,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13});
            return await createPcsAnswer.save();
        }catch(err){
            throw err;
        }
    }
    static async checkuser(email){
        try{
            return await PcsModel.findOne({email});

        }catch(error){
            throw error;
        }
    }
}
module.exports = PcsServices;