const router = require('express').Router();
const patientController = require('../controller/patient_controller');
const medDataController = require('../controller/meddata_controller');
const pcsController = require('../controller/pcs_controller');
const moxfqController = require('../controller/moxfq_controller');
const sfController = require('../controller/sf_controller');
const sftwoController = require('../controller/sf_controller_two');
const sfthreeController = require('../controller/sf_controller_three');


router.post('/registeration',patientController.register);
router.post('/login',patientController.login);
router.post('/phone',patientController.verifyphone);
router.post('/update',patientController.update);
router.post('/changepassword',patientController.changePassword);
router.post('/resetpassword',patientController.verifyphone);
router.post('/delete',patientController.delete);
router.post('/meddata',medDataController.submutMedData);
router.post('/pcs',pcsController.submitPcsAnswer);
router.post('/fetpcs',pcsController.fetpcs);
router.post('/moxfq',moxfqController.submitMoxfqAnswer);
router.post('/fetmoxfq',moxfqController.fetmoxfq);
router.post('/sf',sfController.submitSfAnswer);
router.post('/sftwo',sftwoController.submitSftwoAnswer);
router.post('/sfthree',sfthreeController.submitSfthreeAnswer);
router.post('/fetsf',sfthreeController.fetsf);

module.exports = router;   