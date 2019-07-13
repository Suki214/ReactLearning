//var -> in function
//let -> block
//const -> block

function sayHello() {
    for(let i=0;i<5;i++){
      console.log(i);
    }
    //console.log(i) var is ok, with let, raise error
  }
  
  sayHello();

  const y=1;
  //y=2; raise error as y is read only

//this
  const person={
      name: 'SUKI',
      walk(){},
      talk(){}
  }

  person.talk();

  person['name']="Susan";

  const tartgetMember ='name';
  person[tartgetMember.value]='Susan';


  const personM={
      name:"Mosh",
      walk(){
          console.log(this);
      }
  };

  personM.walk();

  const walk=personM.walk.bind(personM);
  //walk(); undefined
  walk(); //with bind, it will return the right result


// const square = function(number){
//     return number*number;
// }
//arrow function
const square=number=>number*number;
console.log(square(3));

const jobs=[
    {id:1, isActive: true},
    {id:2, isActive: false},
    {id:3, isActive: true},
];

const activeJobs = jobs.filter(job=>job.isActive);
console.log(activeJobs);

const personN={
    walk(){
        var that = this;// need to bind to this
        setTimeout(function(){
            console.log("this", that);
        },1000);        
    }
}
personN.walk();// without that defined, it get to window object

//change to arrow function, arrow function will
//not re-bind "this" the object
//this and arrow function
const personO={
    walk(){
        setTimeout(()=>{
            console.log("this", this);
        },1000);
    }
}
personO.walk();


//map
const colors=["red","green","blue"];
const items=colors.map(color=>`<li>${color}</li>`);

console.log(items);


//object destructuring
const address={
    street:'',
    city:'',
    country:''
};

// const street = address.street;
// const city = address.city;
// const country = address.country;
const{street:st,city}=address;


//Spread Operator
const first=[1,2,3];
const second =[4,5,6];

const combined = first.concat(second);
const combinedS = [...first,'a', ...second];
console.log(combined); //[1,2,3,4,5,6]
console.log(combinedS); //[1,2,3,'a',4,5,6]

const clone=[...first];
console.log(clone); //[1,2,3]

const name = {name:"Su"}
const job ={ job:"engineer"}

const combinedO = {...name,...job, address:"China"}
console.log(combinedO);

const cloneN={...name};
console.log(cloneN);


//Classes
class Person {
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log("walk");
    }
};

const personP= new Person("SUU");
console.log(personP.name);


//inheritance
class Teacher extends Person{
    teach(){
        console.log("teach");
    }
}

const teacher = new Teacher();
teacher.teach();
teacher.walk();








