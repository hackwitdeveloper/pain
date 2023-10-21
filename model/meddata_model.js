const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const meddataSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    occupation: String,
    mobile: String,
    Hphone: String,
    ECP: String,
    Relationship: String,
    ECPh: String,
    MCN: String,
    MCNId: String,
    PHC: String,
    HealthF: String,
    Memberno: String,
    hcc: String,
    exp: String,
    DVDno: String,
    about_us: String,
    ReferDN: String,
    ReferDC: String,
    RDnphone: String,
    RGPn: String,
    RGPc: String,
    RGPnphone: String,
    physioN: String,
    physioP: String,
    physioC: String,
    claimN: String,
    DOI: String,
    Yw_cn: String,
    Addwp: String,
    cpwp: String,
    CPsur: String,
    CPph: String,
    InCP: String,
    InCA: String,
    InCCM: String,
    InCSur: String,
    InCPh: String,
    CmEA: String,
    Info_accuracy: String,
    perRelease: String,
    perXray: String,
    blood_thinners: String,
    herbal_medication: String,
    pain_medication: String,
    drink_alcohol: String,
    drinks_per_day: String,
    allergies_to_drugs: String,
    allergic_reaction: String,
    what_else: String,
    claustrophobia: String,
    pacemaker: String,
    any_metal_in_body: String,
    surgery: String,
    PorthopaedicS: String,
    ComplicationsAS: String,
    Osteoarthritis: String,
    Rheumatoid_Arthritis: String,
    Tmedi: String,
    Hyper_active: String,
    Hypo_active: String,
    Heart_Attack: String,
    HBP: String,
    LBP: String,
    other: String,
    Hepatitis_B: String,
    Hepatitis_C: String,
    Stroke: String,
    Past_Blood: String,
    HIV: String,
    Kidney: String,
    Gastric: String,
    Indigestion: String,
    Ulcers: String,
    Venous: String,
    DVT: String,
    Varicose: String,
    joint: String,
    Asthma: String,
    Emphysema: String,
    Sleep_Apnoea: String,
    Pulmonary: String,
    smoker: String,
    Breast: String,
    Mastectomy: String,
    Shoulder: String,
    Management: String,
});

const MedDataModel = db.model('patient_MedData',meddataSchema);

module.exports = MedDataModel;