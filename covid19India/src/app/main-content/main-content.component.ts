import { Component, OnInit, Input } from '@angular/core';
import { State } from '../models/state';
import { Total } from '../models/total';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Input() total: Total;
  @Input() districts: any;
  districtAscending: boolean = true;
  confirmedAscending: boolean = true;
  activeAscending: boolean = true;
  recoveredAcsending: boolean = true;
  deceasedAcsending: boolean = true;
  testedAscending: boolean = true;
  content: State;
  openAccordion: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  openDistrictDetails(): void {
    this.openAccordion = !this.openAccordion;
    if(this.openAccordion) {
      let districts = [];
      for ( let district in this.districts) {
        let districtDetail = this.districts[district];      
            if(districtDetail.total) {
              let totalCount = {
                district: district,
                confirmed: districtDetail.total.confirmed ? districtDetail.total.confirmed : 0,
                active: districtDetail.total.confirmed - ((districtDetail.total.recovered || 0) + (districtDetail.total.deceased || 0)),
                recovered: districtDetail.total.recovered ? districtDetail.total.recovered : 0,
                deceased: districtDetail.total.deceased ? districtDetail.total.deceased : 0,
                tested: districtDetail.total.tested ? districtDetail.total.tested : 0,
              };
              let dst = {
                total: totalCount
              };
              districts.push(dst);
            }   
          }
          this.content = {total: this.total, districts: districts};
    } else {
      this.content = new State();
    }          
  }

  sortFields(fieldName: string): void {
    this.content && this.content.districts.sort(this.customSort(fieldName));
  }

  customSort(property: string) { 
    var sort_order = 1;
    let field = property + "Ascending";
    this[field] = !this[field]
    
    if(!this[field]){
        sort_order = -1;
    }
    return function (a:any, b:any) {
        if(a.total[property] < b.total[property]){
                return -1 * sort_order;
        }else if(a.total[property] > b.total[property]){
                return 1 * sort_order;
        }else{
                return 0 * sort_order;
        }
    }
  }



}
