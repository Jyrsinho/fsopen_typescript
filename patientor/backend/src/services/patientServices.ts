import patientData from './../../data/patients.ts';
import type {Patient} from "../../types.ts";

const getAllPatients = ():Patient[] => {
    return patientData;
};

const addDiagnosis = () => {
    console.log('cannot add patients yet');
    return null;
};

export default {
    getAllPatients,
    addDiagnosis,
};