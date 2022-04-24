import {Config} from '../Models/config';
import {Injectable} from '@angular/core';

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

  public findAll(): Config[] {
    return this.data;
  }

  public findById(id: number): Config|null {
    let item;
    for (item of this.data) {
      if (item.id === id) {
        return item;
      }
    }

    return null;
  }

}
