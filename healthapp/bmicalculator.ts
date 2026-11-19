type BMIEvaluation = 'Underweight' | 'Normal' | 'Overweight' | 'Obese'

const evaluateBmi = (BMI: number) : BMIEvaluation => {
    if (BMI < 18.5 ) return 'Underweight'
    if (BMI < 25 ) return 'Normal'
    if (BMI < 30 ) return 'Overweight'
    return 'Obese'
}

const calculateBmi = (height: number, weight: number) : BMIEvaluation => {
    const heightInMetres = height / 100
    const BMI = weight / (heightInMetres * heightInMetres)
    console.log(BMI)
    return evaluateBmi(BMI)
};

console.log(calculateBmi(180, 74))

export default {
    calculateBmi
}