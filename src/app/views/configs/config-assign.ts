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
import {Client} from '../../Models/client';
import {ClientsService} from '../../services/clients-service';
import {ClientConfig} from '../../Models/clientConfig';
import {ClientConfigService} from '../../services/clientConfig-service';


@Component({
  templateUrl: 'config-assign.html'
})
export class ConfigAssignComponent implements OnInit {

  public configAssignForm = this.fb.group({
    clients: new FormArray([]),
    config: [0]
  });

  public clientData: Client[] = [];
  public configData: Config[] = [];

  clientsArr = this.configAssignForm.value.clients;
  public clientConfig: ClientConfig = new ClientConfig();

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public configsService: ConfigsService,
    public clientConfigService: ClientConfigService,
    public clientsService: ClientsService
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
    this.clientsArr = this.configAssignForm.value.clients;
    this.clientsArr.forEach(value => {
      this.clientConfig = new ClientConfig();
      this.clientConfig.client_id = value;
      this.clientConfig.config_id = this.configAssignForm.value.config;
      console.warn(this.clientConfig);
      this.clientConfigService.save(this.clientConfig).subscribe(user => {
        this.router.navigate([ 'configs/config-assign' ]);
      });
      this.redirectTo('configs/config-assign');
    });
  }

  onCheckChange(event) {
    const formArray: FormArray = this.configAssignForm.get('clients') as FormArray;
    const configid: number = this.configAssignForm.value.config;
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
    this.configAssignForm.value.config = configid;
    console.warn(this.configAssignForm);
  }

  CheckSelect(event) {
    this.configAssignForm.value.config = event.target.value;

    console.warn(this.configAssignForm);
  }

  public showClient(client: Client): void {
    this.router.navigate(['destination', client.id]); // TODO
  }

  public showConfig(config: Config): void {
    this.router.navigate(['destination', config.id]); // TODO
  }

  ngOnInit(): void {
    this.clientsService.findAll().subscribe(data => this.clientData = data);
    this.configsService.findAll().subscribe(data => this.configData = data);
  }

  public redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
  }
}


