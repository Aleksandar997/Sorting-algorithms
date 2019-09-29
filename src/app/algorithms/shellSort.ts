import { AlgorithmBase } from '../algorithmBase';
import { Field } from '../field';

export class ShellSort extends AlgorithmBase {
    async sort(_k = null) {
        this.array = Field.array;
        const k = Math.round(_k ? _k / 2 : this.array.length / 2);
        for (let i = 0; i < this.array.length; i++) {
            for (let j = i - k; this.array[j] && this.array[j] >= this.array[j + k]; j -= k) {
                this.array[j + k] = this.array[j] + this.array[j + k];
                this.array[j] = this.array[j + k] - this.array[j];
                this.array[j + k] = this.array[j + k] - this.array[j];
                await this.drawPillar(j * 15, Field.getMaxNumber - this.array[j], 'white');
                await this.drawPillar(j * 15, this.array[j], 'red');
                await this.drawPillar(j * 15, this.array[j], 'gray');

                await this.drawPillar((j + k) * 15, Field.getMaxNumber - this.array[j + k], 'white');
                await this.drawPillar((j + k) * 15, this.array[j + k], 'red');
                await this.drawPillar((j + k) * 15, this.array[j + k], 'gray');
            }
        }
        if (k !== 1) {
            this.sort(k);
        }
    }

}
