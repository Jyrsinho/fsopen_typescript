import patientData from './../../data/patients.ts';
import type {NewPatient, NonSensitivePatient, Patient} from "../types.ts";
import { v4 as uuid } from 'uuid';

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

const addPatient = (newPatient: NewPatient): Patient => {
    const id = uuid();
    const addedPatient = {
        ...newPatient,
        id
    };
    patientData.push(addedPatient);

    return addedPatient;

};

export default {
    getAllPatients,
    getNonSensitivePatients,
    addPatient,
};