import { Game } from "./game";

export class CommandParser {

    private static instance: CommandParser;

    private constructor() {
        console.log("Command parser object created");
    }

    public static getInstance() : CommandParser {
        if (!CommandParser.instance) {
            CommandParser.instance = new CommandParser();
        }

        return CommandParser.instance;
    }

    public parse_command(command: string): string {
        var returned_command: string;
        console.log("You entered: " + command);
        var gameState = Game.getInstance().gameState;
        console.log("Game state for parser is " + gameState);
        switch(gameState){
            case 'Started': {
                console.log("Parsing Started commands");
                returned_command = this.parse_started_command(command);
                break;
            }
            default: {
                console.log("Parsing Running commands");
                returned_command = this.parse_running_command(command);
                break;
            }
        }
        //TODO: Use regex to capture all whitespace between words

        return returned_command;
    }

    public parse_started_command(startedCommand: string): string{
        if(startedCommand == 'New')
        {
            Game.getInstance().startNewGame();
        }
        return '';
    }

    public parse_running_command(runningCommand: string): string{
        var returned_command: string;
        var split_command = runningCommand.split(/[\s]+/);
        console.log("Separate commands entered: ");
        split_command.forEach (function (value, index) {
            console.log(index + ":" + value);
        });
        var first_command = split_command[0]
        console.log("First command entered: " + first_command);
        switch(first_command) {

            //General commands
            case "help": {
                returned_command = "You get help";
                break;
            }
            case "inventory": {
                returned_command = "You search your inventory";
                break;
            }
            case "status": {
                returned_command = "You check your status";
                break;
            }            

            //Battle commands
            case "attack": {
                returned_command = "You attack";
                var attack_result = this.parse_attack_command(split_command.slice(1));
                returned_command = attack_result;
                break;
            }
            case "cast": {
                returned_command = "You cast a spell";
                var cast_result = this.parse_cast_command(split_command.slice(1));
                returned_command = cast_result;
                break;
            }
            case "use": {
                returned_command = "You use an item";
                var use_result = this.parse_use_command(split_command.slice(1));
                returned_command = use_result;
                break;
            }
            
            //Explore commands
            case "shop": {
                returned_command = "You enter a shop";
                break;
            }
            case "search": {
                returned_command = "You search";
                break;
            }  
            
            //Shop commands
            case "buy": {
                returned_command = "You buy";
                var buy_result = this.parse_buy_command(split_command.slice(1));
                returned_command = buy_result;
                break;
            }
            case "sell": {
                returned_command = "You sell";
                var sell_result = this.parse_sell_command(split_command.slice(1));
                returned_command = sell_result;
                break;
            }   
            case "view": {
                returned_command = "You view the shop inventory";
                break;
            }     
            case "examine": {
                returned_command = "You examine an item";
                var examine_result = this.parse_examine_command(split_command.slice(1));
                returned_command = examine_result;
                break;
            }                                     

            default: {
                returned_command = "Command not found";
                break;
            }
        }   
        
        console.log(returned_command);
        return returned_command;        

    }

    public parse_attack_command(attack_pieces: string[]): string {
        var attack_target = attack_pieces[0];
        console.log("Attack target: " + attack_target);
        return "You attack the " + attack_target;
    }

    public parse_cast_command(cast_pieces: string[]): string {
        var cast_spell = cast_pieces[0];
        var cast_target = cast_pieces[1];
        console.log("Cast spell: " + cast_spell);
        console.log("Cast target: " + cast_target);
        return "You cast " + cast_spell + " at the " + cast_target;
    }    

    public parse_use_command(use_pieces: string[]): string {
        var use_target = use_pieces[0];
        console.log("Use target: " + use_target);
        return "You use the " + use_target;
    }    

    public parse_buy_command(buy_pieces: string[]): string {
        var buy_target = buy_pieces[0];
        console.log("Buy target: " + buy_target);
        return "You buy the " + buy_target;
    }      

    public parse_sell_command(sell_pieces: string[]): string {
        var sell_target = sell_pieces[0];
        console.log("Sell target: " + sell_target);
        return "You sell the " + sell_target;
    }     
    
    public parse_examine_command(examine_pieces: string[]): string {
        var examine_target = examine_pieces[0];
        console.log("Examine target: " + examine_target);
        return "You examine the " + examine_target;
    }          

}