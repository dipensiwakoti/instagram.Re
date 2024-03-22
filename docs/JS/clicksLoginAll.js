var Logo = document.querySelector(".insta1");
var open = document.querySelector("#new");
var msg = document.querySelector(".fa-facebook-messenger");
flag=0;
flag1=0;

var message = document.querySelector(".fa-facebook-messenger");
var hover = document.querySelector(".hoverMsg");

var love= document.querySelector(".PhotoPost");
var Slove= document.querySelector(".loveICON");

// love.addEventListener("click",function(){
//     Slove.style.display= "block";
// } );

love.addEventListener("dblclick",function(){

  if(flag==0){
   Slove.style.display = "block";
    flag=1;
  }

  setTimeout(function(){
    
    if(flag==1) { 
       
       Slove.style.display = "none";
       flag=0;

    }
  },1500 ) 
} );
msg.addEventListener("click",function(){
  if(flag1==0){

        console.log("You have done it bruda!");
      flag1=1;
    }
    else{

        console.log("leaved");
       flag1=0; 
       open.style.display = "none";

    }
} );

message.addEventListener("mouseenter",function(){

  hover.style.display= "block"
} )
message.addEventListener("mouseleave",function(){

  hover.style.display= "none"
} )


