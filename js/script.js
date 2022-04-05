// Created by: Katie
// Created on: March 2022
// This file contains the JS functions for index.html
"use strict"

function calculateEurosClicked() {
  // This function will calculate the quantity of euros and make it appear when the button is clicked :)
  
  // Getting canadian dollars from user number field input and casting integer
  let canadianDollars = parseInt(document.getElementById("canadian-dollars").value);
  
  // doing the calculations and declaring the constant
  const CONVERSION_RATE = "1.38070102499";
  let valueInEuros = canadianDollars / CONVERSION_RATE;
  
  // Printing the value out onto the screen. 
  document.getElementById('calculated-euros').innerHTML = "$" + canadianDollars + "CAD converted into EUR (euros) is equal to approximately (because the value is rounded to two decimal places) " + valueInEuros.toFixed(2) + "."
}