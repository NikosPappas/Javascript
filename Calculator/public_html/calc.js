/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

            
const display=document.getElementById("display");
function appendToDisplay(input){
      display.value+=input;
  }
  function clear(){
      display.value = "";
  }
  function calculate(){
      try{
          display.value=eval(display.value);
      }
      catch(error){
          display.value=error;
      }
  }

  