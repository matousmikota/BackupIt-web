import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Destination} from '../../Models/destination';
import {DestinationsService} from '../../services/destinations-service';


@Component({
  templateUrl: 'destinations-edit.component.html'
})
export class DestinationsEditComponent implements OnInit {

  public destination: Destination|null = null;

  constructor(private route: ActivatedRoute,
              private service: DestinationsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.service.findById(id).subscribe(destination => {
      this.destination = destination;
      // this.form = this.createForm(this.user);
    });
  }

}
