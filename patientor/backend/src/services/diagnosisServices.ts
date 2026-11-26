import diagnosisData from './../../data/diagnosis.ts';
import type {Diagnosis} from "../../types.ts";

const getAllDiagnosis = ():Diagnosis[] => {
    return diagnosisData;
};

const addDiagnosis = () => {
    console.log('cannot add diagnosis yet');
    return null;
};

export default {
    getAllDiagnosis,
    addDiagnosis,
};