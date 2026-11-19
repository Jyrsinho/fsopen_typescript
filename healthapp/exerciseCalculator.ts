const ORIGINAL_TARGET = 4

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
    return exercises.filter( (e) => e > 0).length
}

const calculateExercises = (exercises: number[]): Result => {
    return {
        periodLength: exercises.length,
        trainingDays: countTrainingDays(exercises),
        success: true,
        rating: 2,
        ratingDescription: 'OK',
        target: ORIGINAL_TARGET,
        average: 3
    }
}

export default { calculateExercises }
