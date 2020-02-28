const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
  Moscow: 20,
  SaintPetersburg: 8,
  Kazan: 5,
  Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
  Moscow: 26,
  Berlin: 10,
  Praha: 3,
  Paris: 2
}

//console.log(...citiesEurope)


//const allCities = [...citiesRussia,'Вашингтон', ...citiesEurope]
//const allCities =citiesEurope.concat(citiesRussia)
//console.log(allCities)


//console.log({...citiesRussiaWithPopulation})
//console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})
//const numbers = [5,37,42,17]
//console.log(Math.max(5,37,42,17))
//console.log(Math.max(...numbers))


function sum(...rest) {
  return rest.reduce((a, i)=> a + i, 0)
}

const numbers = [1, 2, 3, 4, 5]

//console.log(sum(...numbers))const a = numbers[0]

//const a = numbers[0]
//const b = numbers[1]

//const [a, b, ...other] = numbers

//console.log(a, b, other)

const person  = {
  name: 'Max',
  age: 20,
  city: 'Moscow',
  country: 'rus'
}

const {name, city, ...adress} = person
console.log(name, city, adress)
