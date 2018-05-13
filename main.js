$(document).ready(function(){
  let users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
   "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","ninja"];

  let url = 'https://wind-bow.glitch.me/twitch-api/users/';
  let urlStream = 'https://wind-bow.glitch.me/twitch-api/streams/'

  //I want to be able to loop through all of these...
  for(let i=0;i<users.length;i++){
    $.get(url + users[i],function(data){
      console.log(data["logo"]);

      //assign local
      let logo = data["logo"];
      let name = data["name"];

      //get online status
      $.get(urlStream + users[i],function(data){
        let status = data["stream"];

        console.log("api status",status);

        //create doc elements
        let section = document.createElement("section");
        let img = document.createElement("img");
        let user = document.createElement("p");
        console.log(user);
        let onlineStatus = document.createElement("p");

        //give attributes
        section.className = "section";
        img.src = logo;
        user.className = "user";
        user.innerHTML = name;
        onlineStatus.className = "status";
        console.log('onlineStatus:',onlineStatus);
        onlineStatus.innerHTML = status === null?"offline":"online";
        if(onlineStatus.innerHTML==="online") onlineStatus.style.color = "green";

        //append
        section.append(img);
        section.append(user)
        section.append(onlineStatus);

        //put into document
        $(".body").append(section);

      })



    });


  }






});
