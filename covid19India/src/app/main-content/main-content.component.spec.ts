import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentComponent } from './main-content.component';
import { Total } from '../models/total';

describe('MainContentComponent', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    component.districts = {
      "North and Middle Andaman": {
        "meta": {
          "population": 105597
        },
        "total": {
          "confirmed": 1,
          "recovered": 1
        }
      },
      "South Andaman": {
        "meta": {
          "population": 238142
        },
        "total": {
          "confirmed": 51,
          "recovered": 32
        }
      },
      "Unknown": {
        "total": {
          "confirmed": 111,
          "recovered": 67
        }
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not set districts in main content when user clicks on state row and openAccordion flag is true', () => {
    component.openAccordion = true;
    component.openDistrictDetails();   
    expect(component.content.districts).toBeFalsy();
  });

  it('should set districts in main content when user again clicks on state row and openAccordion flag is false', () => {
    component.openAccordion = false;
    component.openDistrictDetails(); 
    expect(component.content.districts.length).toBe(3);
  });

  it('should not set districts in main content when total data is not available in districts', () => {
    component.districts = {
      "North and Middle Andaman": {
        "meta": {
          "population": 105597
        }
      },
      "South Andaman": {
        "meta": {
          "population": 238142
        }
      },
      "Unknown": {
        
      }
    };
    component.openDistrictDetails(); 
    expect(component.content.districts.length).toBe(0);
  });

  it('should call sortFields function', () => {
    component.openDistrictDetails();
    component.sortFields('district');
  });

  it('should call customSort function and sort district details in ascending order', () => {
    component.districtAscending = true;    
    component.customSort('district');
    expect(component).toBeTruthy();
  });

  it('should call customSort function and sort district details in descending order', () => {
    component.districtAscending = false;
    component.customSort('district');
    expect(component).toBeTruthy();
  });

  it('should call customSort function and sort district details in descending order', () => {
    component.districts = {
      "South Andaman": {
        "meta": {
          "population": 238142
        },
        "total": {
          "confirmed": 51,
          "recovered": 32
        }
      },
      "Test Andaman": {
        "meta": {
          "population": 238142
        },
        "total": {
          "confirmed": 51,
          "recovered": 32
        }
      },
      "North and Middle Andaman": {
        "meta": {
          "population": 105597
        },
        "total": {
          "confirmed": 1,
          "recovered": 1
        }
      },
      "Unknown": {
        "total": {
          "confirmed": 111,
          "recovered": 67
        }
      }
    };
    component.sortFields('district');
    component.customSort('district');
    expect(component).toBeTruthy();
  });
});
