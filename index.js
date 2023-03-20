const removeItems = document.querySelectorAll('.delete')
const plusBtn = document.querySelectorAll('.add-button')
const subBtn = document.querySelectorAll('.sub-button')
const likeBtn = document.querySelectorAll('.fa-solid')

likeBtn.forEach(function name(btn) {
  btn.addEventListener('click', changeColor)
})

function changeColor(event) {
  const buttonClicked = event.target
  let like = document.querySelectorAll('.fa-solid')
  buttonClicked.classList.toggle('red')
}
removeItems.forEach(function (btn) {
  btn.addEventListener('click', (event) => {
    const buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateTotal()
  })
})

plusBtn.forEach(function (btn) {
  btn.addEventListener('click', function increaseQty() {
    btn.nextElementSibling.textContent =
      parseInt(btn.nextElementSibling.textContent) + 1
    subTotalPlus(this)
    updateTotal()
  })
})

subBtn.forEach(function (btn) {
  btn.addEventListener('click', function decreaseQty() {
    btn.previousElementSibling.textContent =
      parseInt(btn.previousElementSibling.textContent) - 1
    if (btn.previousElementSibling.textContent < 0) {
      btn.previousElementSibling.textContent = 0
    }
    subTotalMinus(this)
    updateTotal()
  })
})

function subTotalPlus(element) {
  let price = parseInt(
    element.parentElement.previousElementSibling.innerText.replace('$', '')
  )
  let quantity = parseInt(element.nextElementSibling.innerText.replace('$', ''))
  let subT = price * quantity
  element.parentElement.nextElementSibling.innerText = '$' + subT + '.00'
}
function subTotalMinus(element) {
  let price = parseInt(
    element.parentElement.previousElementSibling.innerText.replace('$', '')
  )
  let quantity = parseInt(
    element.previousElementSibling.innerText.replace('$', '')
  )
  let subT = price * quantity
  element.parentElement.nextElementSibling.innerText = '$' + subT + '.00'
}

function updateTotal(element) {
  const cartItems = document.querySelectorAll('.items')
  let total = 0
  cartItems.forEach(function (item) {
    let subTotalElement = item.querySelector('.sub-total')
    let subTotal = parseInt(subTotalElement.innerText.replace('$', ''))
    console.log((total = total + subTotal))
  })
  document.querySelector('.total-price').innerText = '$' + total
}
