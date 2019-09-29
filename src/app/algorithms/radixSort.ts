import { AlgorithmBase } from '../algorithmBase';
import { Field } from '../field';

export class RadixSort extends AlgorithmBase {
    async sort() {
        this.array = Field.array;
        const maxNumber = Math.max(...this.array).toString().length;
        let j = 0;
        while (j <= maxNumber) {
            const buckets = Array.from({ length: 10 }, () => []);
            const indexes = Array.from({ length: 10 }, () => []);
            for (let i = 0; i < this.array.length; i++) {
                const num = this.getPosition(this.array[i], j);
                buckets[num].push(this.array[i]);
                indexes[num].push(i);
                await this.drawPillar(i * 15, Field.getMaxNumber - this.array[i], 'white');
                await this.drawPillar(i * 15, this.array[i], 'gray');
            }
            this.array = [];
            for (let i = 0; i < buckets.length; i++) {
                for (let n = 0; n < buckets[i].length; n++) {
                    this.array.push(buckets[i][n]);
                    await this.drawPillar(indexes[i][n] * 15, Field.getMaxNumber - buckets[i][n], 'white');
                    await this.drawPillar(indexes[i][n] * 15, buckets[i][n], 'gray');
                }
            }
            j++;
        }
        return this.array;
    }

    getPosition(num: number, i: number) {
        let ten = 1;
        if (i !== 0) {
            for (let j = 0; j < i; j++) {
                ten = ten * 10;
            }
        }
        return Math.floor((num / ten) % 10);
    }

}
