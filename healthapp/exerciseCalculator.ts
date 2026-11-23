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

const analyzeRating = (trainingDays: number): 1 | 2 | 3 => {
    if (trainingDays < ORIGINAL_TARGET) return 1
    if (trainingDays === ORIGINAL_TARGET) return 2
    return 3
}

const countAverage = (exercises: number[]): number => {
    const sum = exercises.reduce( (acc: number, current: number) => acc + current , 0 )
    return sum > 0 ? sum / exercises.length : 0
}

function generateRatingDescription(rating: 1 | 2 | 3): string {
    switch (rating) {
        case 1: return "Weak";
        case 2: return "OK";
        case 3: return "Excellent";
    }
}

const calculateExercises = (exercises: number[]): Result => {
    const trainingDays = countTrainingDays(exercises)
    const rating = analyzeRating(trainingDays)
    const average = countAverage(exercises)
    const ratingDescription = generateRatingDescription(rating)

    return {
        periodLength: exercises.length,
        trainingDays: trainingDays,
        success: trainingDays >= ORIGINAL_TARGET,
        rating: rating,
        ratingDescription,
        target: ORIGINAL_TARGET,
        average
    }
}

const exercises = [0,1,3,4]
console.log(calculateExercises(exercises))

export default { calculateExercises }
