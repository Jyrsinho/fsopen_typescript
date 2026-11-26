import diagnosisData from './../../data/diagnosis.ts';

const getAllDiagnosis = () => {
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