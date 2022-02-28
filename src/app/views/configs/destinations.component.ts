import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'destinations.component.html'
})
export class DestinationsComponent {

  constructor() { }

  isCollapsedForm1 = false;
  isCollapsedForm2 = false;
  isCollapsedForm3 = false;
  isCollapsedTable1 = true;
  isCollapsedTable2 = true;
  isCollapsedTable3 = true;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
}


