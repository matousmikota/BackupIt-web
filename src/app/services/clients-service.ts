import {Client} from '../Models/client';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionsService} from './sessions.service';
import {catchError, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private data: Client[] = [
    { id: 0,
      device_name: 'DESKTOP-15E2U5T',
      mac_address: '1A-CA-88-03-61-43',
      ipv4_address: '18.234.12.122',
      last_backup: new Date(),
      last_seen: new Date()
    },
    { id: 1,
      device_name: 'DESKTOP-25E2U5T',
      mac_address: '2A-CA-88-03-61-43',
      ipv4_address: '28.234.12.122',
      last_backup: new Date(),
      last_seen: new Date()
    },
    { id: 2,
      device_name: 'DESKTOP-35E2U5T',
      mac_address: '3A-CA-88-03-61-43',
      ipv4_address: '38.234.12.122',
      last_backup: new Date(),
      last_seen: new Date()
    },
    { id: 3,
      device_name: 'DESKTOP-45E2U5T',
      mac_address: '4A-CA-88-03-61-43',
      ipv4_address: '28.234.12.122',
      last_backup: new Date(),
      last_seen: new Date()
    },
    { id: 4,
      device_name: 'DESKTOP-55E2U5T',
      mac_address: '5A-CA-88-03-61-43',
      ipv4_address: '28.234.12.122',
      last_backup: new Date(),
      last_seen: new Date()
    },
    { id: 5,
      device_name: 'DESKTOP-65E2U5T',
      mac_address: '6A-CA-88-03-61-43',
      ipv4_address: '28.234.12.122',
      last_backup: new Date(),
      last_seen: new Date()
    }
  ];

  constructor(private http: HttpClient,
              private router: Router,
              private sessions: SessionsService) { }

  public get options(): { headers: HttpHeaders }  {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.sessions.token
      })
    };
  }


  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(environment.api + '/data/Client', this.options).pipe(
      catchError(err => {
        this.unauthenticated(err);
        throw new Error(err);
      })
    );
  }

  public findById(id: number): Observable<Client> {
    return this.http.get<Client>(environment.api + '/data/Client/' + id, this.options);
  }

  public save(client: Client): Observable<Client> {
    /*if (client.id) {
      return this.http.put<Client>(environment.api + '/data/Client/' + client.id, client, this.options);

    } else {
      return this.http.post<Client>(environment.api + '/data/Client/', client, this.options);
    }*/
    return this.http.post<Client>(environment.api + '/data/Client/', client, this.options);
  }

  private unauthenticated(err: any): void {
    if (err.status === 401) {
      this.sessions.logout();
      this.router.navigate([ '/login' ]);
    }
  }


}
