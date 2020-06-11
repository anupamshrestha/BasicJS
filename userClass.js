class UserClass {
    constructor (name, profession, validEmail) {
        this.name = name;
        this.profession = profession;
        this.validEmail = validEmail;
    }
    properCase() {
        let input = this.name.toLowerCase();
        let arr = input.split(" ");
        console.log("split>>", arr);
        let final = "";
        for(let d of arr) {
           let firstLetter =  d.slice(0,1);
           final += d.replace(firstLetter, firstLetter.toUpperCase()) + " ";
    
        }
        return final
    }
    
    roleFormatter () { 
        let abc = new RegExp(this.profession,"i");
        if ("software engineering".match(abc)) { 
            return " Role : IT ,";
        } else {
            return " Role : " + false + " ,";
        }
    }

    emailvalidator() {
        let checkEmail = /\S+@\S+\.\S+/;
        console.log(checkEmail.test(this.validEmail));
        if (checkEmail.test(this.validEmail)) {
             return  " Email : " + this.validEmail + "," + " isValidemail: " +  true;
            
        } else {return " isValidemail: " + false;}
    } 
    cleanUserData() {
    
        return this.properCase() + this.roleFormatter() +  this.emailvalidator();

    }
}

module.exports = UserClass;


