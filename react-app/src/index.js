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



