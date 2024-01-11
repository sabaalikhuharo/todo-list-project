import inquirer from "inquirer";
let todos;
let loop = true;
while (loop) {
    const answers, { TODO: string, Addmore: boolean, } = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "what do you want to do?"
        },
        {
            type: "confirm",
            name: "Addmore",
            message: " do you want to add more todo?",
            default: false
        }
    ]);
    const { TODO, Addmore } = answers;
    if ()
        ;
}
