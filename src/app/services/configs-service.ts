import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionsService} from './sessions.service';
import {catchError, Observable} from 'rxjs';
import {Config} from '../Models/config';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigsService {
  private data: Config[] = [
    { id: 0,
      name: 'test',
      type: 'full',
      backup_cron: '30 * * * *',
      max_size: 1,
      max_count: 1,
      compress_into_archive: false
    },
    { id: 1,
      name: 'a',
      type: 'full',
      backup_cron: '30 * * * *',
      max_size: 1,
      max_count: 1,
      compress_into_archive: false
    },
    { id: 2,
      name: 'ICT_211',
      type: 'incremental',
      backup_cron: '0 23 ? * MON-FRI',
      max_size: 1024,
      max_count: 7,
      compress_into_archive: false
    },
    { id: 3,
      name: 'ICT_211',
      type: 'incremental',
      backup_cron: '0 23 ? * MON-FRI',
      max_size: 1024,
      max_count: 7,
      compress_into_archive: false
    },
    { id: 4,
      name: 'ICT_211',
      type: 'incremental',
      backup_cron: '0 23 ? * MON-FRI',
      max_size: 1024,
      max_count: 7,
      compress_into_archive: false
    },
    { id: 5,
      name: 'ICT_211',
      type: 'incremental',
      backup_cron: '0 23 ? * MON-FRI',
      max_size: 1024,
      max_count: 7,
      compress_into_archive: false
    },
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


  public findAll(): Observable<Config[]> {
    return this.http.get<Config[]>(environment.api + '/data/Configs', this.options).pipe(
      catchError(err => {
        this.unauthenticated(err);
        throw new Error(err);
      })
    );
  }

  public findById(id: number): Observable<Config> {
    return this.http.get<Config>(environment.api + '/data/Configs/' + id, this.options);
  }

  public save(config: Config): Observable<Config> {
    /*if (config.id) {
      return this.http.put<Config>(environment.api + '/data/Configs/' + config.id, config, this.options);

    } else {
      return this.http.post<Config>(environment.api + '/data/Configs/', config, this.options);
    }*/
    return this.http.post<Config>(environment.api + '/data/Configs/', config, this.options);
  }

  private unauthenticated(err: any): void {
    if (err.status === 401) {
      this.sessions.logout();
      this.router.navigate([ '/login' ]);
    }
  }

}
