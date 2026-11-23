type BMIEvaluation = 'Underweight' | 'Normal' | 'Overweight' | 'Obese'

const evaluateBmi = (BMI: number): BMIEvaluation => {
    if (BMI < 18.5) return 'Underweight'
    if (BMI < 25) return 'Normal'
    if (BMI < 30) return 'Overweight'
    return 'Obese'
}

const calculateBmi = (height: number, weight: number): string => {
    const heightInMetres = height / 100
    const BMI = weight / (heightInMetres * heightInMetres)
    console.log(BMI)
    return `${evaluateBmi(BMI)} range`
};

const parseArguments = (argv : string[]) => {
    return {
        weight: 180,
        height: 180
    }
}


try {
    const {weight, height} = parseArguments(process.argv)

} catch (e) {

}


export default {
    calculateBmi
}