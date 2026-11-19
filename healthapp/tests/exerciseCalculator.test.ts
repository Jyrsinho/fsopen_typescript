import {expect, test, describe} from 'vitest'
import exerciseCalculator from '../exerciseCalculator'

describe('exerciseCalculator', () => {
    describe('periodlength', () => {
        test('should return zero for periodlength of empty array', () => {
            const result = exerciseCalculator.calculateExercises([])
            expect(result.periodLength).toBe(0)
        })
        test('should count the periodLength', () => {
            const exerciseArray = [1, 1, 1, 1, 0, 0, 1]
            const result = exerciseCalculator.calculateExercises(exerciseArray)
            expect(result.periodLength).toBe(7)
        })
    })
    describe('trainingDays', () => {
        test('should return zero for trainingDays when given empty array', () => {
            const result = exerciseCalculator.calculateExercises([])
            expect(result.trainingDays).toBe(0)
        })
        test('should count the number of training days', () => {
            const exerciseArray = [1, 0, 2, 3, 0]
            const result = exerciseCalculator.calculateExercises(exerciseArray)
            expect(result.trainingDays).toBe(3)
        })
    })
    describe('success when original target is 4', () => {
        test('should be false when no training days', () => {
            const result = exerciseCalculator.calculateExercises([])
            expect(result.success).toBe(false)
        })
    })
})
