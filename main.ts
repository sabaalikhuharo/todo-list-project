import inquirer from "inquirer" ;
import { retry } from "rxjs";

let todos :string [] = [];
let loop = true ;

while (loop){
const answers: { TODO: string; Addmore: boolean; } = await inquirer.prompt([
    {
        type :"input",
        name: "TODO",
        message:"what do you want to do?"
    },
    {
        type :"confirm",
        name : "Addmore",
        message:" do you want to add more todo?",
        default:false
    },
])
const { TODO,Addmore} = answers;
console.log(answers)
loop = Addmore
if (TODO){
    todos.push (TODO)
}else {
    console.log("kindly enter valid input")
}
}
if (todos.length > 0 ){
    console.log("your TODO list :/n")
todos.forEach(todos => {
    
    console.log(todos)
});
}else {
    console.log("no todos found")} 