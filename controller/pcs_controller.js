const PcsServices = require("../services/pcs_services")

exports.submitPcsAnswer = async(req, res, next)=>{
    try{
        const{email,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13} = req.body;

        const successRes = await PcsServices.pcsAnswers(email,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13);

        res.json({status: true, success: "Answer Submitted Successfully"});

    }catch(error){
        throw error
    }
}
exports.fetpcs = async(req, res, next)=>{
    try{
        const{email} = req.body;
        const patient = await PcsServices.checkuser(email);
        if(!patient){
            res.status(200).json({status:false, message: "Not Answer"})
        }else{
        
        res.status(200).json({status:true, id: patient._id})
        
    }


    }catch(error){
        res.status(200).json({status:false, message: error})

    }
}