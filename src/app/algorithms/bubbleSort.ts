import { AlgorithmBase } from '../algorithmBase';
import { Field } from '../field';

export class BubbleSort extends AlgorithmBase {
    async sort() {
        this.array = Field.array;
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < (this.array.length - i); j++) {
                if (this.array[j] > this.array[j + 1]) {
                    await this.drawPillar((j - 1) * 15, Field.getMaxNumber - this.array[j - 1], 'white');
                    await this.drawPillar((j - 1) * 15, this.array[j - 1], 'gray');
                    this.array[j + 1] = this.array[j + 1] + this.array[j];
                    this.array[j] = this.array[j + 1] - this.array[j];
                    this.array[j + 1] = this.array[j + 1] - this.array[j];
                } else {
                    await this.drawPillar(j * 15, Field.getMaxNumber - this.array[j], 'white');
                    await this.drawPillar(j * 15, this.array[j], 'gray');
                }
            }
        }
        return this.array;
    }
}
