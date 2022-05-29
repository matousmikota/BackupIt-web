import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl} from '@angular/forms'; // FormsModule, ReactiveFormsModule, Validators, FormControl
import {Destination} from '../../Models/destination';
import {Router} from '@angular/router';
import {DestinationsService} from '../../services/destinations-service';
import {ConfigsService} from '../../services/configs-service';
import {Config} from '../../Models/config';
import { DatePipe } from '@angular/common';
import {Source} from '../../Models/source';
import {SourcesService} from '../../services/sources-service';
import { CronOptions } from 'cron-editor/lib/CronOptions';


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

  public cronExpression = '4 3 2 12 1/1 ? *';
  public isCronDisabled = false;
  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',

    defaultTime: '10:00:00',
    use24HourTime: true,

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: false,

    hideSeconds: false,
    removeSeconds: false,
    removeYears: false
  };

  pipe = new DatePipe('cs-CZ');
  date = Number(this.pipe.transform(Date.now(), 'MMddHHmmss'));
  sourceArr = this.configForm.value.sources;
  Sources: Array<{
    source: Source;
  }>;

  public data: Destination[] = [];
  // cronForm: any;

  get sources() {
    return this.configForm.get('sources') as FormArray;
  }

  public config: Config = new Config();
  public source: Source = new Source();


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DestinationsService,
    private configService: ConfigsService,
    public sourceService: SourcesService
    // public cronGenerator: CronGeneratorComponent
    ) { }

  addSource() {
    this.sources.push(this.fb.control(''));
  }

  onSubmit() {
    this.config.id = this.date;
    this.config.name = this.configForm.value.name;
    this.config.type = this.configForm.value.type;
    this.config.backup_cron = this.cronExpression;
    this.config.max_count = this.configForm.value.max_count;
    this.config.compress_into_archive = this.configForm.value.compress_into_archive;
    this.config.type = this.configForm.value.type;

    this.configService.save(this.config).subscribe(user => {
      this.router.navigate([ 'configs/configs' ]);
    });

    this.sourceArr = this.configForm.value.sources;
    this.sourceArr.forEach(value => {
      this.source = new Source();
      this.source.config_id = this.config.id;
      this.source.path = value;

      this.sourceService.save(this.source).subscribe(user => {
        this.router.navigate([ 'configs/configs' ]);
      });

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


