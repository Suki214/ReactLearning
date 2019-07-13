import {Person} from './person.js';


export function prompte(){

}
//inheritance
export default class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree=degree;
    }
    teach(){
        console.log("teach");
    }
}