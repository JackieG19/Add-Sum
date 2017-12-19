//document.getElementById("sumDigits").onsubmit = function(event){
//      console.log("form submited");
//      event.preventDefault();
//};

/* Submit Numbers html */
document.getElementById("submit").onclick = function(){
  // takes the numbers text field and display then in our display area 
  var input = document.getElementById("input").value; // get a value
  //console.log(input);
  document.getElementById("display").innerHTML += input;
  document.getElementById("input").value = ""; // set a value
};

/* Add Digits html */
document.getElementById("addDigits").onclick = function(){
    //console.log("addDigits clicked");
    //get the sum of the digits displayed field
  var display = document.getElementById("display").innerHTML;
    //console.log(display);
    var runningTotal = 0;
    for(var i = 0; i < display.length; i++){
       // console.log(display[i]);
        runningTotal += parseInt(display[i]); 
        //runningTotal = runningTotal + parseInt(display[i]);
       console.log(runningTotal); 
       document.getElementById("display").innerHTML = runningTotal;
    }
};