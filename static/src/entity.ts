export class Entity {

    name: string;

    private constructor(theName: string) {
        this.name = theName;
        console.log("Entity created");
    }

}