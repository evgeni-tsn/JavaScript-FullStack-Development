/**
 * Created by evgeni.tsn on 21-Oct-16.
 */

function subtract(){
  let num1 = document.getElementById('firstNumber').value;
  let num2 = document.getElementById('secondNumber').value;
  let result = Number(num1) - Number(num2);
  document.getElementById('result').innerHTML = result;
}