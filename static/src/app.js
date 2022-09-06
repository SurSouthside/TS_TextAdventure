//let message: string = 'Hello, World!';
// create a new heading 1 element
//let heading = document.createElement('h1');
//heading.textContent = message;
// add the heading the document
//document.body.appendChild(heading);
//import {Game} from './game'
//var theGame;
var output = document.getElementById("command-output-area");
var welcomePrompt = 'Welcome to TS Text Adventure' + '<br/>' + 'New Game or Continue?' + '<br/>' + 'Enter your desired command at the >> prompt' + '<br/>';
var commandPrompt = '>>';
var commandResult = '>';
var commandInputs = document.getElementsByClassName("command-input-area");
function receive_next_input(et) {
    et.setAttribute('readonly', 'true');
    var theValue = et.value;
    //alert(theValue);
    /*
    switch (currentGameState) {
      case 'START' :
        alert ('START');
      default :
        break;
    }
    */
    var commandOutputRowDiv = document.createElement('div');
    commandOutputRowDiv.setAttribute('class', 'command-output-row');
    output.appendChild(commandOutputRowDiv);
    var commandDisplayDiv = document.createElement('div');
    commandDisplayDiv.innerHTML = commandResult;
    commandDisplayDiv.setAttribute('class', 'command-result');
    commandOutputRowDiv.appendChild(commandDisplayDiv);
    var commandResultDiv = document.createElement('div');
    commandResultDiv.innerHTML = theValue;
    commandResultDiv.setAttribute('class', 'command-output-area');
    commandOutputRowDiv.appendChild(commandResultDiv);
    var commandInputRowDiv = document.createElement('div');
    commandInputRowDiv.setAttribute('class', 'command-input-row');
    output.appendChild(commandInputRowDiv);
    var commandPromptDiv = document.createElement('div');
    commandPromptDiv.innerHTML = commandPrompt;
    commandPromptDiv.setAttribute('class', 'command-prompt');
    commandInputRowDiv.appendChild(commandPromptDiv);
    var commandInput = document.createElement('input');
    commandInput.setAttribute('class', 'command-input-area');
    commandInputRowDiv.appendChild(commandInput);
    commandInput.focus();
}
output.addEventListener('keydown', function (event) {
    if (event.target.classList.contains('command-input-area')) {
        if (event.key === "Enter") {
            receive_next_input(event.target);
            /*
            (event.target as HTMLInputElement).setAttribute('readonly', 'true')
            var theValue = (event.target as HTMLInputElement).value;
            //alert(theValue);Du
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
           */
        }
    }
});
window.onload = function () {
    //theGame = new Game();
    var welcomePromptDiv = document.createElement('div');
    welcomePromptDiv.innerHTML = welcomePrompt;
    output.appendChild(welcomePromptDiv);
    var commandInputRowDiv = document.createElement('div');
    commandInputRowDiv.setAttribute('class', 'command-input-row');
    output.appendChild(commandInputRowDiv);
    var commandPromptDiv = document.createElement('div');
    commandPromptDiv.innerHTML = commandPrompt;
    commandPromptDiv.setAttribute('class', 'command-prompt');
    commandInputRowDiv.appendChild(commandPromptDiv);
    var commandInput = document.createElement('input');
    commandInput.setAttribute('class', 'command-input-area');
    //commandInput.innerHTML = "_";
    /*
    commandInput.addEventListener("keydown", function(event){
      //alert(event.key);
      if(event.key==="Enter")
        {
          alert(commandInput.value);
          let commandOutputRowDiv = document.createElement('div');
          commandOutputRowDiv.setAttribute('class', 'command-output-row');
          output.appendChild(commandOutputRowDiv);
          let commandDisplayDiv = document.createElement('div');
          commandDisplayDiv.innerHTML = commandResult;
          commandDisplayDiv.setAttribute('class', 'command-result');
          commandOutputRowDiv.appendChild(commandDisplayDiv);
          let commandResultDiv = document.createElement('div');
          commandResultDiv.innerHTML = commandInput.value;
          commandResultDiv.setAttribute('class', 'command-output-area');
          commandOutputRowDiv.appendChild(commandResultDiv);
        }
    });
    */
    commandInputRowDiv.appendChild(commandInput);
    commandInput.focus();
    //console.log(commandInputs);
};
/*
function processInput(){
  alert("Input command received");
}
*/
//const commandButton =document.getElementById("submit-command")
/*
commandButton?.addEventListener('click', function handleClick(event){
  let enteredCommand = (document.getElementById("command-entry") as HTMLInputElement).value;
  output.style.color = "green"
  output.innerText += enteredCommand;
});
*/
