import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showMenuBar: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openMenuBar() {
    this.showMenuBar = true;    
  }

  closeMenuBar() {  
    this.showMenuBar = false;    
  }

}
