import {Game} from './game'
import {CommandParser} from './command_parser'

var theGame : Game;
var theCommandParser : CommandParser;

var command_response: String;

let output = (document.getElementById("command-output-area") as HTMLDivElement);

let welcomePrompt = 'Welcome to TS Text Adventure' + '<br/>' + 'New Game or Continue?' + '<br/>' + 'Enter your desired command at the >> prompt' + '<br/>';
let commandPrompt = '>>';
let commandResult = '>';

let commandInputs = document.getElementsByClassName("command-input-area");

function receive_next_input(et: EventTarget | null) {
  (et as HTMLInputElement).setAttribute('readonly', 'true')
  var theValue = (et as HTMLInputElement).value;
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

output.addEventListener('keydown', function(event) {
  if((event.target as HTMLInputElement).classList.contains('command-input-area')){
    if (event.key==="Enter") {
      command_response = theCommandParser.parse_command((event.target as HTMLInputElement).value as String);
      receive_next_input(event.target);
    }
  }
});

window.onload = function () {
  theGame = Game.getInstance();
  console.log("Game Started");
  theCommandParser = CommandParser.getInstance();
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
}
