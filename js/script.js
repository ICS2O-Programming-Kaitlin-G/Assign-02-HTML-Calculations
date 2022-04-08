// Created by: Katie
// Created on: March 2022
// This file contains the JS functions for index.html
"use strict"

function calculateEurosClicked() {
  // This function will calculate the quantity of euros and make it appear when the button is clicked :)
  
  // Getting canadian dollars from user number field input and casting integer
  let canadianDollars = parseInt(document.getElementById("canadian-dollars-for-euro-calculation").value);
  
  // doing the calculations and declaring the constant
  const CONVERSION_RATE_EUR = "1.38070102499";
  let valueInEuros = canadianDollars / CONVERSION_RATE_EUR;
  
  // Printing the value out onto the screen. 
  document.getElementById('calculated-euros').innerHTML = "$" + canadianDollars + "CAD converted into EUR (euros) is equal to approximately (because the value is rounded to two decimal places) " + valueInEuros.toFixed(2) + "."
}

function calculateKronasClicked() {
  // This function will calculate the quantity of kronas and make it appear when the button is clicked wow its just like the one above it
  
  // Getting canadian dollars from user number field input and casting integer
  let canadianDollars = parseInt(document.getElementById("canadian-dollars-for-krona-calculation").value);
  
  // doing the calculations and declaring the constant
  const CONVERSION_RATE_SEK = "0.13313098665";
  let valueInKronas = canadianDollars / CONVERSION_RATE_SEK;
  
  // Printing the value out onto the screen. 
  document.getElementById('calculated-kronas').innerHTML = "$" + canadianDollars + "CAD converted into SEK (Swedish Krona) is equal to approximately (because the value is rounded to two decimal places) " + valueInKronas.toFixed(2) + "."
}