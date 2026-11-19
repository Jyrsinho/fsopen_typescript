import { expect, test } from 'vitest'
import  bmicalculator  from '../bmicalculator'

test('Normal BMI gets evaluated normal', () => {
    expect(bmicalculator.calculateBmi(180, 70)).toBe('Normal')
})
test('Overweight person gets evaluated overweight', () => {
    expect(bmicalculator.calculateBmi(180,83)).toBe('Overweight')
})
test('Underweight person gets evaluated underweight', () => {
    expect(bmicalculator.calculateBmi(180,55)).toBe('Underweight')
})

test('Obese person gets evaluated obese', () => {
    expect(bmicalculator.calculateBmi(180, 150)).toBe('Obese')
})
