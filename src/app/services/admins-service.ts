import {Admin} from '../Models/admin';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {SessionsService} from './sessions.service';
import {Router} from '@angular/router';
import {Destination} from '../Models/destination';

@Injectable({
  providedIn: 'root',
})
export class AdminsService {

  private data: Admin[] = [
    { id: 0,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
    { id: 1,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
    { id: 2,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
    { id: 3,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
    { id: 4,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
    { id: 5,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
    { id: 6,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
  ];

  /*
  public findAll(): Admin[] {
    return this.data;
  }

  public findById(id: number): Admin|null {
    let item;
    for (item of this.data) {
      if (item.id === id) {
        return item;
      }
    }

    return null;
  }*/

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


  public findAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(environment.api + '/data/Admin', this.options).pipe(
      catchError(err => {
        this.unauthenticated(err);
        throw new Error(err);
      })
    );
  }

  public findById(id: number): Observable<Admin> {
    return this.http.get<Admin>(environment.api + '/data/Admin/' + id, this.options);
  }

  public save(admin: Admin): Observable<Admin> {
   /* if (admin.id) {
      return this.http.put<Admin>(environment.api + '/data/Admin/' + admin.id, admin, this.options);

    } else {
      return this.http.post<Admin>(environment.api + '/data/Admin/', admin, this.options);
    }*/
    return this.http.post<Admin>(environment.api + '/data/Admin/', admin, this.options);
  }


  private unauthenticated(err: any): void {
    if (err.status === 401) {
      this.sessions.logout();
      this.router.navigate([ '/login' ]);
    }
  }

}
