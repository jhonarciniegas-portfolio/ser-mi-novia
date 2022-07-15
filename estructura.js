const sibtn = document.querySelector('#sibtn');

sibtn.addEventListener('click', function () {
  alert('¡Sabía que dirías que sí!');
});
const nobnt = document.querySelector('#nobnt');
nobnt.addEventListener('mouseover', function () {
  const randdomX = parseInt(Math.random() * 100);
  const randomY = parseInt(Math.random() * 100);
  nobnt.style.setProperty('top', randomY + '%');
  nobnt.style.setProperty('left', randdomX + '%');
  nobnt.style.setProperty('transform', `translate(-${randdomX}%,-${randomY}%)`);
});
var perm = true;
$('#sibtn').click(function () {
  if (perm === true) {
    var image = new Image();

    var src = 'img/teamo.png';
    image.src = src;

    $('#image').append(image);
    perm = false;
  }
});

$('#sibtn').click(function (event) {
  $('#image1').remove();
  $('#text').remove();
});
