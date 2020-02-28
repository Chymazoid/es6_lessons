class Programmer {
  constructor(name) {
    this.name = name
  }

  code() {
    console.log(`${this.name} is coding ...`)
  }
}

class Frontend extends Programmer {
  angular() {
    console.log(`${this.name} is creating Angular app ...`)
  }
}

class Backend extends Programmer {
  nodejs() {
    console.log(`${this.name} is programming on node.js ...`)
  }

}


class Fullstack extends Programmer {

}

const programmer = new Programmer('Vasya')
programmer.code()

const frontend = new Frontend('Frontend')
frontend.code()
frontend.angular()

const backend = new Backend('Maxim')
backend.code()
backend.nodejs()
