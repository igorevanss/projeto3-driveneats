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

//Sending a whatsapp message
function whatsappMsg() {
  let eats = drivenEats.querySelector('h3').innerHTML
  let eatPrice = drivenEats.querySelector('span').innerHTML

  let drinks = drivenDrinks.querySelector('h3').innerHTML
  let drinkPrice = drivenDrinks.querySelector('span').innerHTML

  let dessert = drivenDessert.querySelector('h3').innerHTML
  let dessertPrice = drivenDessert.querySelector('span').innerHTML

  let sumNumber =
    Number(eatPrice.replace(',', '.')) +
    Number(drinkPrice.replace(',', '.')) +
    Number(dessertPrice.replace(',', '.'))

  console.log(sumNumber.toFixed(2))

  let textMsg = window.encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${eats}\n- Bebida: ${drinks}\n- Sobremesa: ${dessert}\nTotal: ${sumNumber.toFixed(2)}`);

  window.open(`https://api.whatsapp.com/send?l=pt-BR&text=${textMsg}&phone=5581994525219`, '_blank');
}