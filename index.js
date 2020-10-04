let carListObject = {}

const addCarToList = (carName) => {
  const carList = document.getElementById('carList')
  const carListLi = document.createElement('li')
  const carListCarName = document.createElement('p')
  const carListCarCost = document.createElement('p')
  const carListCarAvgMpg = document.createElement('p')

  carListLi.dataset.carName = carName
  carListLi.classList.add('centerRow')
  carListCarName.innerText = carName
  carListCarCost.innerText = `${carListObject[carName].carCost}`
  carListCarAvgMpg.innerText = `${carListObject[carName].carAvgMpg}`

  carListLi.append(carListCarName)
  carListLi.append(carListCarCost)
  carListLi.append(carListCarAvgMpg)
  carList.append(carListLi)

  if (carList.classList.contains("hidden")) {
    carList.classList.remove("hidden")
  }
}

const carFormSubmit = () => {
  event.preventDefault()
  const {carName: {value: carName},
         carCost: {value: carCost},
         carAvgMpg: {value: carAvgMpg}} = event.target
  const carProperties = {carCost, carAvgMpg}

  carListObject[carName] = carProperties
  addCarToList(carName)
}

const milesFormSubmit = () => {
  event.preventDefault()

  const carList = document.getElementById('carList').children

  for (const x of carList) {
    if (x.dataset.carName === undefined) {
      continue
    }
    console.log("bye")
  }

  //carList.children[0].dataset.carName === undefined, this is row titles
  // carList.querySelectorAll('li')[0].dataset.carName === undefined, this is row titles
  // carList.querySelectorAll('ul > li')[0].dataset.carName === undefined, this is row titles
  // carList.querySelectorAll('ul > *')[0].dataset.carName === undefined, this is row titles
}

document.addEventListener('DOMContentLoaded', () => {
  const inputCarForm = document.getElementById('carInput')
  const inputMilesForm = document.getElementById('milesForm')

  inputCarForm.addEventListener('submit', carFormSubmit)
  inputMilesForm.addEventListener('submit', milesFormSubmit)
})

// const carFormSubmit = () => {
//   event.preventDefault()
//   const {carName: {value: carName},
//          carCost: {value: carCost},
//          carAvgMpg: {value: carAvgMpg}} = event.target
//   const carProperties = {carCost, carAvgMpg}
//
//   carListObject[carName] = carProperties
//   addCarToList(carName)
// }

// const {
//   name,
//   surname,
//   skills: {
//     JavaScript: { years: javaScriptYears },
//     React: { years: reactYears },
//   },
// } = person;
//
// console.log(name, surname, javaScriptYears, reactYears);
// // Barry Doyle 7 4

// inputMilesForm.addEventListener('submit', (event) => milesFormSubmit(event, inputMilesForm))
//
//
// const milesFormSubmit = (event, inputMilesForm) => {
//   event.preventDefault()
//
// }
