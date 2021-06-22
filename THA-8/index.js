
const  boxes = document.getElementsByClassName("center")

for(let i=0;i<boxes.length;i++)
{
    boxes[i].addEventListener("click", ()=>{
     let check =boxes[i].classList.contains('red');
     console.log(check);
     if(check==true)
     {
        boxes[i].classList.add('white');
        boxes[i].classList.remove('red');
     }
     else{
        boxes[i].classList.add('red');
        boxes[i].classList.remove('white');
     }
     console.log("sh");
    });
}