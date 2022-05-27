import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl} from '@angular/forms'; // FormsModule, ReactiveFormsModule, Validators, FormControl
import {Destination} from '../../Models/destination';
import {Router} from '@angular/router';
import {DestinationsService} from '../../services/destinations-service';
import {ConfigsService} from '../../services/configs-service';
import {Config} from '../../Models/config';


@Component({
  templateUrl: 'config-creator.html'
})
export class ConfigCreatorComponent implements OnInit {

  @Input()
  public destinations: Destination[] = [];

  @Output()
  public selected: EventEmitter<Destination> = new EventEmitter<Destination>();

  public configForm = this.fb.group({
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
  // cronForm: any;

  get sources() {
    return this.configForm.get('sources') as FormArray;
  }

  public config: Config = new Config();

  public id: number = 411;
  /*
 public name: string = 'ICT_114';
 public type: string = 'full';
 public backup_cron: string = '20 * * * *';
 public max_count: number = 3;
 public max_size: number = 4;
 public compress_into_archive: boolean = false;
*/

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DestinationsService,
    private configService: ConfigsService
    ) { }

  addSource() {
    this.sources.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.configForm.value);
    // Object.assign(this.config, this.configForm.value);
    this.config.id = Math.random();
    this.config.name = this.configForm.value.name;
    this.config.type = this.configForm.value.type;
    this.config.backup_cron = this.configForm.value.backup_cron;
    this.config.max_count = this.configForm.value.max_count;
    this.config.compress_into_archive = this.configForm.value.compress_into_archive;
    this.config.type = this.configForm.value.type;
    console.warn(this.config);

    this.configService.save(this.config).subscribe(user => {
      this.router.navigate([ 'configs/configs' ]);
    });
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.data = data);
    // this.cronForm = new FormControl('0 0 1/1 * *');
  }

  public destinationSelected(destination: Destination): void {
    this.selected.emit(destination);
  }

  public showDestination(destination: Destination): void {
    this.router.navigate(['destination', destination.id]);
  }

}


