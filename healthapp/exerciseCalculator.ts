interface Result  {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: 1 | 2 | 3,
    ratingDescription: string,
    target: number,
    average: number

}

const calculateExercises = (exercises: number[]): Result => {
    return {
        periodLength: 7,
        trainingDays: 7,
        success: true,
        rating: 2,
        ratingDescription: 'OK',
        target: 4,
        average: 3
    }
}
