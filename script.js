let drivenEats
let drivenDrinks
let drivenDessert
let orderedFood
let eats
let eatPrice
let drinks
let drinkPrice
let dessert
let dessertPrice
let sumNumber
let userName
let userLiving

// food selection
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

// User will confirm his order
function seeOrders() {
  userName = prompt('Qual seu nome?')
  userLiving = prompt('Qual seu endereço?')

  eats = drivenEats.querySelector('h3').innerHTML
  eatPrice = drivenEats.querySelector('span').innerHTML

  drinks = drivenDrinks.querySelector('h3').innerHTML
  drinkPrice = drivenDrinks.querySelector('span').innerHTML

  dessert = drivenDessert.querySelector('h3').innerHTML
  dessertPrice = drivenDessert.querySelector('span').innerHTML

  sumNumber =
    Number(eatPrice.replace(',', '.')) +
    Number(drinkPrice.replace(',', '.')) +
    Number(dessertPrice.replace(',', '.'))

  let items = document.querySelector('.askOrder')
  items.classList.remove('none')

  let food = document.querySelector('.orders')
  food.innerHTML = `<p>Confirme seu pedido</p>
  <div class="items">
    <p>${eats}</p>
    <p>${eatPrice}</p>
  </div>
  <div class="items">
    <p>${drinks}</p>
    <p>${drinkPrice}</p>
  </div>
  <div class="items">
    <p>${dessert}</p>
    <p>${dessertPrice}</p>
  </div>
  <div class="full-price">
    <p>TOTAL</p>
    <p>R$ ${sumNumber.toFixed(2)}</p>
  </div>
  <button onclick="whatsappMsg()"><p>Tudo certo, pode pedir!</p></button>
  <p onclick="cancelOrder()">Cancelar</p>`
}

//Sending a whatsapp message
function whatsappMsg() {
  let textMsg = window.encodeURIComponent(
    `Olá, gostaria de fazer o pedido:\n- Prato: ${eats}\n- Bebida: ${drinks}\n- Sobremesa: ${dessert}\nTotal: R$ ${sumNumber.toFixed(
      2
    )}\n\nNome: ${userName}\nEndereço: ${userLiving}`
  )

  window.open(
    `https://api.whatsapp.com/send?l=pt
    -BR&text=${textMsg}&phone=5581999999999`,
    '_blank'
  )
}

//Food canceling
function cancelOrder() {
  const cancel = document.querySelector('.askOrder')
  cancel.classList.add('none')

  const cancelOrders1 = document.querySelector('.selected-food1')
  cancelOrders1.classList.remove('selected-food1')

  const cancelOrders2 = document.querySelector('.selected-food2')
  cancelOrders2.classList.remove('selected-food2')

  const cancelOrders3 = document.querySelector('.selected-food3')
  cancelOrders3.classList.remove('selected-food3')
}
