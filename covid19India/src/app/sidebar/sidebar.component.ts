import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  showMenuBar: Boolean = false;

  openMenuBar() {
    this.showMenuBar = true;    
  }

  closeMenuBar() {  
    this.showMenuBar = false;    
  }

}
