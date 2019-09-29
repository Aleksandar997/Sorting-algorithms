import { Field } from './field';

export abstract class AlgorithmBase {
    array: Array<number>;
    async drawPillar(x, length, color) {
        this.fillRect(x, length, color);
        await this.sleep(0.7);
    }

    fillRect(x, length, color) {
        let y = Field.getMaxNumber;
        for (let i = 0; i <= length; i++) {
            Field.context.fillStyle = color;
            Field.context.fillRect(x, y, 10, 10);
            Field.context.stroke();
            y -= 10;
        }
    }
    async sleep(ms) {
        return new Promise(resolve => window.setTimeout(resolve, ms));
    }
    abstract async sort();
}

