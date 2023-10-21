const SfthreeServices = require("../services/sf_services_three")

exports.submitSfthreeAnswer= async(req, res, next)=>{
    try{
        const{email,sf20,sf21,sf22,sf23,sf24,sf25,sf26,sf27,sf28,sf29,sf30,sf31,sf32,sf33,sf34,sf35,sf36} = req.body;

        const successRes = await SfthreeServices.sfthreeAnswers(email,sf20,sf21,sf22,sf23,sf24,sf25,sf26,sf27,sf28,sf29,sf30,sf31,sf32,sf33,sf34,sf35,sf36);

        res.json({status: true, success: "Sf three 36 Answer Submitted Successfully"});

    }catch(error){
        throw error
    }
}
exports.fetsf = async(req, res, next)=>{
    try{
        const{email} = req.body;
        const patient = await SfthreeServices.checkuser(email);
        if(!patient){
            res.status(200).json({status:false, message: "Not Answer"})
        }else{
        
        res.status(200).json({status:true, id: patient._id})
        
    }


    }catch(error){
        res.status(200).json({status:false, message: error})

    }
}