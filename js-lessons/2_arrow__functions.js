// function sum(a, b) {
//   return a + b
// }
//
// function cube(a) {
//   return a ** 3
// }
//
// const sum = (a, b) => a + b
// const cube = a => a ** 3


// setTimeout(()=> console.log('ololo'), 1000)

// Context

function log() {
  console.log(this)
}

const arrwLog = () => console.log(this)

const person = {
  name: 'Elena',
  age: 20,
  log: log,
  arrowLog: arrwLog,
  delayLog: function () {
    setTimeout( () => {
      console.log(this.name + ' ' + this.age)
    }, 500)

  }

}

//person.arrowLog()

person.delayLog()

