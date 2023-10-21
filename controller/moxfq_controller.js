const MoxfqServices = require("../services/moxfq_services")

exports.submitMoxfqAnswer = async(req, res, next)=>{
    try{
        const{email,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16} = req.body;

        const successRes = await MoxfqServices.moxfqAnswers(email,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16);

        res.json({status: true, success: "Moxfq Answers Submittted Successfully"});

    }catch(error){
        throw error
    }
}

exports.fetmoxfq = async(req, res, next)=>{
    try{
        const{email} = req.body;
        const patient = await MoxfqServices.checkuser(email);
        if(!patient){
            res.status(200).json({status:false, message: "Not Answer"})
        }else{
        
        res.status(200).json({status:true, id: patient._id})
        
    }


    }catch(error){
        res.status(200).json({status:false, message: error})

    }
}