let my = document;
let input = my.getElementsByClassName("result");
let input1 = my.getElementById("first");
let input2 = my.getElementById("second");

var firstnumber;
var secondnumber;

function takeinput()
{
   let sign = this.id;
   console.log("sh", sign);

   switch(sign)
   {
       case "plus":
      var val1 = input1.value;
      var val2 = input2.value;
      val1 = parseInt(val1);
      val2 = parseInt(val2);
      val1 +=val2;
      var answer = "Your result is " + val1;
      input[0].value = answer;
      console.log("sj");
      break;

      case "minus":

        var val1 = input1.value;
        var val2 = input2.value;
        val1 = parseInt(val1);
        val2 = parseInt(val2);
        val1 -=val2;
        var answer = "Your result is " + val1;
        input[0].value = answer;
        console.log("sj");
        break;
      
     case "multiply":
       var val1 = input1.value;
       var val2 = input2.value;
      val1 = parseInt(val1);
      val2 = parseInt(val2);
      val1 *=val2;
       var answer = "Your result is " + val1;
      input[0].value = answer;
      console.log("sj");
      break;
      
      case "divide":
       var val1 = input1.value;
       var val2 = input2.value;
      val1 = parseInt(val1);
      val2 = parseInt(val2);
      val1 /=val2;
       var answer = "Your result is " + val1;
      input[0].value = answer;
      console.log("sj");
      break;

      default:
         var answer = "Please Enter the correct operator"
        input[0].value = answer;
        break;

   }

}

let btnval = my.getElementsByClassName("btn");
for(let i=0;i<btnval.length;i++)
{
    btnval[i].addEventListener("click" , takeinput)
}