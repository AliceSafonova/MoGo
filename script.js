let button = document.querySelector('.mobileMenu');
let navigation = document.querySelector('.menu');
let mobileLine = document.querySelector('.mobileLine');

button.addEventListener('click', () => {
  if (navigation.className === 'menu') {
    navigation.classList.add("open")
  } 
  else  {
    navigation.classList.remove("open")
  }

  if(mobileLine.className === 'mobileLine') {
    mobileLine.classList.add('open') 
  } else {
    mobileLine.classList.remove('open')
  }
})


let modal = document.querySelector('.infoBlock__modal');
let modalBlock = document.querySelector('.infoBlock__modalBlock');

modal.addEventListener('click', () => {
  if (modalBlock.className === 'infoBlock__modalBlock') {
    modalBlock.style.display = 'block'
  } else {
    modalBlock.style.display = 'none'
  }
})
