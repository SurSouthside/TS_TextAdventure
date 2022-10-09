(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game");
const command_parser_1 = require("./command_parser");
var theGame;
var theCommandParser;
var command_response;
let output = document.getElementById("command-output-area");
let welcomePrompt = 'Welcome to TS Text Adventure' + '<br/>' + 'New Game or Continue?' + '<br/>' + 'Enter your desired command at the >> prompt' + '<br/>';
let commandPrompt = '>>';
let commandResult = '>';
let commandInputs = document.getElementsByClassName("command-input-area");
function receive_next_input(et) {
    et.setAttribute('readonly', 'true');
    var theValue = et.value;
    let commandOutputRowDiv = document.createElement('div');
    commandOutputRowDiv.setAttribute('class', 'command-output-row');
    output.appendChild(commandOutputRowDiv);
    let commandDisplayDiv = document.createElement('div');
    commandDisplayDiv.innerHTML = commandResult;
    commandDisplayDiv.setAttribute('class', 'command-result');
    commandOutputRowDiv.appendChild(commandDisplayDiv);
    let commandResultDiv = document.createElement('div');
    commandResultDiv.innerHTML = theValue;
    commandResultDiv.setAttribute('class', 'command-output-area');
    commandOutputRowDiv.appendChild(commandResultDiv);
    let commandInputRowDiv = document.createElement('div');
    commandInputRowDiv.setAttribute('class', 'command-input-row');
    output.appendChild(commandInputRowDiv);
    let commandPromptDiv = document.createElement('div');
    commandPromptDiv.innerHTML = commandPrompt;
    commandPromptDiv.setAttribute('class', 'command-prompt');
    commandInputRowDiv.appendChild(commandPromptDiv);
    let commandInput = document.createElement('input');
    commandInput.setAttribute('class', 'command-input-area');
    commandInputRowDiv.appendChild(commandInput);
    commandInput.focus();
}
output.addEventListener('keydown', function (event) {
    if (event.target.classList.contains('command-input-area')) {
        if (event.key === "Enter") {
            command_response = theCommandParser.parse_command(event.target.value);
            receive_next_input(event.target);
        }
    }
});
window.onload = function () {
    theGame = game_1.Game.getInstance();
    console.log("Game Started");
    theCommandParser = command_parser_1.CommandParser.getInstance();
    console.log("Command parser started");
    let welcomePromptDiv = document.createElement('div');
    welcomePromptDiv.innerHTML = welcomePrompt;
    output.appendChild(welcomePromptDiv);
    let commandInputRowDiv = document.createElement('div');
    commandInputRowDiv.setAttribute('class', 'command-input-row');
    output.appendChild(commandInputRowDiv);
    let commandPromptDiv = document.createElement('div');
    commandPromptDiv.innerHTML = commandPrompt;
    commandPromptDiv.setAttribute('class', 'command-prompt');
    commandInputRowDiv.appendChild(commandPromptDiv);
    let commandInput = document.createElement('input');
    commandInput.setAttribute('class', 'command-input-area');
    commandInputRowDiv.appendChild(commandInput);
    commandInput.focus();
};

},{"./command_parser":2,"./game":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandParser = void 0;
class CommandParser {
    constructor() {
        console.log("Command parser object created");
    }
    static getInstance() {
        if (!CommandParser.instance) {
            CommandParser.instance = new CommandParser();
        }
        return CommandParser.instance;
    }
    parse_command(command) {
        var returned_command;
        console.log("You entered: " + command);
        //TODO: Replace multiple whitespace characters with one?
        var split_command = command.split(" ");
        console.log("Separate commands entered: ");
        split_command.forEach(function (value, index) {
            console.log(index + ":" + value);
        });
        var first_command = split_command[0];
        console.log("First command entered: " + first_command);
        switch (first_command) {
            case "attack": {
                returned_command = "You attack";
                console.log(returned_command);
                break;
            }
            case "cast": {
                returned_command = "You cast a spell";
                console.log(returned_command);
                break;
            }
            case "use": {
                returned_command = "You use an item";
                console.log(returned_command);
                break;
            }
            default: {
                returned_command = "Command not found";
                console.log(returned_command);
                break;
            }
        }
        return returned_command;
    }
}
exports.CommandParser = CommandParser;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor() {
        console.log("Game object created");
    }
    static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
}
exports.Game = Game;

},{}]},{},[1]);
