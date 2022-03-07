import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Destination} from '../../Models/destination';
import {DestinationsService} from '../../services/destinations-service';

@Component({
  templateUrl: 'destinations.component.html'
})
export class DestinationsComponent implements OnInit {

  public data: Destination[] = [];

  constructor(
    private router: Router,
    private service: DestinationsService
  ) { }

  isCollapsedForm = false;
  isCollapsedTable = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  ngOnInit(): void {
    this.data = this.service.findAll();
  }

  public showDestination(destination: Destination): void {
    this.router.navigate(['configs/destinations', destination.id]);
  }

}


