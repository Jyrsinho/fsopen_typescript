import express from "express";
import patientService from "../services/patientServices.ts";
import type {NewPatient} from "../../types.ts";
import {parseNewPatientEntry} from "../utils/utils.ts";

const router = express.Router();

router.get('/', (_req, res) => {
    const data = patientService.getNonSensitivePatients();
    res.send(  data );
} );

router.post('/', (req, res) => {
    const {name, dateOfBirth, ssn, gender, occupation } = parseNewPatientEntry(req.body);
    const addedPatient : NewPatient = patientService.addPatient({
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation,
    });
    res.json(addedPatient);
});

export default router;