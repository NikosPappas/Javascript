/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function calculate(){
    let height = parseFloat(document.getElementById('Height').value);
    let weight = parseFloat(document.getElementById('Weight').value);
    let bmi = weight / (height/100)**2;
    bmi = bmi.toFixed(2);
    if (bmi > 0 && bmi <= 15) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi;
  } else if (bmi > 15 && bmi <= 16) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi;
  } else if (bmi > 16 && bmi <= 18.5) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi;
  } else if (bmi > 18.5 && bmi <= 25) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi;
  } else if (bmi > 25 && bmi <= 30) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi;
  } else if (bmi > 30 && bmi <= 35) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi; 
} else if (bmi > 35 && bmi <= 40) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi;
  } else if (bmi > 40 && bmi <= 45) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi;
  } else if (bmi > 45 && bmi <= 50) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi;
  } else if (bmi > 50 && bmi <= 60) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi;
  } else if (bmi > 60) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi;
  } else {
    document.getElementById('output').innerHTML = 'Please type valid numbers.';
  }
}
