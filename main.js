var trials = prompt ("Please enter number of trials");
function myGame(trials) {
   // var trials = prompt ("Please enter number of trials");
   var i = Math.floor(Math.random() * 100) + 1;

   var j=i%2;
   if (j==0)
       alert (" Number is Even");     else
       alert (" Number is odd"); // if result is not zero then j= odd

   for(var count=1;count<=trials; count++)
   {
       var num = prompt ("Please enter a number:");
       if (num==i){
           alert("You WIN!", +"Clapp for yourself" );
           break;
       }
       if (num<i){
           alert("Number is lower, make another guess");
       }
       if (num>i){
                   alert("Number is higher,make another guess");
               }
       if (count==trials){    // if condition iterates 10 times with invalid gueses
               alert("You LOSE!");}
   }
}

myGame(trials); (edited) 