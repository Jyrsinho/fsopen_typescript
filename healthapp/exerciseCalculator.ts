interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: 1 | 2 | 3,
    ratingDescription: string,
    target: number,
    average: number
}

interface parserReturn {
    exercises: number[],
    target: number,
}

const countTrainingDays = (exercises: number[]): number => {
    return exercises.filter((e) => e > 0).length;
};

const analyzeRating = (trainingDays: number, target: number): 1 | 2 | 3 => {
    if (trainingDays < target) return 1;
    if (trainingDays === target) return 2;
    return 3;
};

const countAverage = (exercises: number[]): number => {
    const sum = exercises.reduce((acc: number, current: number) => acc + current, 0);
    return sum > 0 ? sum / exercises.length : 0;
};

function generateRatingDescription(rating: 1 | 2 | 3): string {
    switch (rating) {
        case 1:
            return "Weak";
        case 2:
            return "OK";
        case 3:
            return "Excellent";
    }
}


const calculateExercises = (exercises: number[], target: number): Result => {
    const trainingDays = countTrainingDays(exercises);
    const rating = analyzeRating(trainingDays, target);
    const average = countAverage(exercises);
    const ratingDescription = generateRatingDescription(rating);

    return {
        periodLength: exercises.length,
        trainingDays: trainingDays,
        success: trainingDays >= target,
        rating: rating,
        ratingDescription,
        target,
        average
    };
};

function parseArguments(argv: string[]): parserReturn {
    if (argv.length < 3) {
        throw new Error('Too few arguments');
    }
    const target = Number(argv[2]);
    if (isNaN(target)) {
        throw new Error('target must be a number');
    }
    const parsedArray = argv.slice(3);
    const hasNonNumbers = parsedArray.some((value) => {
        return isNaN(Number(value));
    });
    if (hasNonNumbers) {
        throw new Error('exercises must be numbers');
    }
    return {
        exercises: parsedArray.map(value => parseInt(value)),
        target
    };
}

if (process.argv[1] === import.meta.filename) {
    try {
        const {exercises, target} = parseArguments(process.argv);
        console.log(calculateExercises(exercises, target));
    } catch (e) {
        console.error(e);
    }
}


export default {
    calculateExercises,
    parseArguments,
};
