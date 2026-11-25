import express from 'express';
import bmicalculator from "./bmicalculator.ts";
import exerciseCalculator from "./exerciseCalculator.ts";
const app = express();
app.use(express.json());


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
    const {daily_exercises, target} = req.body;
    console.log('daily_exercises', daily_exercises);
    console.log('target', target);

    if (!target || !daily_exercises) {
        return res.status(400).send('parameters missing');
    }

    if ( isNaN(Number(target)) || !Array.isArray(daily_exercises) ) {
        return res.status(400).send({ error: 'malformatted parameter' });
    }

    const exerciseReport = exerciseCalculator.calculateExercises(daily_exercises as number[], Number(target));

    return res.send(JSON.stringify(exerciseReport));
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
