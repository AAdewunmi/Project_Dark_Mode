/*jslint node: true */
/* jshint expr: true */ 
"use strict";

const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  container.classList.toggle("dark") ? 
  (toggle.firstElementChild.className = "far fa-moon") : 
    (toggle.firstElementChild.className = "fas fa-sun");
});
