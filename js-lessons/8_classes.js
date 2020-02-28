'use strict';
class Person {

  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(this.name + ' говорит привет!')
  }

}

const max = new Person('max')


//console.log(max.__proto__ === Person.prototype)


class Programmer extends Person {
  constructor(name, job){
    super(name)
    this._job = job
  }

  get job() {
    return this._job.toUpperCase()
  }

  set job(job) {
    if(job.length < 2) {
      throw  new Error('Valid error')
    } else {
      this._job =job
    }

  }

  greet() {
    super.greet()
    console.log('rewrating')
  }
}


const frontend = new Programmer('max', 'frontend')

//console.log(frontend.job)
//frontend.job = '13'
//console.log(frontend.job)
//frontend.greet()


//Static


class Util {
  static average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
  }
}


// const util = new Util()
// console.log(util.average(1,1,2,3,5,8,13))

const res = Util.average(1,1,2,3,5,8,13)
console.log(res)
