import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'sources.component.html'
})
export class SourcesComponent {

  constructor() { }

  isCollapsed: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
}