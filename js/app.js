document.addEventListener("DOMContentLoaded", function(){
var checkbox = document.querySelector(".input");
var checkbox2 = document.querySelector(".input2");
var checked = document.querySelector(".bord");
var checked2 = document.querySelector(".bord2");

checkbox.addEventListener("click", function(event){
  if(checkbox.checked === false){
    checked.innerHTML = "<span class='check'></span>";
  }
  else{
    checked.innerHTML = "";
  }
})
checkbox2.addEventListener("click", function(event){
  if(checkbox2.checked === false){
    checked2.innerHTML = "<span class='check'></span>";
  }
  else{
    checked2.innerHTML = "";
  }
})

});
