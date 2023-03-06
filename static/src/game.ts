let output = (document.getElementById("command-output-area") as HTMLDivElement);
let commandPrompt = '>>';
let commandResult = '>';

export class Game {

    private static instance: Game;
    _gameState: string; //TODO: Make Enum/list of valid values

    private constructor() {
        this._gameState = 'Started';
        console.log("Game object created");
    }

    public static getInstance() : Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }

        return Game.instance;
    }

    public get gameState () {
        return this._gameState;
    }

    public set gameState (theGameState: string) {
        this._gameState = theGameState;
    }

    startNewGame(): void{
        console.log("New Game Started");
        Game.getInstance().gameState = "New";
        let namePromptDiv = document.createElement('div');
        namePromptDiv.innerHTML = 'Enter your character name';
        output.appendChild(namePromptDiv);
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


}
  
