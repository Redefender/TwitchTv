$(document).ready(function(){
  let users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
   "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

  let url = 'https://wind-bow.glitch.me/twitch-api/users/ESL_SC2';

   $.get(url,function(data){
     console.log(data);
   });







});
