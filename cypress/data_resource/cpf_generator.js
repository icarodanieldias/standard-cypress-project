import { Random } from "./random.js";

const GeneratorCPF = {
    generate: () => {
        const digits = Random.generateRandomDigitsList(9);
        return generateCPF(digits)
    }
}

const generateValidationDigit = (digits) => {
    let partialResult = 0

    let count = 0;
    while (count < 9) {
        partialResult += digits[count] * (10-count)
        count ++
    }

    const rest = partialResult % 11
    
    return (rest > 1) ? 11 - rest : 0
}

const generateCPF = (digits) => {
    let firstValidation = generateValidationDigit(digits);
    digits.push(firstValidation)

    let digitsWithoutFirst = digits.slice(1)
    let secondValidation = generateValidationDigit(digitsWithoutFirst)

    digits.push(secondValidation)

    const cpf = digits.reduce((accumulator, current) => accumulator + `${current}`, "")

    return cpf
}

export {GeneratorCPF};