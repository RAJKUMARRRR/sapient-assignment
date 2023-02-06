module.exports.luhnCheck = (number) => {
    let arr = (`${number}`).split('').reverse().map(n => parseInt(n))
    let lastDigit = arr.splice(0,1)[0]
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc+val : acc + ((val * 2) % 9) || 9), 0)
    sum += lastDigit
    return sum % 10 === 0
}