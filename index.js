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

document.addEventListener('DOMContentLoaded', () => {
  const inputCarForm = document.getElementById('carInput')
  const inputMilesForm = document.getElementById('milesForm')

  inputCarForm.addEventListener('submit', carFormSubmit)
})

const carFormSubmit = () => {
  event.preventDefault()
  const {carName: {value: carName},
         carCost: {value: carCost},
         carAvgMpg: {value: carAvgMpg}} = event.target
  const carProperties = {carCost, carAvgMpg}

  carListObject[carName] = carProperties
  addCarToList(carName)
}

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
