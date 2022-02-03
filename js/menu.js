$(document).ready(function()
{
  $('.mobile').on('click', function()
  {
  	console.log('test');
    $('.mobile').addClass('active');

    $('.cross').addClass('cross-active');
    $('.menu-respons').addClass('menu-respons-active');
    $('.div-phone').addClass('menu-respons-active');
  });

  $('.cross').on('click', function()
  {
    $('.mobile').removeClass('active');
    $('.cross').removeClass('cross-active');
    $('.menu-respons').removeClass('menu-respons-active');
    $('.div-phone').removeClass('menu-respons-active');

  });

});