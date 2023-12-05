var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var form = document.getElementById("form");

function validateForm(){
    if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
      alert("All fields are required!");
      document.getElementById("submit").removeEventListener("click", countBmi);
    }else{
      countBmi();
    }
}
