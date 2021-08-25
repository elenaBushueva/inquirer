const inquirer = require('inquirer');
inquirer.prompt([
    {
        name: 'category',
        message: 'What would you like to do?',
        type: 'list',
        choices: ["sport", "studies"]
    },
])
.then(function(answer) {
    if(answer.category === 'sport'){
        inquirer.prompt([
            {
                name: 'sport',
                message: 'What is your favorite sport?',
                type: 'list',
                choices: ["ballet", "hiking"]
            }
        ])
            .then(function (answer){
                inquirer.prompt([
                    {
                        name: 'time',
                        message: 'How long?',
                        type: 'list',
                        choices: ['30 min', '1 hour', '2 hours', '3 hours', '5 hours']
                    }
                ])
            })
    } else if(answer.category === "studies"){
        inquirer.prompt([
            {
                name: 'studies',
                message: 'what would you like to study?',
                type: 'list',
                choices: ["programming", "investing"]
            }
        ])
            .then(function (answer){
                inquirer.prompt([
                    {
                        name: 'time',
                        message: 'How long?',
                        type: 'list',
                        choices: ['30 min', '1 hour', '2 hours', '3 hours', '5 hours']
                    }
                ])
            })
    }
});



