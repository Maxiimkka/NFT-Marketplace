
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

function highlightCards(card) {
  // Получаем все элементы "a" в секции
  const cards = card.parentElement.querySelectorAll('a');

  // Устанавливаем непрозрачность 0.5 для всех элементов "a", кроме текущего элемента
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] !== card) {
      cards[i].style.opacity = '0.2';
    }
  }
}

// Обработчик события "onmouseout" для сброса непрозрачности всех элементов "a"
document.addEventListener('mouseout', function (event) {
  const cards = document.querySelectorAll('.cn a');
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.opacity = '1.0';
  }
});


