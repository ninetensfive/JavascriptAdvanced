class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = this.checkClientId(clientId);
        this.email = this.checkEmail(email);
        this.firstName =  this.checkName(firstName, 'First name');
        this.lastName =  this.checkName(lastName, 'Last name');
    }

    checkClientId(clientId){
        let regex = /^\d{6}$/;
        if(!regex.test(clientId)){
            throw new TypeError('Client ID must be a 6-digit number');
        }

        return clientId;
    }

    checkEmail(email){
        let regex = /^[a-z0-9]+@[a-z.]+$/i;
        if(!regex.test(email)){
            throw new TypeError('Invalid e-mail');
        }

        return email;
    }

    checkName(name, nameType){
        if(name.length < 3 || name.length > 20){
            throw new TypeError(nameType + ' must be between 3 and 20 characters long');
        }

        let regex = /^[a-z]+$/i;
        if(!regex.test(name)){
            throw new TypeError(nameType + ' must contain only Latin characters');
        }

        return name;
    }
}

//let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
// /let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');

let acc = new CheckingAccount('4234145', 'petkan@another.co.uk', 'Petkan', 'Draganov');