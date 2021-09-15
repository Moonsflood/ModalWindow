'use strict';

//Elements with class modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

//Function for closing the modal 
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

//Function for closing the modal 
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

//Going through the modals 
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//executing closing the modal 
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);