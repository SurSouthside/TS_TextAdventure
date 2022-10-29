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

    public parse_command(command: String): string {
        var returned_command: string;
        console.log("You entered: " + command);
        //TODO: Use regex to capture all whitespace between words
        var split_command = command.split(/[\s]+/);
        console.log("Separate commands entered: ");
        split_command.forEach (function (value, index) {
            console.log(index + ":" + value);
        });
        var first_command = split_command[0]
        console.log("First command entered: " + first_command);
        switch(first_command) {
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
        return "You use " + use_target;
    }    

}