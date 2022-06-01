import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Destination} from '../../Models/destination';
import {DestinationsService} from '../../services/destinations-service';
import {FormBuilder} from '@angular/forms';
import * as uuid from 'uuid';


@Component({
  templateUrl: 'destinations.component.html'
})
export class DestinationsComponent implements OnInit {

  currentDate = new Date();
  public data: Destination[] = [];
  myId = uuid.v4();
  public destinationForm = this.fb.group({
    id: [0],
    name: [''],
    path: [''],
    type: [''],
    login: [''],
    password: ['']
  });

  public destination: Destination = new Destination();

  constructor(
    private fb: FormBuilder,
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

  onSubmit() {
    /*console.warn(this.currentDate);
    const array = new Uint32Array(1);
    self.crypto.getRandomValues(array);*/
    // this.destination.id = array[0];
    this.destination.name = this.destinationForm.value.name;
    this.destination.path = this.destinationForm.value.path;
    this.destination.type = this.destinationForm.value.type;
    this.destination.login = this.destinationForm.value.login;
    this.destination.password = this.destinationForm.value.password;

    console.warn(this.destination);

    this.service.save(this.destination).subscribe(user => {
      this.router.navigate([ 'configs/destinations' ]);
    });

    this.redirectTo('configs/destinations');
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.data = data);
  }

  public showDestination(destination: Destination): void {
    this.router.navigate(['configs/destinations', destination.id]);
  }

  public redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
  }

}


