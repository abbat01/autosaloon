const cars = [
    {
      "id": 1,
      "name": "BMW M5",
      "img": "./assets/img/01 .JPG",
      "price": "10000$",
      "capacity": "обьем двигателя",
      "year": "год выпуска",
      "mileage": "пробег",
      "transmission": "коробка передач",
    },
    {
      "id": 2,
      "name": "BMW M3",
      "img": "./assets/img/02 .JPG",
      "price": "20000$",
      "capacity": "обьем двигателя",
      "year": "год выпуска",
      "mileage": "пробег",
      "transmission": "коробка передач",
    },
    {
      "id": 3,
      "name": "BMW M4",
      "img": "./assets/img/03 .JPG",
      "price": "30000$",
      "capacity": "обьем двигателя",
      "year": "год выпуска",
      "mileage": "пробег",
      "transmission": "коробка передач",
    },
  ]

  function createCard(num) {
    const cardContainer = document.querySelector('.cards')
    console.log(cardContainer)
    
    const card = document.createElement('div')
    card.classList.add('card')
    
    const cardImage = document.createElement('img')
    cardImage.src = cars[num].img;
    card.appendChild(cardImage)
    
    const cardTitle = document.createElement('h4')
    cardTitle.innerHTML = 'BMW M5'
    card.appendChild(cardTitle)
    
    const cardButtons = document.createElement('div')
    cardButtons.classList.add('card-buttons')
    card.appendChild(cardButtons)
    
    const cardBtn = document.createElement('button')
    cardBtn.classList.add('card-btn')
    cardBtn.id = cars[num].id
    cardBtn.innerHTML = 'подробнее'
    cardButtons.appendChild(cardBtn)
    
    const cardLink = document.createElement('a')
    cardLink.innerHTML = 'купить'
    cardButtons.appendChild(cardLink)
    
    cardContainer.appendChild(card)
  }

createCard(1)
createCard(0)
createCard(2)
// modal


window.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.modal-overlay')) {
      modalOverlay.style.display = 'none';
      deleteCards()
    }
  })

function deleteCards() {
    document.querySelectorAll('.modal-image').forEach((el) => {el.style.display = 'none'})
    document.querySelectorAll('.modal-desc').forEach((el) => {el.style.display = 'none'})
}

const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const body = document.querySelector('.body')

const carBtns = document.querySelectorAll('.card-btn')
carBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    console.log(el.id)
    if (el.id) {
        
      generateModal(el.id)
    //   deleteCards()
    }
  })
})

function generateModal(numImage) {
    modalOverlay.style.display = 'flex';

    const modalClose = document.createElement('div')
    modalClose.innerHTML = '&#x2715;'
    modalClose.classList.add('modal-close')
    modalClose.addEventListener('click', () => {
      modalOverlay.style.display = 'none';
      deleteCards()
    })
    modal.appendChild(modalClose)
    

    const modalImage = document.createElement('img')
    modalImage.classList.add('modal-image')
    modalImage.src = `./assets/img/0${cars[numImage - 1].id} .JPG`;
    modal.appendChild(modalImage)

    const modalDesc = document.createElement('div')
    modalDesc.classList.add('modal-desc')

    const modalTitle = document.createElement('h4')
    modalTitle.classList.add('modal-title')
    modalTitle.innerHTML = cars[numImage - 1].name
    modalDesc.appendChild(modalTitle)
    

    const modalPrice = document.createElement('p')
    modalPrice.classList.add('modal-price')
    modalPrice.innerHTML = cars[numImage - 1].price
    modalDesc.appendChild(modalPrice)

    const modalCapacity = document.createElement('p')
    modalCapacity.classList.add('modal-capacity')
    modalCapacity.innerHTML = `Объём двигателя: ${cars[numImage - 1].capacity}`
    modalDesc.appendChild(modalCapacity)

    const modalYear = document.createElement('p')
    modalYear.classList.add('modal-year')
    modalYear.innerHTML = `Год выпуска: ${cars[numImage - 1].year}`
    modalDesc.appendChild(modalYear)

    const modalMileage = document.createElement('p')
    modalMileage.classList.add('modal-mileage')
    modalMileage.innerHTML = `Пробег: ${cars[numImage - 1].mileage}`
    modalDesc.appendChild(modalMileage)

    const modalTransmission  = document.createElement('p')
    modalTransmission.classList.add('modal-transmisson')
    modalTransmission.innerHTML = `Коробка передач: ${cars[numImage -1].transmission}`
    modalDesc.appendChild(modalTransmission)

    const modalBuy = document.createElement('a')
    modalBuy.classList.add('modal-link')
    modalBuy.innerHTML = 'купить'
    modalDesc.appendChild(modalBuy)


    modal.appendChild(modalDesc)
  }

// document.querySelector('.modal-close').addEventListener('click', () => {
//   modalOverlay.style.display = 'none';
//       deleteCards()
// })
