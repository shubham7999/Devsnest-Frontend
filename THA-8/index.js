const val = document.getElementById("main");
var center = val;
const  boxes = document.getElementsByClassName("center")
center.addEventListener("click",(a)=>{
    let cls = a.target.className;
    if(cls === "center white")
    {
        a.target.className = "center red";
       
    }
    
    if(cls === "center red")
    {
        a.target.className = "center white";
        
    }
    if(cls === "center")
    {
        a.target.className = "center white";
        
    }
    
});


// for(let i=0;i<boxes.length;i++)
// {
//     boxes[i].addEventListener("click", ()=>{
//      let check =boxes[i].classList.contains('red');
//      if(check==true)
//      {
//         boxes[i].classList.add('blue');
//         boxes[i].classList.remove('red');
//      }
//      else{
//         boxes[i].classList.add('red');
//         boxes[i].classList.remove('blue');
//      }
//      console.log("sh");
//     });
// }