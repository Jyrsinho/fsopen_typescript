import patientData from './../../data/patients.ts';
import type {NonSensitivePatient, Patient} from "../../types.ts";

const getNonSensitivePatients = ():NonSensitivePatient[] => {
    return patientData.map( ({id, name, gender, occupation, dateOfBirth}) => ({
            id,
            name,
                gender,
                occupation,
                dateOfBirth
    }));
};

const getAllPatients = ():Patient[] => {
    return patientData;
};

const addPatient = () => {
    console.log('cannot add patients yet');
    return null;
};

export default {
    getAllPatients,
    getNonSensitivePatients,
    addPatient,
};