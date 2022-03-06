import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormArray, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Destination} from '../../Models/destination';
import {Router} from '@angular/router';
import {ClientsService} from '../../services/clients-service';
import {DestinationsService} from '../../services/destinations-service';
import {Client} from '../../Models/client';

@Component({
  templateUrl: 'config-creator.html'
})
export class ConfigCreatorComponent implements OnInit {

  @Input()
  public destinations: Destination[] = [];

  @Output()
  public selected: EventEmitter<Destination> = new EventEmitter<Destination>();

  configForm = this.fb.group({
    id: [0],
    name: [''],
    type: [''],
    backup_cron: [''],
    max_size: [0],
    max_count: [0],
    compress_into_archive: [false],
    sources: this.fb.array([
      this.fb.control('')
    ])
  });

  public data: Destination[] = [];

  get sources() {
    return this.configForm.get('sources') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DestinationsService) { }

  addSource() {
    this.sources.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.configForm.value);
  }

  ngOnInit(): void {
    this.data = this.service.findAll();
  }

  public destinationSelected(destination: Destination): void {
    this.selected.emit(destination);
  }

  public showDestination(destination: Destination): void {
    this.router.navigate(['destination', destination.id]);
  }

}


