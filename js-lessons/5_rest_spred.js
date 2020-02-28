//Rest

/*function average(a, ...args) {
  return args.reduce((acc, i) => acc += i, 0) / args.length
}*/



//console.log(average(10, 20, 30, 40))


//Spread

//const array = [1,2,3,5,8,13]
//console.log(...array)
//console.log(Math.max(...array))

//const fib = [1, ...array]

//console.log(fib)

// Destructuring

const array = [1,,3,5,8,13]

//const [a, b = 42, ...c] = array

//const a = array[0]
//const b = array[1]
// =

//console.log(a, b, c)

// const [a, ,c] = array
// console.log(a, c)

// Object

const address = {
  country: 'Russia',
  city: 'Moscow',
  street: 'Lenina',
  concat: function () {
    return `${this.country} ${this.city} ${this.street}`
  }
}
//console.log(address.concat())


// const {city, country, street = 'Tverskaya', concat: addressConcat} = address
//
// console.log(city)
// console.log(street)
//console.log(addressConcat.call(address))

/*const {city, ...rest} = address

console.log(city)
console.log(rest)*/

const newAddress = {
  home: 10,
  ...address,
  street: 'Tverskay',
}

console.log(newAddress)



