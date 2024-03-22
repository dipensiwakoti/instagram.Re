var array = [ 
    {dp: "https://images.unsplash.com/photo-1562447574-797880741dd1?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1562447574-797880741dd1?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    {dp: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D" },

    {dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D" },
    
    {dp: "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww" },

    {dp: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww" },

    {dp: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww",story:"https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww" },

    {dp: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsJTIwd29tZW58ZW58MHx8MHx8fDA%3D" }]


  var storiyan = document.querySelector(".container");
 
  var full= document.querySelector(".fullscreen");
  var card2= document.querySelector("#card2");
    recheck= ""
    array.forEach(function(elem,index){{


        recheck += `<div class="people" > 
        <img id=${index} src=" ${elem.dp} " alt="">
      </div>`
        
    }});
    storiyan.innerHTML= recheck;
    var people = document.querySelectorAll(".people");  //peoples ko  sabai classes lai liyera aayo..tara people print garereew vane array print hunxa 
    console.log(people)
   people.forEach(function(element){
    console.log(element)
    console.log(element.childNodes)
     console.log(element.childNodes[1].id);/// the childNode concept is literally very awesome ..firstly elementss chai even idex ma k xa vanna vayoo....ani childNode vanya chai tyo elements vitra chai k xa ta mitra vannna ho...this is all raw muni vanya chai kunai pani elements of class people lai click vayo vane it will run the mentioned fucntion jasle chai hmroo fullscreen lai background color rawww tesko display lai block athawa none bata hatauxaaa....


element.addEventListener("click", function(dets){    // (( the dets inside funtion gives the mouse movement or activity , as the event is click here , the mouse passes the acitivity only when the mouse gives the click, a click...also there can be "dblclick", "mousemove, moveenter, mouseleave" events which can be used in many ways like when i hover over a certain thing i may want to display something and this is done by this "mouseenter"and  "mouseleave" event !!!! can find it on second project-- multiple image hover ))
  
  
  full.style.display= "block";
  
  card2.style.filter = "blur(3px)";
  storiyan.style.filter= "blur(1px)";

  full.style.backgroundImage=`url(${array[element.childNodes[1].id].story})`; // this has given the clicked photo to the fullscreen and this is what consoles the background and displys the photo..  generally [dets.target.id]  gives a certain specific value that is like...target is a among one of information that dets passes when the mouse is clicked inside the storiyan as it the declaration of eventListener...and the Target has many information of image of where the mouse clicks..as from before line 25 the image each has different id,, that has been given from index of array,  so basically the target carries Chinari of image and all things, so id is one of those so all this  return value of the index and  finally the obtained value is used in array[value.story], this returns the story stored in specific index of array as value here means teh index of the array  ))

  
   setTimeout(function() {
    full.style.display= "none";
    card2.style.filter = "blur(0px)";
    storiyan.style.filter= "blur(0px)";

  },1500);   // the last 1700 is the timeout for the function , after this much time you should be executed!




   } )
} )

   card2.addEventListener("click",function(){
     full.style.display= "none";
     card2.style.filter = "blur(0px)";
     storiyan.style.filter= "blur(0px)";


   }) 

  
  



  

    
    
