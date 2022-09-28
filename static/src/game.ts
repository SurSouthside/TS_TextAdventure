export class Game {

    private static instance: Game;

    private constructor() {
        console.log("Game object created");
    }

    public static getInstance() : Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }

        return Game.instance;
    }
  
}
