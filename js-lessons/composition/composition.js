function createProgrammer(name) {
  const programmer = {name}
  return {
    ...programmer,
    ...canCode(programmer)
  }
}

function canCode({ name }) {
  return {
    code: () => console.log(`${name} is coding ...`)
  }
}

function canAngular({ name }) {
  return {
    angular: () => console.log(`${name} is creating Angular app ...`)
  }
}

function canNodejs({ name }) {
  return {
    nodejs: () => console.log(`${name} is creating Node.js app ...`)
  }
}


function createFrontend(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canAngular(programmer)
  }
}

function createBackend(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canNodejs(programmer)
  }
}

function createFullstack(name) {
  const programmer = createProgrammer(name)
  return {
    ...programmer,
    ...canNodejs(programmer),
    ...canAngular(programmer)
  }
}


const prog = createProgrammer('Oleg')
prog.code()

const front = createFrontend('front')
front.angular()

const back = createBackend('back')
back.nodejs()

const fullstask = createFullstack('Zaza')
fullstask.nodejs()
