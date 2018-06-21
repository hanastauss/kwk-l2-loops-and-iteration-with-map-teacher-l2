// Code your solution in this file.

const newArray = []
const newArray2 = []
const newArray3 = [] 

function change(thing) {
  thing = thing.toLowerCase()
  newArray.push(thing)
}

function lowerCaseStudentNames(array) {
  array.map(change)
  return newArray
}

function alter(thing2) {
  thing2 = thing2.split(" ")
  thing2 = {firstName: thing2[0], lastName: thing2[1]}
  newArray2.push(thing2)
}

function nameToAttributes(array) {
  array.map(alter)
  return newArray2
}

function modify(thing3) {
  newArray3.push(`${thing3.name} is from ${thing3.hometown}`)
}

function attributesToPhrase(array) {
  array.map(modify)
  return newArray3
} 
