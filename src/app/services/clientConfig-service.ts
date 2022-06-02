import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionsService} from './sessions.service';
import {catchError, Observable} from 'rxjs';
import {ClientConfig} from '../Models/clientConfig';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientConfigService {


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


  public findAll(): Observable<ClientConfig[]> {
    return this.http.get<ClientConfig[]>(environment.api + '/data/CConfigs', this.options).pipe(
      catchError(err => {
        this.unauthenticated(err);
        throw new Error(err);
      })
    );
  }

  public findById(id: number): Observable<ClientConfig> {
    return this.http.get<ClientConfig>(environment.api + '/data/CConfigs/' + id, this.options);
  }

  public save(clientConfig: ClientConfig): Observable<ClientConfig> {
    return this.http.post<ClientConfig>(environment.api + '/data/CConfigs/', clientConfig, this.options);
  }

  private unauthenticated(err: any): void {
    if (err.status === 401) {
      this.sessions.logout();
      this.router.navigate([ '/login' ]);
    }
  }

}
