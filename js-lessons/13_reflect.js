class Student {
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(`My name is ${this.name}`)
  }
}

class ProtoStudent {
  //university = 'Oxford'
}

const student = Reflect.construct(Student, ['Igor'], ProtoStudent)

//console.log(student)

Reflect.apply(student.greet, {name: 'Tester'})
