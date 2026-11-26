import express from "express";
import patientServices from "../services/patientServices.ts";

const router = express.Router();

router.get('/', (_req, res) => {
    const data = patientServices.getAllPatients();
    res.send(  data );
} );

export default router;