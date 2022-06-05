import {Client} from '../Models/client';
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
export class ClientsService {

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

  public deleteById(id: number): Observable<Client> {
    return this.http.delete<Client>(environment.api + '/data/Client/' + id, this.options);
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
