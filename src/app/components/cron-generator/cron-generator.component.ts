import { Component } from '@angular/core';
import { CronOptions } from 'cron-editor/lib/CronOptions';

@Component({
  selector: 'app-cron-generator',
  templateUrl: 'cron-generator.component.html',
  styleUrls: ['cron-generator.component.scss']
})
export class CronGeneratorComponent {
  public cronExpression = '4 3 2 12 1/1 ? *';
  public isCronDisabled = false;
  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',
    // tabSetClass: '',
    // tabClass: '',

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
}
