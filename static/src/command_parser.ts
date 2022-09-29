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

    public parse_command(command: String) {
        return '';
    }

}