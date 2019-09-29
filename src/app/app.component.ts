import { Component, ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Field } from './field';
import { AlgorithmBase } from './algorithmBase';
import { InsertionSort } from './algorithms/insertionSort';
import { SelectionSort } from './algorithms/selectionSort';
import { BubbleSort } from './algorithms/bubbleSort';
import { ShellSort } from './algorithms/shellSort';
import { MergeSort } from './algorithms/mergeSort';
import { CockatielShakerSort } from './algorithms/cockatielShakerSort';
import { RadixSort } from './algorithms/radixSort';
import { QuickSort } from './algorithms/quickSort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('nav', { static: false }) nav: ElementRef;
  context: CanvasRenderingContext2D;
  title = 'sortingAlgorithms';
  selectedSortType = 'Select a sorting type';
  sortingTypes = [
    'Insertion sort',
    'Selection sort',
    'Bubble sort',
    'Cocktail shaker sort',
    'Shell sort',
    'Merge sort',
    'Quick sort',
    'Radix sort'
  ];
  fieldReference = Field;
  insertionSort: AlgorithmBase;
  selectionSort: AlgorithmBase;
  bubbleSort: AlgorithmBase;
  shellSort: AlgorithmBase;
  mergeSort: AlgorithmBase;
  cockatielShakerSort: AlgorithmBase;
  radixSort: AlgorithmBase;
  quickSort: AlgorithmBase;
  async ngAfterViewInit() {
    Field.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
    await this.drawCanvas();
    this.insertionSort = new InsertionSort();
    this.selectionSort = new SelectionSort();
    this.bubbleSort = new BubbleSort();
    this.shellSort = new ShellSort();
    this.mergeSort = new MergeSort();
    this.cockatielShakerSort = new CockatielShakerSort();
    this.radixSort = new RadixSort();
    this.quickSort = new QuickSort();
  }

  onSelect(event) {
    this.selectedSortType = event.srcElement.id;
  }
  async sort() {
    if (!this.selectedSortType || this.selectedSortType === '') {
      this.selectedSortType = 'Select a sorting type';
      return;
    }
    switch (this.selectedSortType) {
      case 'Insertion sort':
        this.insertionSort.sort();
        break;
      case 'Selection sort':
        this.selectionSort.sort();
        break;
      case 'Bubble sort':
        this.bubbleSort.sort();
        break;
      case 'Shell sort':
        this.shellSort.sort();
        break;
      case 'Merge sort':
        this.mergeSort.sort();
        break;
      case 'Quick sort':
        this.quickSort.sort();
        break;
      case 'Cocktail shaker sort':
        this.cockatielShakerSort.sort();
        break;
      case 'Radix sort':
        this.radixSort.sort();
        break;
      default:
        break;
    }
    Field.context.stroke();
  }

  async drawCanvas() {
    Field.context.clearRect(0, 0, this.canvas.nativeElement.clientWidth, this.canvas.nativeElement.clientHeight);
    await Field.generate();
    Field.context.canvas.width = Field.array.length * 15;
    Field.context.canvas.height = Field.getMaxNumber;
    Field.context.fillStyle = 'gray';
    this.drawUnsortedArray();
    Field.context.stroke();
  }

  drawUnsortedArray() {
    let x = 0;
    Field.array.forEach(num => {
      let y = Field.getMaxNumber;
      for (let i = 0; i <= num; i++) {
        Field.context.fillRect(x, y, 10, 10);
        y -= 10;
      }
      x += 15;
    });
  }
}


