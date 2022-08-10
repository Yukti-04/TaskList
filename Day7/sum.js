var sum=0;
while(1){
    var num=prompt("Enter a number: ");
    if(num<0){
        alert("Negative number received as input so the sum is: "+sum);
        break;
    }
    sum=sum+Number(num);
}
