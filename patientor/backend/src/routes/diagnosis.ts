import express from "express";
import diagnosisServices from "../services/diagnosisServices.ts";

const router = express.Router();

router.get('/', (_req, res) => {
    console.log('someone is fetching all the diagnosis');
    const data = diagnosisServices.getAllDiagnosis();
    console.log(data);
    res.send(  data );
} );

export default router;