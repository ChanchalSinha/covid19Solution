import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service'
import { Content } from '../models/content';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  content: Content;
  constructor(private contentsService: ContentService) { }

  ngOnInit(): void {
    this.contentsService.getContents().subscribe((result)=>{      
      
      let states = [];
      for ( let key in result) {
        if(result[key].total) {
          let totalCount = {
            state: this.contentsService.getCountryName(key),
            confirmed: result[key].total.confirmed ? result[key].total.confirmed : 0,
            active: result[key].total.confirmed - ((result[key].total.recovered || 0) + (result[key].total.deceased || 0)),
            recovered: result[key].total.recovered ? result[key].total.recovered : 0,
            deceased: result[key].total.deceased ? result[key].total.deceased : 0,
            tested: result[key].total.tested ? result[key].total.tested : 0,
          };
          let state = {
            total: totalCount
          };
          states.push(state);
        }        
      }
      this.content = { states: states };
    })
  }

}
