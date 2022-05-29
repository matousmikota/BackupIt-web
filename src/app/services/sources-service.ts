import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionsService} from './sessions.service';
import {catchError, Observable} from 'rxjs';
import {Source} from '../Models/source';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SourcesService {


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


  public findAll(): Observable<Source[]> {
    return this.http.get<Source[]>(environment.api + '/data/Source', this.options).pipe(
      catchError(err => {
        this.unauthenticated(err);
        throw new Error(err);
      })
    );
  }

  public findById(id: number): Observable<Source> {
    return this.http.get<Source>(environment.api + '/data/Source/' + id, this.options);
  }

  public save(source: Source): Observable<Source> {
    /*if (source.id) {
      return this.http.put<Source>(environment.api + '/data/Source/' + source.id, source, this.options);

    } else {
      return this.http.post<Source>(environment.api + '/data/Source/', source, this.options);
    }*/
    console.warn(source);
    return this.http.post<Source>(environment.api + '/data/Source/', source, this.options);
  }

  private unauthenticated(err: any): void {
    if (err.status === 401) {
      this.sessions.logout();
      this.router.navigate([ '/login' ]);
    }
  }

}
