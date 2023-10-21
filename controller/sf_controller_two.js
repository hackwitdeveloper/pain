const SftwoServices = require("../services/sf_services_two")

exports.submitSftwoAnswer= async(req, res, next)=>{
    try{
        const{email,sf13,sf14,sf15,sf16,sf17,sf18,sf19} = req.body;

        const successRes = await SftwoServices.sftwoAnswers(email,sf13,sf14,sf15,sf16,sf17,sf18,sf19);

        res.json({status: true, success: "Sf three 36 Answer Submitted Successfully"});

    }catch(error){
        throw error
    }
}