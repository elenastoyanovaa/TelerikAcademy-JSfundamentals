
/* 
   Task 1 - JavaScript literals
   Task 3 -Typeof variables
   Task 4 -Typeof null
*/
var allVariables = {
    string: 'I am a string',
    int: 25,
    float: 1.2,
    arr: [1, 2, 3, 4, 5],
    object: { name: 'something' },
    func: function () { return; },
    nullV: null,
    undefinedV: undefined,
    boolean: true
};

var obj;

for (obj in allVariables) {
    console.log(allVariables[obj] + ' is ' + typeof (allVariables[obj]));
}

//Task 2 - Quoted text 
var quote = '\`\'How you doin\'?\', Joey said\''


//JS-Console
//For Tasks 1 ,3 and 4

jsConsole.writeLine('Problems 1,3 and 4 -JavaScript literals, Typeof variables,Typeof null:');

jsConsole.write('<br/>');

for (obj in allVariables) {

    console.log(allVariables[obj] + ' is ' + typeof (allVariables[obj]));


    jsConsole.writeLine('var ' + obj + ' = ' + allVariables[obj] + ';');

}
jsConsole.write('<br/>');

for (obj in allVariables) {
    jsConsole.write('Type of ' + allVariables[obj] + ' is: ');
    jsConsole.writeLine((typeof (allVariables[obj])));
}

jsConsole.write('<br/>');

//for Task 2 

jsConsole.writeLine('Problem 2-Quoted Text:');

jsConsole.write('<br/>');

jsConsole.writeLine('Quoted Text:');
jsConsole.writeLine(quote);
