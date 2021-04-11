"use strict";

const menuBtn = document.getElementById("mobile-menu-btn");
const closeBtn = document.querySelector(".mobile-menu-close-btn");
const navContainer = document.querySelector(".nav-container");

menuBtn.addEventListener("click", function () {
  navContainer.classList.remove("menu-close");
  navContainer.classList.add("menu-open");
  closeBtn.classList.add("close-btn-open");
});
closeBtn.addEventListener("click", function () {
  navContainer.classList.add("menu-close");
  navContainer.classList.remove("menu-open");
  closeBtn.classList.remove("close-btn-open");
});
console.log(menuBtn, closeBtn, navContainer);
