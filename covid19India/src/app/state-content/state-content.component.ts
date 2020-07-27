import { Component, Input } from '@angular/core';
import { Total } from '../models/total';

@Component({
  selector: 'app-state-content',
  templateUrl: './state-content.component.html',
  styleUrls: ['./state-content.component.scss']
})
export class StateContentComponent {
  
  @Input() district: Total;

}
