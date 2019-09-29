import { AlgorithmBase } from '../algorithmBase';
import { Field } from '../field';

export class CockatielShakerSort extends AlgorithmBase {
    async sort(length: number = null, startingIndex: number = 0) {
        this.array = Field.array;
        length = length ? length : this.array.length;
        let swapped = false;
        let i = startingIndex;
        while (true) {
            if (startingIndex > 0 && i === 0) {
                break;
            } else if (startingIndex === 0 && i >= length) {
                break;
            }
            if (this.array[i + 1] && this.array[i] > this.array[i + 1]) {
                this.array[i + 1] = this.array[i] + this.array[i + 1];
                this.array[i] = this.array[i + 1] - this.array[i];
                this.array[i + 1] = this.array[i + 1] - this.array[i];
                swapped = true;
            }
            await this.drawPillar(i * 15, Field.getMaxNumber - this.array[i], 'white');
            await this.drawPillar(i * 15, this.array[i], 'gray');
            await this.drawPillar((i + 1) * 15, Field.getMaxNumber - this.array[i + 1], 'white');
            await this.drawPillar((i + 1) * 15, this.array[i + 1], 'gray');
            i = startingIndex > 0 ? (i - 1) : (i + 1);
        }
        if (swapped) {
            await this.sort(length > 0 ? 0 : length, startingIndex > 0 ? 0 : length);
        }
    }

}
