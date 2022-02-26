import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'destinations.component.html'
})
export class DestinationsComponent {

  constructor() { }

  isCollapsedForm1: boolean = false;
  isCollapsedForm2: boolean = false;
  isCollapsedForm3: boolean = false;
  isCollapsedTable1: boolean = true;
  isCollapsedTable2: boolean = true;
  isCollapsedTable3: boolean = true;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
}


