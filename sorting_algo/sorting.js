
for(let i=0;i<100;i++)
{
    var board=document.createElement('div');
    board.className='altitude';
    board.id=`bar${i}`;
    document.getElementById('bar').appendChild(board);
}
var arr=new Array(100);
const arrayGenerator=()=>{

    for(let i=0;i<100;i++)
    {
        var x=Math.round(Math.random()*100);
        arr.splice(i,1,x);
    }
        
    for(let i=0;i<100;i++)
    {
        document.getElementById(`bar${i}`).style.height=`${arr[i]*5}px`;
        document.getElementById(`bar${i}`).style.width="15px";
        
    }
    const is_Sorted=(arr)=>{
    //     var block=document.querySelectorAll('.altitude');
    //    for(let i=0;i<block.length-1;i++)
    //    {
           
    //        if(block[i]>block[i+1])
    //        return false;
    //    }
   
       return true;
   }
   
   if(is_Sorted(arr))
   {
    //    document.querySelectorAll('altitude').style.backgroundColor='yellow';
    console.log('pkmkb');
   }
}

 arrayGenerator();

 function changeColor(){
   document.getElementsByClassName('.altitude').style.cssText='background-color:yellow';
 }

//  <!---- Bubble sort -->>




  
