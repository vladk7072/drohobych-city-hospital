$(function(){
  $(".header__btn").on("click", function(){
    $(".header__btn").toggleClass("header__btn--active");
    $(".menu").toggleClass("menu--active");
  });
});