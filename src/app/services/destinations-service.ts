import {Destination} from '../Models/destination';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionsService} from './sessions.service';
import {catchError, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Config} from '../Models/config';


@Injectable({
  providedIn: 'root',
})
export class DestinationsService {
  private data: Destination[] = [
    { id: 0,
      name: 'C:\Users',
      path: '\\\\C:\\Users',
      type: 'Local',
      login: '',
      password: '',
    },
    { id: 1,
      name: 'AWS #1',
      path: '\\\\AWS1\\backup',
      type: 'Network',
      login: 'admin',
      password: '12345678',
    },
    { id: 2,
      name: 'Azure #1',
      path: '\\\\Azure1\\backup',
      type: 'Network',
      login: 'admin',
      password: '12345678',
    },
    { id: 3,
      name: 'Azure #2',
      path: '\\\\Azure1\\backup',
      type: 'Network',
      login: 'admin',
      password: '12345678',
    },
    { id: 4,
      name: 'Seriatim Server',
      path: 'ftp.seriatim.seriatim',
      type: 'FTP',
      login: 'admin',
      password: '12345678',
    },
    { id: 5,
      name: 'Divisim Server',
      path: 'ftp.divisim.divisim',
      type: 'FTP',
      login: 'admin',
      password: '12345678',
    },
    { id: 6,
      name: 'Verbatim HDD',
      path: 'Y:\\backup',
      type: 'Local',
      login: '',
      password: '',
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


  public findAll(): Observable<Destination[]> {
    return this.http.get<Destination[]>(environment.api + '/data/Destinations', this.options).pipe(
      catchError(err => {
        this.unauthenticated(err);
        throw new Error(err);
      })
    );
  }

  public findById(id: number): Observable<Destination> {
    return this.http.get<Destination>(environment.api + '/data/Destinations/' + id, this.options);
  }

  public deleteById(id: number): Observable<Destination> {
    return this.http.delete<Destination>(environment.api + '/data/Destinations/' + id, this.options);
  }

  public save(destination: Destination): Observable<Destination> {
    /*if (destination.id) {
      return this.http.put<Destination>(environment.api + '/data/Destinations/' + destination.id, destination, this.options);

    } else {
      return this.http.post<Destination>(environment.api + '/data/Destinations/', destination, this.options);
    }*/
    return this.http.post<Destination>(environment.api + '/data/Destinations/', destination, this.options);
  }

  private unauthenticated(err: any): void {
    if (err.status === 401) {
      this.sessions.logout();
      this.router.navigate([ '/login' ]);
    }
  }

}
