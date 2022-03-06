import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Client} from '../../Models/client';
import {ClientsService} from '../../services/clients-service';


@Component({
  templateUrl: 'clients-edit.component.html'
})
export class ClientsEditComponent implements OnInit {

  public client: Client|null = null;

  constructor(private route: ActivatedRoute,
              private service: ClientsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.client = this.service.findById(id);
  }

}
