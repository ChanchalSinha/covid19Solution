import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid19India';
  constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('home',
        sanitizer.bypassSecurityTrustResourceUrl('./assets/home.svg'));
    matIconRegistry.addSvgIcon('demographic',
        sanitizer.bypassSecurityTrustResourceUrl('./assets/demographic.svg'));
    matIconRegistry.addSvgIcon('essential',
        sanitizer.bypassSecurityTrustResourceUrl('./assets/essential.svg'));
    matIconRegistry.addSvgIcon('about',
        sanitizer.bypassSecurityTrustResourceUrl('./assets/about.svg'));
    matIconRegistry.addSvgIcon('blog',
        sanitizer.bypassSecurityTrustResourceUrl('./assets/blog.svg'));
    matIconRegistry.addSvgIcon('theme',
        sanitizer.bypassSecurityTrustResourceUrl('./assets/theme.svg'));
        
  }
}
