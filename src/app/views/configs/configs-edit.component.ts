import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Config} from '../../Models/config';
import {ConfigsService} from '../../services/configs-service';


@Component({
  templateUrl: 'configs-edit.component.html'
})
export class ConfigsEditComponent implements OnInit {

  public config: Config|null = null;

  constructor(private route: ActivatedRoute,
              private service: ConfigsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.service.findById(id).subscribe(config => {
      this.config = config;
      // this.form = this.createForm(this.user);
    });
  }

}
