import { AlgorithmBase } from '../algorithmBase';
import { Field } from '../field';

export class MergeSort extends AlgorithmBase {
    async sort() {
        const arr: Array<Side> = Field.array.map((v, i) => {
            return {
                value: v,
                index: i
            };
        });
        await this.mergeSort(arr);
    }

    async mergeSort(arr: Array<Side>) {
        if (arr && arr.length <= 1) {
            return arr;
        }
        const n = Math.floor(arr.length / 2);
        const leftSide = arr.slice(0, n);
        const rightSide = arr.slice(n, arr.length);
        const res = await this.mergeArrays(await this.mergeSort(leftSide), await this.mergeSort(rightSide));
        return res;
    }

    async mergeArrays(leftSide: Array<Side>, rightSide: Array<Side>) {
        const resultArray = new Array<Side>();
        let leftIndex = 0;
        let rightIndex = 0;
        while (leftIndex < leftSide.length && rightIndex < rightSide.length) {
            if (leftSide[leftIndex].value < rightSide[rightIndex].value) {
                resultArray.push(new Side(leftSide[leftIndex].value, leftSide[leftIndex].index));
                leftIndex++;
            } else {
                resultArray.push(new Side(rightSide[rightIndex].value, rightSide[rightIndex].index));
                rightIndex++;
            }
        }
        const res = resultArray.concat(...leftSide.slice(leftIndex), ...rightSide.slice(rightIndex));
        let copyRes = Array.from(res);
        for (let i = 0; i < res.length; i++) {
            const nextMinIndex = Math.min(...copyRes.map(c => c.index));
            copyRes = copyRes.filter(c => c.index !== nextMinIndex);
            await this.drawPillar(nextMinIndex * 15, Field.getMaxNumber - res[i].value, 'white');
            await this.drawPillar(nextMinIndex * 15, res[i].value, 'gray');
        }
        return res;
    }
}

class Side {
    value: number;
    index: number;
    constructor(value: number, index: number) {
        this.value = value;
        this.index = index;
    }
}
