var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var timerId;

function removing() {
  modal.classList.remove('modal_active');
}

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
  timerId = setTimeout(removing, 5000);
});

close.addEventListener('click', function() {
  clearTimeout(timerId);
  removing();
});
