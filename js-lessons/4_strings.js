const str = `Hello`

console.log(str.startsWith('He'))

console.log(str.endsWith('o'))

console.log(str.includes('lo'))


console.log(str.repeat(3))

console.log(str.trim())  // удаляет пробелы

console.log(str.trimEnd()) // удаляет пробелы в конце
console.log(str.trimStart()) // удаляет пробелы в в начале

console.log(str.padStart(10) , '1234') // Минимальная длина строки
