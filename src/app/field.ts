export class Field {
    static array: Array<number> = new Array<number>();
    static arrLength = 89;
    static maxNumber = 50;
    static context: CanvasRenderingContext2D;
    static get getMaxNumber() {
        return this.maxNumber * 11;
    }

    static async generate() {
        this.array = new Array<number>();
        for (let i = 0; i < this.arrLength; i++) {
            this.array.push(Math.floor((Math.random() * this.maxNumber) + 1));
        }
    }
}


