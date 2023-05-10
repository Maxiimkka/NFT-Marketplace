
/*---------Menu-------*/
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');
const navbarLinksItems = navbarLinks.querySelectorAll('li a');

navbarToggle.addEventListener('click', () => {
  if (navbarLinks.classList.contains('active')) {
    navbarLinks.classList.remove('active');
    navbarToggle.setAttribute('aria-expanded', 'false');
  } else {
    navbarLinks.classList.add('active');
    navbarToggle.setAttribute('aria-expanded', 'true');
  }
});

navbarLinksItems.forEach(item => {
  item.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
    navbarToggle.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 200) {
    navbarLinks.style.transform = 'none';
  }
});



function loadCards(collection) {
  fetch("nfts.json")
    .then((response) => response.json())
    .then((data) => {
      const cardsDiv = document.getElementById("cards");
      cardsDiv.innerHTML = ""; // очистить содержимое div перед добавлением новых карточек
      data.forEach((d) => {
        if (d.collection === collection) {
          const card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `
            <div class="front">
              <div>
                <img class="card-img-top" src="${d.img}" id="${d.img}" />
              </div>
              <div class="front-body">
              <span id="name"><b>${d.name}</b></span><br>
              <span id="collection">${d.collection}</span> <img class="famimg" src="img/fa.png"/>
              <div class="buyy">
              <div>Buy now <br><b><span id="current">${d.price}</span> ETH</b></div>
              <button id="btnn" onclick="addToCart(this)">${d.button}</button>
              </div>
              </div>
            </div>
            <div class="back">
            <div id="description">
            <h3>DROP DETAILS</h3>
            <h6>Drop Date<span id="d1">${d.description[0]}</span></h6>
            <h6>Drop Time<span id="d2">${d.description[1]}</span></h6>
            <h6>Price per NFT<span id="d3">${d.description[2]}</span></h6>
            <h6>Royalty<span id="d4">${d.description[3]}</span></h6>
            </div>
            </div>
          `;
          cardsDiv.appendChild(card);
          card.querySelector(".card-img-top").addEventListener("click", () => card.classList.toggle("flipped"));
          card.querySelector(".back").addEventListener("click", () => card.classList.toggle("flipped"));
        }
      });

    })
    .catch((error) => console.error(error));
}
window.addEventListener("load", () => {
  loadCards("Bored Ape Yacht Club");
});

const collection1Button = document.getElementById("collection1");
const collection2Button = document.getElementById("collection2");
const collection3Button = document.getElementById("collection3");
const collection4Button = document.getElementById("collection4");

collection1Button.addEventListener("click", () => loadCards("Bored Ape Yacht Club"));
collection2Button.addEventListener("click", () => loadCards("CruptoPunks"));
collection3Button.addEventListener("click", () => loadCards("Smooth Yeti Mountain Club"));
collection4Button.addEventListener("click", () => loadCards("Boss Cat Rocket Club"));

function changeMainSection(collectionName) {
  var mainSection = document.getElementById('main-section');
  mainSection.style.background = 'url(img/' + collectionName + '.jpg) no-repeat center center fixed';
  mainSection.style.backgroundSize = 'cover';


  var infoSection = document.querySelector('.info');
  var infonft = document.querySelector('.hm');
  var textnft = infonft.querySelectorAll('.txnft');
  var infoboxes = infoSection.querySelectorAll('.i');

  // Map the collection name to the corresponding information
  switch (collectionName) {
    case 'collection1':
      textnft[0].textContent = 'BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.';
      infoboxes[0].textContent = 'Total Volume\n12.4k ETH';
      infoboxes[1].textContent = 'Followers\n5';
      infoboxes[2].textContent = 'Total Items\n678';
      infoboxes[3].textContent = 'Floor\n123 ETH';
      break;
    case 'collection2':
      textnft[0].textContent = 'CryptoPunks are 10,000 uniquely generated characters. No two are exactly alike, and each one can be trustlessly collected by anyone interacting with the Ethereum blockchain.Originally, Punks could be claimed for free using any Ethereum wallet with enough $ETH to cover gas fees.';
      infoboxes[0].textContent = 'Total Volume\n45.7k ETH';
      infoboxes[1].textContent = 'Followers\n6';
      infoboxes[2].textContent = 'Total Items\n456';
      infoboxes[3].textContent = 'Floor\n456 ETH';
      break;
    case 'collection3':
      textnft[0].textContent = 'A collection of 7,500 uniquely generated Yeti NFTs on the Cardano blockchain. High up in the Himalayas, they can often be found at the Smooth Yeti Mountain Club.The Yeti or more commonly referred to as the Abominable Snowman is an ape-like creature purported to inhabit the Himalayan mountain in Asia.'
      infoboxes[1].textContent = 'Followers\n3';
      infoboxes[2].textContent = 'Total Items\n786';
      infoboxes[3].textContent = 'Floor\n556 ETH';
      break;
    case 'collection4':
      textnft[0].textContent = 'Boss Cats is a finite supply of 9,999 algorithmically generated space bound cats living on the Cardano Blockchain.The final tier to the BCRC NFT Ecosystem. The ultimate collection of 3,000 Boss Cat Aliens is the fifth and final collection, representing the ancestral origins to the BCRC story.With the release of 3,333 total Boss Cat Rocket Parts.'
      infoboxes[0].textContent = 'Total Volume\n89.7k ETH';
      infoboxes[1].textContent = 'Followers\n7';
      infoboxes[2].textContent = 'Total Items\n128';
      infoboxes[3].textContent = 'Floor\n956 ETH';
      break;
  }
}

