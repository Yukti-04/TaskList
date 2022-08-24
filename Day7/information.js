// Write code to create an Object containing information (Name, Age, Address(City, State, Pincode), Hobbies) and also having function to display all information. 
var info={
    name: "Yukti Choudhary",
    Age: 21,
    Address: {
        city: "Jaipur",
        State: "Rajasthan",
        pincode: 302004,
    },
    display: function run(){
        console.log(this.name);
    },
    Hobbies: ["Photography", "Driving"]
};
info.display().call();
// console.log(info);
function display(person){
    console.log("Name of the user is: " + person.name);
    console.log("Age of "+person.name+" is: " + person.Age);
    console.log(person.name+" lives in " + person.Address.city + " , " + person.Address.State + " , " + person.Address.pincode);
    console.log("Hobbies of " + person.name + " are: " + person.Hobbies[0]+" and " + person.Hobbies[1]);
}
set