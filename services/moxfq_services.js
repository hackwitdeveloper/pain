const MoxfqModel = require("../model/moxfq_model");

class MoxfqServices{
    static async moxfqAnswers(email,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16){
        try{
            const createMoxfqAnswer = new MoxfqModel({email,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16});
            return await createMoxfqAnswer.save();
        }catch(err){
            throw err;
        }
    }
    static async checkuser(email){
        try{
            return await MoxfqModel.findOne({email});

        }catch(error){
            throw error;
        }
    }
}
module.exports = MoxfqServices;