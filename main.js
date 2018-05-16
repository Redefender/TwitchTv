$(document).ready(function(){


  let users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
   "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","ninja","anarchyxninja1"];

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

        let  statusDetails  = () =>{ //details is user is online
          onlineStatus.innerHTML = status["channel"]["status"];
          onlineStatus.style.whiteSpace = 'normal';

            // onlineStatus.innerHTMl = status["channel"]["status"];
        };

        //create doc elements
        let section = document.createElement("section");
        let img = document.createElement("img");
        let user = document.createElement("a");

        let onlineStatus = document.createElement("P");

        //give attributes
        section.className = "section";
        section.id = 'section' + i;
        img.src = logo;
        user.className = "user";
        user.innerHTML = name;
        user.href = 'https://www.twitch.tv/' + name;
        user.target = "_blank";
        onlineStatus.className = "status";

        onlineStatus.innerHTML = status === null?"offline":"online";
        if(onlineStatus.innerHTML==="online"){
          statusDetails();

          $("this").parent().css("color","green");
          section.style.background = "green";
          section.classList.add("online") } else{
          onlineStatus.style.color = "red";
          section.classList.add("offline");

         }





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

  $("input[type^=but]").focus(function(e){
    e.preventDefault();
    console.log('this',$(this));
    $("input").css("outline","none");
    this.style.outlineWidth = '3px';
    this.style.outlineStyle = 'solid';
    this.style.outlineRadius = '2px;'
    this.style.outlineColor = 'blue';
  })








});
