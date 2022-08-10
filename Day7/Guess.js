// Write a logic to perform the sum of n numbers entered by the user, stop if user enters negative number.
let guesses=3;
var num=Math.floor((Math.random()*10)+1);
while(guesses>0)
{
    var number=prompt("Enter a number between 0 and 10: ");
    if(number===num)
    {
        console.log("You got it right");
    }
    else
    {
        console.log("You didn't get it right");
        guesses--;
        alert("Number of guesses: "+guesses);
    }
}
if(guesses==0)
{
    alert("You lost...The correct number was: "+num);
}
