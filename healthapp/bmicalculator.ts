type BMIEvaluation = 'Underweight' | 'Normal' | 'Overweight' | 'Obese'

interface BMIValues {
    weight: number,
    height: number
}

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

const parseArguments = (args : string[]): BMIValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    const height = Number(args[2]);
    const weight = Number(args[3]);

    if (isNaN(Number(height)) || isNaN(Number(weight))) {
        throw new Error('provided values were not numbers');
    }

    return {
        weight,
        height
    }
}


try {
    const {weight, height} = parseArguments(process.argv)
    console.log(calculateBmi(height, weight))

} catch (e) {
    console.error(e)
}


export default {
    calculateBmi,
    parseArguments,
}