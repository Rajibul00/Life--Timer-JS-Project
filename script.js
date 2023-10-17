/*****variables */
let input =  document.querySelector('input');
let magicsection = document.querySelector('.magic');
let numbers = document.querySelectorAll('.numbers');
let resetbutton = document.getElementById('resetbutton');
let showdatacontainer = document.querySelector('.showdatacontainer')

//**********************Reset Function Start
function reset() {
    window.location.reload()
}
//**********************Reset Function Ends

//*********************today's date start*/
let today= new Date();
//*********************today's date End  */
/******Some Important Variables Start */
let currentYear = today.getFullYear();


let getdaypartner= '0';
let getmonthpartner = '0';
let getMonthmodified = today.getMonth()+1;

/******Some Important Variables End */
/****************User Date Of Birth */


/************getData  Function */
/*function getData(){
    let usersDateofBirth = new Date(input.value);
let diff = today-usersDateofBirth;


let seconds = Math.floor(diff/1000)
let minutes = Math.floor(seconds/60);
let hours =   Math.floor(  minutes/60);
let days =    Math.floor(  hours/24);
let months =  Math.floor(days%365/30);
let year =    Math.floor(   days/365);

console.log(seconds,minutes,hours,days,year);

numbers[0].innerText = year
numbers[1].innerText = months


numbers[2].innerText = days%365%30
numbers[3].innerText = hours%24
numbers[4].innerText = minutes%60
    numbers[5].innerText = seconds%60;


  
       setInterval(function()
       {
        numbers[5].innerText++;
        if(numbers[5].innerText>59){
            numbers[4].innerText++;
            numbers[5].innerText=0;
            if(numbers[4].innerText>59){
                numbers[3].innerText++;
                numbers[4].innerText=0;
    
            }
            if(numbers[3].innerText>23){
                numbers[2].innerText++;
                numbers[3].innerText=0;
    
            }
            if(numbers[2].innerText>365){
                numbers[1].innerText++;
                numbers[2].innerText=0;
    
            }
            if(numbers[1].innerText>11){
                numbers[0].innerText++;
                numbers[1].innerText=0;
    
            }

        }
       
      
    

    
    },1000)
document.querySelector('h1').innerText='How Much Life Journey Covered , Till Now';
//magicsection vanish
magicsection.style.display = 'none'
//Reset Button Show
resetbutton.style.display='block';
showdatacontainer.style.opacity=1

    }*/
function getData(){
    if(input.value==''){
       setTimeout(function(){
            document.querySelector('h1').style.color='red'
        },100);
        setTimeout(function(){
            document.querySelector('h1').style.color='black'
        },2000);

    }
    else{
        let usersDateofBirth = new Date(input.value);
        let diff = today-usersDateofBirth;
        
        
        let seconds = Math.floor(diff/1000)
        let minutes = Math.floor(seconds/60);
        let hours =   Math.floor(  minutes/60);
        let days =    Math.floor(  hours/24);
        let months =  Math.floor(days%365/30);
        let year =    Math.floor(   days/365);
        
        console.log(seconds,minutes,hours,days,year);
        
        numbers[0].innerText = year
        numbers[1].innerText = months
        
        
        numbers[2].innerText = days%365%30
        numbers[3].innerText = hours%24
        numbers[4].innerText = minutes%60
            numbers[5].innerText = seconds%60;
        
        
          
               setInterval(function()
               {
                numbers[5].innerText++;
                if(numbers[5].innerText>59){
                    numbers[4].innerText++;
                    numbers[5].innerText=0;
                    if(numbers[4].innerText>59){
                        numbers[3].innerText++;
                        numbers[4].innerText=0;
            
                    }
                    if(numbers[3].innerText>23){
                        numbers[2].innerText++;
                        numbers[3].innerText=0;
            
                    }
                    if(numbers[2].innerText>365){
                        numbers[1].innerText++;
                        numbers[2].innerText=0;
            
                    }
                    if(numbers[1].innerText>11){
                        numbers[0].innerText++;
                        numbers[1].innerText=0;
            
                    }
        
                }
               
              
            
        
            
            },1000)
        document.querySelector('h1').innerText='How Much Life Journey Covered , Till Now';
        //magicsection vanish
        magicsection.style.display = 'none'
        //Reset Button Show
        resetbutton.style.display='block';
        showdatacontainer.style.opacity=1
        
    }
}





/************getData  Function */

/**********maxmimum date you can select in from Date Box */
window.addEventListener('load',function(){

    if(today.getDate()>9){
        getdaypartner=''
    }else{
        getdaypartner='0'
    }
    if(getMonthmodified>9){
        getmonthpartner = ''
    }else{
        getmonthpartner='0'
    }

    input.setAttribute('max',`${today.getFullYear()}-${getmonthpartner}${getMonthmodified}-${getdaypartner}${today.getDate()}`)
   
   
   
})

/**********maxmimum date you can select in from Date Box */