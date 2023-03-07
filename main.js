let lowerSet = 'abcdefghijklmnopkqrstiuvwxyz'
let upperSet = 'abcdefghijklmnopkqrstiuvwxyz'.toUpperCase()
let symbolsSet = `!@#$%&?/`
let numberSet = '1234567890'

let passwordPrint = document.getElementById('password')
let charvalue = document.getElementById('charvalue')
let uppercase = document.getElementById('uppercase')
let lowercase = document.getElementById('lowercase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')

let button = document.querySelector('button')

function getPassword(dataset) {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

function generatePassword(password = '') {
    if (uppercase.checked) {
        password += getPassword(upperSet)
    }
    if (lowercase.checked) {
        password += getPassword(lowerSet)
    }
    if (numbers.checked) {
        password += getPassword(numberSet)
    }
    if (symbols.checked) {
        password += getPassword(symbolsSet)
    }

    if (password.length < charvalue.value) {
        return generatePassword(password)
    }
    passwordPrint.innerHTML=password
}

generatePassword()


