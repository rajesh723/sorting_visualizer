
// Promise to swap two blocks
function swap(el1,el2)
{

    
        const style1 = window.getComputedStyle(el1);
        const style2 = window.getComputedStyle(el2);
        const transform1 = style1.getPropertyValue("height");
        const transform2 = style2.getPropertyValue("height");
        el1.style.height = transform2;
        el2.style.height = transform1;
    

}

async function bubbleSort(delay=10){
    var bars=document.querySelectorAll(".altitude");
    
    for(let i=0;i<bars.length-1;i++)
    {
        for(let j=0;j<bars.length-i-1;j++){

            bars[j].style.backgroundColor="red";
            bars[j+1].style.backgroundColor="red";

            await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, delay)
           );

        //    console.log("run");
        var value1 = document.getElementById(`bar${j}`).clientHeight;
        var value2 = document.getElementById(`bar${j+1}`).clientHeight;
              
         if(value1 > value2){
            await swap(bars[j],bars[j+1]);
            bars=document.querySelectorAll(".altitude");
         }
         bars[j].style.backgroundColor="yellow";
         bars[j+1].style.backgroundColor="yellow";
        }
        bars[bars.length-i-1].style.backgroundColor="green";
    }
    bars[0].style.backgroundColor="green";
}
// function disable()
// {
//   // To disable the button "Generate New Array"
//   document.getElementById("newArray").disabled = true;
//   document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
  
//   // To disable the button "Bubble Sort"
//   document.getElementById("Button2").disabled = true;
//   document.getElementById("Button2").style.backgroundColor = "#d8b6ff";  
// }
     



// disable();