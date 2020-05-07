class Person{
    constructor(){
        this.streetAddress=this.postcode = this.city="";
        
        //job related
        this.company=this.position ='';

        this.salary=0;
    }
    toString(){
        return `Person lives at ${this.streetAddress},${this.postcode} in ${this.city}\n`+`and works at ${this.company} as a ${this.position} making ${this.salary}.`
    }
}

class PersonBuilder{
    constructor(person=new Person()){
        this.person=person;
    }
    get lives() {
        return new PersonAddressBuilder(this.person)
    }
    get works(){
        return new PersonJobBuilder(this.person)
    }
    build() {
        return this.person;
    }
}

class PersonAddressBuilder extends PersonBuilder {
    constructor(person){
        super(person)
    }

    at(address) {
        this.person.streetAddress=address
        return this
    }
    withPostCode(zip){
        this.person.postcode=zip
        return this
    }
    in(city){
        this.person.city=city;
        return this
    }
}

class PersonJobBuilder extends PersonBuilder {
    constructor(person){
       super(person)
    }
    worksAt(company){
        this.person.company=company;
        return this
    }
    asA(role){
        this.person.position=role;
        return this
    }
    making(salary){
        this.person.salary=salary
        return this
    }

}

let pb = new PersonBuilder();

let person =pb
    .lives.at('123').in('Madrid').withPostCode('28019').works.asA("engineer").making('11111$').worksAt('PRENT')
    .build()


console.log(person.toString())