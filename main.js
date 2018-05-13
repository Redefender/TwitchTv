$(document).ready(function(){
  let status = document.querySelector(".status");

  if(status.innerHTML === "offline"){
    status.styles.color = "red";
  } else{
    status.styles.color = "green";
  }





});
