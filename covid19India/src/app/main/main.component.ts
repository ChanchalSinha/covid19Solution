import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service'
import { Content } from '../models/content';
import { Total } from '../models/total';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  content: Content;
  stateAscending: boolean = true;
  confirmedAscending: boolean = true;
  activeAscending: boolean = true;
  recoveredAcsending: boolean = true;
  deceasedAcsending: boolean = true;
  testedAscending: boolean = true;
  totalCount: Object = [];
  name: string = 'header1';
  constructor(private contentsService: ContentService) { }

  onButtonClick(name) {
    console.log('name is ',name);
    
  }

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
            tested: result[key].total.tested ? result[key].total.tested : 0
          };
          let state = {
            total: totalCount,
            districts: result[key].districts
          };
          states.push(state);
        }   
      }
      this.content = { states: states };
      this.sortFields('confirmed');
      this.totalCount = this.content.states.filter((state)=>{return state.total.state === 'India'});
    })
  }

  sortFields(fieldName: string): void {    
    this.content && this.content.states.sort(this.customSort(fieldName));
  }

  customSort(property: string) { 
    var sort_order = 1;
    let field = property + "Ascending";
    this[field] = !this[field]
    
    if (!this[field]) {
        sort_order = -1;
    }
    return function (a:any, b:any) {
        if (a.total[property] < b.total[property]) {
                return -1 * sort_order;
        } else if (a.total[property] > b.total[property]) {
                return 1 * sort_order;
        } else {
                return 0 * sort_order;
        }
    }
  }

}