const buttons = document.querySelectorAll('.cards-button');
const header = document.querySelector('.h');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const collectionName = button.textContent;
    header.textContent = collectionName;
  });
});



function addToCart(btn) {
  btn.disabled = true; // Отключаем кнопку, чтобы ее больше нельзя было нажать
  btn.textContent = 'Added'; // Меняем надпись на кнопке на "Added"
}





// Инициализация корзины и ее содержимого
const basket = {
  items: [], // массив с товарами в корзине
  total: 0, // общая стоимость товаров в корзине
  add(item) { // метод для добавления товара в корзину
    this.items.push(item);
    this.total += item.price;
  },
  remove(index) { // метод для удаления товара из корзины
    const item = this.items[index];
    this.total -= item.price;
    this.items.splice(index, 1);
  },
  clear() { // метод для очистки корзины
    this.items = [];
    this.total = 0;
  }
};

// Функция для отображения содержимого корзины
function showBasket() {
  const basketList = document.getElementById("basket-list");
  const basketTotal = document.getElementById("basket-total");
  basketList.innerHTML = "";
  basket.items.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = ` <img class="img-top" src="${item.img}" > <span>${item.name}</span> - ${item.price} ETH. <button class="remove-btn" data-index="${index}">🗑</button>`;
    basketList.appendChild(li);
  });
  basketTotal.innerHTML = `Total: ${basket.total} ETH.`;
}



const basketBtn = document.getElementById("basket-btn");
const basketContainer = document.getElementById("basket-container");

basketBtn.addEventListener("click", () => {
  basketContainer.style.setProperty("display", "block"); // показываем корзину
  document.body.style.overflow = "hidden"; // блокируем прокрутку страницы

});



// Обработчик клика по кнопке "Закрыть корзину"
const closeBasketBtn = document.getElementById("close-basket-btn");
closeBasketBtn.addEventListener("click", () => {
  basketContainer.style.setProperty("display", "none"); // скрываем корзину
  document.body.style.overflowY = "auto"; // включаем прокрутку страницы

});




// Обработчик клика по кнопке "Добавить в корзину"
const cardsDiv = document.getElementById("cards");
cardsDiv.addEventListener("click", (event) => {
  const target = event.target;
  if (target.matches("#btnn")) { // если была нажата кнопка "Добавить в корзину"
    const card = target.closest(".card");
    const name = card.querySelector("#name").textContent;
    const price = Number(card.querySelector("#current").textContent);
    const img = card.querySelector(".card-img-top").src;
    basket.add({ name, price, img }); // добавляем товар в корзину
    showBasket(); // обновляем содержимое корзины на странице
  }
});

// Обработчик клика по кнопке "Удалить"
const basketList = document.getElementById("basket-list");
basketList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.matches(".remove-btn")) { // если была нажата кнопка "Удалить"
    const index = Number(target.getAttribute("data-index"));
    basket.remove(index); // удаляем товар из корзины
    showBasket(); // обновляем содержимое корзины на странице
  }
});

// Обработчик клика по кнопке "Оформить заказ"
const checkoutBtn = document.getElementById("checkout-btn");
const confirmm = document.getElementById("confirmm");
checkoutBtn.addEventListener("click", () => {
  if (basket.items.length !== 0) {
    confirmm.style.setProperty("display", "flex");
    basketContainer.style.setProperty("display", "none"); // скрываем корзину
  } else {
    basketList.innerHTML = `<h2 class="em">Looks Like You Haven't Added Any Product In The Basket</h2>`
  }
});

// Добавляем обработчик клика по кнопке "OK"
const okBtn = confirmm.querySelector(".d");
okBtn.addEventListener("click", () => {
  confirmm.style.setProperty("display", "none");
  document.body.style.overflowY = "auto";
  basket.clear(); // очищаем корзину
  showBasket(); // обновляем содержимое корзины на странице
});


// Обработчик клика по кнопке "Очистить корзину"
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
  basket.clear(); // очищаем корзину
  showBasket(); // обновляем содержимое корзины на странице
});

