const cityField = 'city'

const job = "frontend"

const person = {
  age: 26,
  name: 'Irina',
  job,
  [cityField + Date.now()]: 'Sait-Peterburg', // динамически менять ключь объекта
  'country-live': 'Russia',
  print: ()=> 'Person',
  toString() {
    return Object
      .keys(this)
      .filter(key => key !== 'toString')
      .map(key => this[key])
      .join(' ')
  }
}

// console.log(person.toString())
// console.log(person)


//Methods

const first = {a: 1}
const second = {b: 2}

//console.log(Object.is(20,20)) // ПРоверка на эквивалентность
const obj = Object.assign({}, first, {c:5, d:3}) // {} в начале, что бы создать новый объект

//console.log(obj)

// console.log(Object.entries(obj))        // объект в массив
  console.log(Object.keys(obj))
 console.log(Object.values(obj))
