import { AlgorithmBase } from '../algorithmBase';
import { Field } from '../field';

export class SelectionSort extends AlgorithmBase {
    async sort() {
        this.array = Field.array;
        for (let i = 0; i < this.array.length; i++) {
            let min = this.array[i];
            let minIndex = 0;
            for (let j = i + 1; j < this.array.length; j++) {
                await this.drawPillar(j * 15, Field.getMaxNumber - this.array[j], 'white');
                await this.drawPillar(j * 15, this.array[j], 'gray');
                const next = this.array[j];
                if (next < min) {
                    min = next;
                    minIndex = j;
                }
            }
            if (minIndex > 0) {
                await this.drawPillar(minIndex * 15, Field.getMaxNumber - this.array[i], 'white');
                await this.drawPillar(minIndex * 15, this.array[i], 'gray');
                await this.drawPillar(i * 15, Field.getMaxNumber - this.array[minIndex], 'white');
                await this.drawPillar(i * 15, this.array[minIndex], 'gray');
                this.array[i] = this.array[minIndex] + this.array[i];
                this.array[minIndex] = this.array[i] - this.array[minIndex];
                this.array[i] = this.array[i] - this.array[minIndex];
            }
        }
    }

}
