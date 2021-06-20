var btnCheck = document.getElementById('submitBtn')
    var numbers = document.getElementById('number')
    var notifi = document.getElementById('demo')

    function checkNumber(){

     if(numbers.value % 2 == 0){
         notifi.innerHTML =  numbers.value +  ' là số chẵn'
     }
     else{
         notifi.innerHTML =   numbers.value + ' là số lẽ'
     }

    }