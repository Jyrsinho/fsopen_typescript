import express,  {type Request, type Response} from "express";
import patientService from "../services/patientServices.ts";
import type {NewPatient} from "../types.ts";
import {newPatientParser} from "../middleware/newPatientParser.ts";
import {errorMiddleware} from "../middleware/errorMiddleware.ts";

const router = express.Router();

router.get('/', (_req, res) => {
    const data = patientService.getNonSensitivePatients();
    res.send(  data );
} );

router.post('/', newPatientParser,  (req : Request<unknown, unknown, NewPatient>, res: Response) => {
    const addedPatient : NewPatient = patientService.addPatient(req.body);
    res.json(addedPatient);
});

router.use(errorMiddleware);

export default router;