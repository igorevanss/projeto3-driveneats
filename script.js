// food selection
let drivenEats
let drivenDrinks
let drivenDessert
let orderedFood

function selectedFood(clickedFood) {
  drivenEats = document.querySelector('.selected-food1')
  if (drivenEats !== null) {
    drivenEats.classList.remove('selected-food1')
  }
  clickedFood.classList.add('selected-food1')
  drivenEats = document.querySelector('.selected-food1')
  allSelected()
}

function selectedDrink(clickedFood) {
  drivenDrinks = document.querySelector('.selected-food2')
  if (drivenDrinks !== null) {
    drivenDrinks.classList.remove('selected-food2')
  }
  clickedFood.classList.add('selected-food2')
  drivenDrinks = document.querySelector('.selected-food2')
  allSelected()
}

function selectedDessert(clickedFood) {
  drivenDessert = document.querySelector('.selected-food3')
  if (drivenDessert !== null) {
    drivenDessert.classList.remove('selected-food3')
  }
  clickedFood.classList.add('selected-food3')
  drivenDessert = document.querySelector('.selected-food3')
  allSelected()
}

// Food ordering can be done
function allSelected() {
  if (
    drivenEats !== undefined &&
    drivenDrinks !== undefined &&
    drivenDessert !== undefined
  ) {
    orderedFood = document.querySelector('footer')
    orderedFood.classList.add('all-selected')
  }
}