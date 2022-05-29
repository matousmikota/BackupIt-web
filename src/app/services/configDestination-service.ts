import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionsService} from './sessions.service';
import {catchError, Observable} from 'rxjs';
import {ConfigDestination} from '../Models/configDestination';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigDestinationService {


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


  public findAll(): Observable<ConfigDestination[]> {
    return this.http.get<ConfigDestination[]>(environment.api + '/data/DConfigs', this.options).pipe(
      catchError(err => {
        this.unauthenticated(err);
        throw new Error(err);
      })
    );
  }

  public findById(id: number): Observable<ConfigDestination> {
    return this.http.get<ConfigDestination>(environment.api + '/data/DConfigs/' + id, this.options);
  }

  public save(configDestination: ConfigDestination): Observable<ConfigDestination> {
    return this.http.post<ConfigDestination>(environment.api + '/data/DConfigs/', configDestination, this.options);
  }

  private unauthenticated(err: any): void {
    if (err.status === 401) {
      this.sessions.logout();
      this.router.navigate([ '/login' ]);
    }
  }

}
