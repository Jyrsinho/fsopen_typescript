import express from "express";
import diagnosisServices from "../services/diagnosisServices.ts";

const router = express.Router();

router.get('/', (_req, res) => {
    const data = diagnosisServices.getAllDiagnosis();
    res.send(  data );
} );

export default router;