const defaultB = 30
const getDefault = c => c * 2
function compute(a = getDefault(10), b = defaultB, c = getDefault(a)) {
  return a + b + c
}


console.log(compute(10))
