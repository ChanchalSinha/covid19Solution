import { Component, OnInit, Input } from '@angular/core';
import { State } from '../models/state';
import { Total } from '../models/total';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Input() total: Total;
  constructor() { }

  ngOnInit(): void {
  }

}
