import express from "express";

const router = express.Router();

router.get('/', (_req, res) => {
    console.log('someone is fetching all the diagnosis');
    res.send( 'fetching all the diagnosis');
} );

export default router;