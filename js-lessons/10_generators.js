const array = [10, 20, 30, 40]
const str = 'Hello'


//console.log(str[Symbol.iterator])

/*const iter = array[Symbol.iterator]()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())*/
//
// for (let item of str) {
//   console.log(item)
// }


// const country = {
//   values :['ru', 'kz', 'ua', 'by'],
//   [Symbol.iterator]() {
//     let i=0
//     return {
//       next: () => {
//         const value = this.values[i]
//         i++
//         return {
//           done: i > this.values.length,
//           value
//         }
//       }
//     }
//   }
// }
//
//
