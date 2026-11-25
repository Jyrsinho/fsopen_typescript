import express from 'express';
import bmicalculator from "./bmicalculator.ts";
import exerciseCalculator from "./exerciseCalculator.ts";
const app = express();


app.get('/hello', (_req, res) => {
    console.log('hello');
    res.send('Hello Full Stack');
});

app.get('/bmi', (req, res) => {
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);

    if (isNaN(weight) || isNaN(height)) {
        res.status(400).send('invalid parameters');
    }

    res.send(JSON.stringify({
        weight,
        height,
        bmi: bmicalculator.calculateBmi( height, weight)
    }));
});

app.post('/exercises', (req , res ) => {

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {exercises, originalTarget} = req.body;

    if ( !originalTarget || isNaN(Number(originalTarget)) ) {
        return res.status(400).send({ error: 'originalTarget must be a number' });
    }

    const exerciseReport = exerciseCalculator.calculateExercises(Number(originalTarget), exercises);

    res.send(JSON.stringify(exerciseReport));
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
