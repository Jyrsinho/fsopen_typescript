let ORIGINAL_TARGET: number = 0;

interface Result  {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: 1 | 2 | 3,
    ratingDescription: string,
    target: number,
    average: number

}

const countTrainingDays = (exercises: number[]): number => {
    return exercises.filter( (e) => e > 0).length;
};

const analyzeRating = (trainingDays: number): 1 | 2 | 3 => {
    if (trainingDays < ORIGINAL_TARGET) return 1;
    if (trainingDays === ORIGINAL_TARGET) return 2;
    return 3;
};

const countAverage = (exercises: number[]): number => {
    const sum = exercises.reduce( (acc: number, current: number) => acc + current , 0 );
    return sum > 0 ? sum / exercises.length : 0;
};

function generateRatingDescription(rating: 1 | 2 | 3): string {
    switch (rating) {
        case 1: return "Weak";
        case 2: return "OK";
        case 3: return "Excellent";
    }
}

const setOriginalTarget = (originalTarget: number) => {
    ORIGINAL_TARGET = originalTarget;
};

const calculateExercises = (exercises: number[]): Result => {
    const trainingDays = countTrainingDays(exercises);
    const rating = analyzeRating(trainingDays);
    const average = countAverage(exercises);
    const ratingDescription = generateRatingDescription(rating);

    return {
        periodLength: exercises.length,
        trainingDays: trainingDays,
        success: trainingDays >= ORIGINAL_TARGET,
        rating: rating,
        ratingDescription,
        target: ORIGINAL_TARGET,
        average
    };
};

function parseArguments(argv: string[]) : number[] {
    if (argv.length < 3) {
        throw new Error('Too few arguments');
    }
    ORIGINAL_TARGET = Number(argv[2]);
    if (isNaN(ORIGINAL_TARGET)) {
        throw new Error('target must be a number');
    }
    setOriginalTarget(ORIGINAL_TARGET);

    const parsedArray = argv.slice(3);
    const hasNonNumbers = parsedArray.some((value) => {
        return isNaN(Number(value));
    });
    if (hasNonNumbers) {
        throw new Error('exercises must be numbers');
    }
    ORIGINAL_TARGET = Number(argv[2]);
    return parsedArray.map(value => parseInt(value));
}

try {
    const exercises = parseArguments(process.argv);
    console.log(calculateExercises(exercises));
} catch (e) {
    console.error(e);
}


export default {
    calculateExercises,
    parseArguments,
    setOriginalTarget,
};
