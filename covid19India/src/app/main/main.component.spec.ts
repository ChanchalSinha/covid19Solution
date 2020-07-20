import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { ContentService } from '../services/content.service';
import { ContentServiceStub } from '../testing/content.service.stub'
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let service: ContentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      providers: [ ContentService ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ContentService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    //expect(component.content.states.length).toBe(30);
  });
});
