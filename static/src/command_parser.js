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
        console.log("You entered: " + command);
        //TODO: Replace multiple whitespace characters with one?
        var split_command = command.split(" ");
        console.log("Separate commands entered: ");
        split_command.forEach(function (value, index) {
            console.log(index + ":" + value);
        });
    }
}
exports.CommandParser = CommandParser;
