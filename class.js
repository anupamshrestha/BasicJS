class userClass {
    constructor (firstName, lastName, profession, validEmail) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.validEmail = validEmail;
    }
    properCase() {
        let input = this.firstName.toLowerCase();
        let input1 = this.lastName.toLowerCase();
        let firstLetterName = input.slice(0,1);
        let firstLetterSurname = input1.slice(0,1);
        return "Name : " + input.replace(firstLetterName, firstLetterName.toUpperCase()) + " " + input1.replace(firstLetterSurname, firstLetterSurname.toUpperCase()) + ",";
    }
    
    roleFormatter () {
        if (/this.profession/i === "Software engineering ") {
            return " Role : IT ,";
        } else {
            return " Role : " + false + " ,";
        }
    }

    emailvalidator() {
        let checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (checkEmail.test(this.validEmail) == true) {
             return  " Email : " + this.validEmail + "," + " isValidemail: " +  true;
            
        } else {return " isValidemail: " + false;}
    } 
    cleanUserData() {
    
        return this.properCase() + this.roleFormatter() +  this.emailvalidator();

    }
}
let user = new userClass("anupam", 'shrestHA','Software engineering', 'anupam@gmail.com');
// console.log("Name>>", user.properCase());
// console.log("Email>>",user.emailvalidator() );
console.log("clean data>>", user.cleanUserData());
console.log();
