import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  title = 'VRentz';
  isExpanded = false;
  isMobileResolution: boolean;

  constructor() {
   }

  ngOnInit(): void {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onToggleSidenav(){
    this.isExpanded = !this.isExpanded;
  }

  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

}
