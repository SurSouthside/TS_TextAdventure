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
                var attack_result = this.parse_attack_command(split_command.slice(1));
                returned_command = attack_result;
                break;
            }
            case "cast": {
                returned_command = "You cast a spell";
                console.log(returned_command);
                var cast_result = this.parse_cast_command(split_command.slice(1));
                returned_command = cast_result;
                break;
            }
            case "use": {
                returned_command = "You use an item";
                console.log(returned_command);
                var use_result = this.parse_use_command(split_command.slice(1));
                returned_command = use_result;
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
    parse_attack_command(attack_pieces) {
        var attack_target = attack_pieces[0];
        console.log("Attack target: " + attack_target);
        return "You attack the " + attack_target;
    }
    parse_cast_command(cast_pieces) {
        var cast_spell = cast_pieces[0];
        var cast_target = cast_pieces[1];
        console.log("Cast spell: " + cast_spell);
        console.log("Cast target: " + cast_target);
        return "You cast " + cast_spell + " at the " + cast_target;
    }
    parse_use_command(use_pieces) {
        var use_target = use_pieces[0];
        console.log("Use target: " + use_target);
        return "You use " + use_target;
    }
}
exports.CommandParser = CommandParser;
