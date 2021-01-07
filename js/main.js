'use strict';

{
  const open = document.getElementById('open');
  // const top = document.querySelector('top')
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const openBag = document.getElementById('openBag');
  const bag = document.querySelector('.bag')
  const pcBag = document.getElementById('pcBag');


  open.addEventListener('click', () =>{
    overlay.classList.add('show');
    open.classList.add('hide');
    // top.classList.add('hide');
  });

  close.addEventListener('click', () =>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  openBag.addEventListener('click', () =>{
    bag.classList.toggle('show');
  });

  pcBag.addEventListener('click', () => {
    bag.classList.toggle('show');
  })
}