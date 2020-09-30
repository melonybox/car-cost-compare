let carList = {}

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

  carList[carName] = carProperties
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
