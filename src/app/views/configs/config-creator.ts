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
import {DestinationConfigService} from '../../services/destinationConfig-service';
import {DestinationConfig} from '../../Models/destinationConfig';


@Component({
  templateUrl: 'config-creator.html',
  styleUrls: ['config-creator.scss']
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
    ]),
    destinations: new FormArray([])
  });

  public cronExpression = '0/17 * 1/1 * ?';
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
    hideYearlyTab: true,
    hideAdvancedTab: true,

    hideSeconds: true,
    removeSeconds: true,
    removeYears: true
  };

  pipe = new DatePipe('cs-CZ');
  date = Number(this.pipe.transform(Date.now(), 'MMddHHmmss'));
  sourceArr = this.configForm.value.sources;
  destinationArr = this.configForm.value.destinations;

  public data: Destination[] = [];
  // cronForm: any;

  get sources() {
    return this.configForm.get('sources') as FormArray;
  }

  public config: Config = new Config();
  public source: Source = new Source();
  public configDestination: DestinationConfig = new DestinationConfig();


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DestinationsService,
    private configService: ConfigsService,
    public sourceService: SourcesService,
    public configDestinationService: DestinationConfigService
    ) { }

  addSource() {
    this.sources.push(this.fb.control(''));
  }

  onSubmit() {
    this.config.id = this.date;
    this.config.name = this.configForm.value.name;
    this.config.type = this.configForm.value.type;
    this.cronExpression = this.cronExpression.replace('0/', '*/');
    this.cronExpression = this.cronExpression.replace('1/', '');
    this.cronExpression = this.cronExpression.replace('?', '*');
    this.cronExpression = this.cronExpression.replace('1 *', '* *');
    console.warn(this.cronExpression);
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

    this.destinationArr = this.configForm.value.destinations;
    this.destinationArr.forEach(value => {
      this.configDestination = new DestinationConfig();
      this.configDestination.destinationid = value;
      this.configDestination.configid = this.config.id;
      console.warn(this.configDestination);
      this.configDestinationService.save(this.configDestination).subscribe(user => {
        this.router.navigate([ 'configs/configs' ]);
      });

    });
    console.warn(this.configForm);
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.data = data);
    // this.cronForm = new FormControl('0 0 1/1 * *');
  }

  onCheckChange(event) {
    const formArray: FormArray = this.configForm.get('destinations') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    } else {
      // find the unselected element
      let i = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value === event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }

  public destinationSelected(destination: Destination): void {
    this.selected.emit(destination);
  }

  public showDestination(destination: Destination): void {
    this.router.navigate(['destination', destination.id]);
  }

  public redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
  }

}


