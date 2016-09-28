import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Input()
  input

  @Output()
  outputBack

  constructor() {
    this.outputBack = new EventEmitter<String>();
  }

  ngOnInit() {
  }

  sendBack(data){
    //if(Number(data)%2==0)
    //this.counter ++;
    this.outputBack.emit(2);
  }

}
