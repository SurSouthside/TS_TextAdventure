"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const command_parser_1 = require("./command_parser");
class Game {
    constructor() {
        console.log("Game object created");
        command_parser_1.CommandParser.getInstance();
    }
    static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
}
exports.Game = Game;
