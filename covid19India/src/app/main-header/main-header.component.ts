import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  @Output("parentFun") parentFun: EventEmitter<string> = new EventEmitter<string>(); 
  constructor() { }

  ngOnInit(): void {    
  }

  sortFields(fieldName: string): void {    
    this.parentFun.emit(fieldName);
  }


}
