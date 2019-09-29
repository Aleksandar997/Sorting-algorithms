import { AlgorithmBase } from '../algorithmBase';
import { Field } from '../field';

export class QuickSort extends AlgorithmBase {
    async sort(low: number = 0, high: number = (Field.array.length - 1)) {
        this.array = Field.array;
        if (low < high) {
            const partitionIndex = await this.partition(low, high);

            await this.sort(low, partitionIndex - 1);
            await this.sort(partitionIndex + 1, high);
        }
    }

    async partition(low: number, high: number) {
        let j = (low - 1);
        const pivot = this.array[high];
        await this.drawPillar(high * 15, Field.getMaxNumber - pivot, 'white');
        await this.drawPillar(high * 15, pivot, 'red');
        for (let i = low; i < high; i++) {
            if (this.array[i] < pivot) {
                j++;
                const temp = this.array[i];
                this.array[i] = this.array[j];
                this.array[j] = temp;
                await this.drawPillar(j * 15, Field.getMaxNumber - this.array[j], 'white');
                await this.drawPillar(j * 15, this.array[j], 'gray');
                await this.drawPillar(i * 15, Field.getMaxNumber - this.array[i], 'white');
                await this.drawPillar(i * 15, this.array[i], 'gray');
            }
        }
        const tempPivot = this.array[high];
        this.array[high] = this.array[j + 1];
        this.array[j + 1] = tempPivot;
        await this.drawPillar((j + 1) * 15, Field.getMaxNumber - this.array[(j + 1)], 'white');
        await this.drawPillar((j + 1) * 15, this.array[(j + 1)], 'gray');
        await this.drawPillar(high * 15, Field.getMaxNumber - this.array[high], 'white');
        await this.drawPillar(high * 15, this.array[high], 'gray');
        return (j + 1);
    }

}


