const card = document.querySelectorAll(".card-container");
const menu = document.querySelector(".menu-container");
const aside = document.querySelector(".aside");

card.forEach((item, index) => {
  let atribute = item.getAttribute('class');
  const cardChild = document.querySelectorAll(`.${atribute} .card-child-${index}`);

  cardChild.forEach(child => {
    addFunctionButton(item, child);
  });

});

function addFunctionButton(item, itemChild) {
  item.addEventListener('mousemove', (e) => {

    itemChild.style.transition = `0s`;
  
    let xAxis = (item.offsetWidth / 1.75 - e.offsetX) / 25;
    let yAxis = (item.offsetHeight / 3.15 - e.offsetY) / 25;
  
    itemChild.style.transform = `translateX(${xAxis * 2}px) translateY(${yAxis * 2}px)`;
  
  });
  
  item.addEventListener('mouseout', (e) => {
    
    itemChild.style.transform = `translateX(0px) translateY(0px)`;
    itemChild.style.transition = `0.5s`;
  
  
  });
}

function $(element) {
  return document.querySelector(element);
}

var toggleMenu = false;

menu.addEventListener('click', (e) => {

  if (!toggleMenu) {
    $('.menu').classList.add('menu-close');
    openAside();
    toggleMenu = true;

    setTimeout(() => {
      $('.aside').classList.add('aside-show');
      $('.aside-show').classList.remove('aside-transition-open');
    }, 300);

  } else {
    $('.menu').classList.remove('menu-close');
    $('.aside').classList.remove('aside-show');
    toggleMenu = false;
  }

});

function openAside () {
  $('.aside').classList.add('aside-transition-open');
}