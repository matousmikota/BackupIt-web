import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Admin} from '../../Models/admin';
import {AdminsService} from '../../services/admins-service';


@Component({
  templateUrl: 'admins-edit.component.html'
})
export class AdminsEditComponent implements OnInit {

  public admin: Admin|null = null;

  constructor(private route: ActivatedRoute,
              private service: AdminsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.admin = this.service.findById(id);
  }

}
