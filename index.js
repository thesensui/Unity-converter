/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281
const volumeToGallons = 0.264
const massToPounds = 2.204

const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

btnEl.addEventListener("click", function() {
    let baseValue = inputEl.value 
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * volumeToGallons).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / volumeToGallons).toFixed(3)} liters` 
    massEl.textContent = `${baseValue} kilos = ${(baseValue * massToPounds).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / massToPounds).toFixed(3)} kilos` 
    
})