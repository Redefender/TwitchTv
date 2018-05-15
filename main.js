$(document).ready(function(){
  let users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
   "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","ninja"];

  let url = 'https://wind-bow.glitch.me/twitch-api/users/';
  let urlStream = 'https://wind-bow.glitch.me/twitch-api/streams/'

  //I want to be able to loop through all of these...
  for(let i=0;i<users.length;i++){
    $.get(url + users[i],function(data){


      //assign local
      let logo = data["logo"];
      let name = data["name"];

      //get online status
      $.get(urlStream + users[i],function(data){
        let status = data["stream"];



        //create doc elements
        let section = document.createElement("section");
        let img = document.createElement("img");
        let user = document.createElement("p");

        let onlineStatus = document.createElement("p");

        //give attributes
        section.className = "section";
        section.id = 'section' + i;
        img.src = logo;
        user.className = "user";
        user.innerHTML = name;
        onlineStatus.className = "status";

        onlineStatus.innerHTML = status === null?"offline":"online";
        if(onlineStatus.innerHTML==="online"){ onlineStatus.style.color = "green"; section.classList.add("online")} else{
          section.classList.add("offline");
         }

        console.log(onlineStatus.classList);
        //append
        section.append(img);
        section.append(user)
        section.append(onlineStatus);

        //put into document
        $(".body").append(section);

      })



    });


  }


  let filterOnline = ()=>{
    $(".offline").hide();
    $(".online").show();

  };

  let filterOffline = ()=>{
    $(".online").hide();
    $(".offline").show();


  };

  let showAll = ()=>{
    $(".online").show();
    $(".offline").show();


  };


  $("input[name='offline']").click(function(){
    filterOffline();
  });


  $("input[name='online']").click(function(){
    filterOnline();
  });

    $("input[name='all']").click(function(){
      showAll();
    });

});
