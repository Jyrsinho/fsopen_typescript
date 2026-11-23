import {describe, expect, test} from 'vitest'
import bmicalculator from '../bmicalculator'

describe('bmicalculator', () => {
    test('Normal BMI gets evaluated normal', () => {
        expect(bmicalculator.calculateBmi(180, 70)).toBe('Normal range')
    })
    test('Overweight person gets evaluated overweight', () => {
        expect(bmicalculator.calculateBmi(180, 83)).toBe('Overweight range')
    })
    test('Underweight person gets evaluated underweight', () => {
        expect(bmicalculator.calculateBmi(180, 55)).toBe('Underweight range')
    })

    test('Obese person gets evaluated obese', () => {
        expect(bmicalculator.calculateBmi(180, 150)).toBe('Obese range')
    })
})
describe('parseArguments', () => {
    test('should throw an error when too few arguments', () => {
        const args = ['node', "180", "88"]
        expect(() => bmicalculator.parseArguments(args)).toThrow('Not enough arguments')
    })
    test('should throw an error when too many arguments', () => {
        const args = ['node', "boat", "220", "180", "88"]
        expect(()=> bmicalculator.parseArguments(args)).toThrow('Too many arguments')
    })
    test('should throw an error when third argument is not a number', () => {
        const args = ['node', "pathname", "boat", '88']
        expect(() => bmicalculator.parseArguments(args)).toThrow('provided values were not numbers')
    })
    test('should throw an error when fourth argument is not a number', () => {
        const args = ['node', "pathname", "88", 'boat']
        expect(() => bmicalculator.parseArguments(args)).toThrow('provided values were not numbers')
    })

})
