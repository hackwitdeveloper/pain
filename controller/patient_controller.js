const PatientServices = require("../services/patient_services")

exports.register = async(req, res, next)=>{
    try{
        const{fname,lname,dob,gender,email,phone,address,state,postcode,password} = req.body;

        const successRes = await PatientServices.registerPatient(fname,lname,dob,gender,email,phone,address,state,postcode,password);
        let tokenData = {fname:fname, lname: lname, dob: dob, gender: gender, email: email, phone: phone, address: address, state: state, postcode: postcode};
        res.json({status: true, token: tokenData});

    }catch(error){
        res.json({status: false, success: error});
    }
}

exports.login = async(req, res, next)=>{
    try{
        const{email,password} = req.body;
        const patient = await PatientServices.checkuser(email);
        if(!patient){
            res.status(200).json({status:false, message: "User Not Found"})
        }else{
       
        console.log(patient);
        const isMatch = await patient.comparePassword(password);

        if(isMatch === false){
            res.status(200).json({status:false, message: "Invalid Password"})
        }else{
        
        let tokenData = {fname:patient.fname, lname: patient.lname, dob: patient.dob, gender: patient.gender, email: patient.email, phone: patient.phone, address: patient.address, state: patient.state, postcode: patient.postcode};

        
        res.status(200).json({status:true, token: tokenData})
        }
    }
    }catch(error){
        res.status(200).json({status:false, message: error})

    }
}
exports.verifyphone = async(req, res, next)=>{
    try{
        const{phone} = req.body;
        const patient = await PatientServices.checkphone(phone);
        if(!patient){
            res.status(200).json({status:false, message: "Phone Number Not Found"})
        }else{
       
        console.log(patient);
        res.status(200).json({status:true, token: patient})
        
    }
    }catch(error){
        res.status(200).json({status:false, message: error})

    }
}

exports.update = async(req, res, next)=>{
    try{
        const{email,fname,lname,dob,gender,phone,address,state,postcode} = req.body;
        const successRes = await PatientServices.updatePatient(email,fname,lname,dob,gender,phone,address,state,postcode);
        res.json({status: true, success: successRes});
        console.log(successRes);
    }catch(error){
        res.status(200).json({status:false, message: error})

    }
}
exports.resetPassword = async(req, res, next)=>{
    try{
        const{phone,password} = req.body;
        const successRes = await PatientServices.resetPassword(phone,password);
        res.json({status: true, success: successRes});
        
    
    }catch(error){
        res.status(200).json({status:false, message: error})

    }
}
exports.changePassword = async(req, res, next)=>{
    try{
        const{email,password} = req.body;
        const successRes = await PatientServices.changePassword(email,password);
        res.json({status: true, success: successRes});
    
    }catch(error){
        res.status(200).json({status:false, message: error})

    }
}

exports.delete = async(req, res, next)=>{
    try{
        const{email} = req.body;
        const patient = await PatientServices.deletePatinet(email);
        res.status(200).json({status:true, message: "Patient Deleted"})
    }catch(error){
        res.status(200).json({status:false, message: error})
    }
}