import { AlgorithmBase } from '../algorithmBase';
import { Field } from '../field';

export class InsertionSort extends AlgorithmBase {
    async sort() {
        this.array = Field.array;
        for (let j = 1; j < this.array.length; j++) {
            const curr = this.array[j];
            const sortedArr = this.array.slice(0, j);
            for (let i = 0; i < sortedArr.length; i++) {
                const iIndex = sortedArr.length - (i + 1);
                const prev = this.array[iIndex];
                if (curr < prev) {
                    const temp = curr;
                    await this.drawPillar((j - i) * 15, Field.getMaxNumber - this.array[iIndex], 'white');
                    await this.drawPillar((j - i) * 15, this.array[iIndex], 'gray');
                    await this.drawPillar((j - (i + 1)) * 15, Field.getMaxNumber - curr, 'white');
                    await this.drawPillar((j - (i + 1)) * 15, curr, 'gray');
                    this.array[j - i] = this.array[iIndex];
                    this.array[iIndex] = temp;
                }
            }
        }
    }
}
