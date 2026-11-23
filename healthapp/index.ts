import express from 'express'
import bmicalculator from "./bmicalculator.ts";
const app = express();

app.get('/hello', (_req, res) => {
    console.log('hello')
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
    }))
})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});