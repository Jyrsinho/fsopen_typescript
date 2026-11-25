import express from 'express';
import bmicalculator from "./bmicalculator.ts";
import exerciseCalculator from "./exerciseCalculator.ts";
const app = express();
app.use(express.json());


app.get('/hello', (_req, res) => {
    console.log('hello');
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);

    if (isNaN(weight) || isNaN(height)) {
        res.status(400).send({
            error: 'malformatted parameters'
        });
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
        return res.status(400).send({
            error: 'parameters missing'
        });
    }

    if ( isNaN(Number(target)) || !Array.isArray(daily_exercises) ) {
        return res.status(400).send({ error: 'malformatted parameters' });
    }

    if (!daily_exercises.every( (exercise) => typeof exercise === 'number')) {
        return res.status(400).send({
            error: 'malformatted parameters'
        });
    }

    const exerciseReport = exerciseCalculator.calculateExercises(daily_exercises, Number(target));

    return res.send(JSON.stringify(exerciseReport));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
