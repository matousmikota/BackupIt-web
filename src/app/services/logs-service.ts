import {Log} from '../Models/log';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  private data: Log[] = [
    { id: 0,
      client_id: 4,
      config_id: 2,
      was_successful: true,
      start: new Date(),
      end: new Date(),
      error_code: '',
    },
    { id: 1,
      client_id: 4,
      config_id: 2,
      was_successful: true,
      start: new Date(),
      end: new Date(),
      error_code: '',
    },
    { id: 2,
      client_id: 4,
      config_id: 2,
      was_successful: true,
      start: new Date(),
      end: new Date(),
      error_code: '',
    },
    { id: 3,
      client_id: 4,
      config_id: 2,
      was_successful: false,
      start: new Date(),
      end: new Date(),
      error_code: 'ERROR_DISK_FULL (0x70)',
    },
    { id: 4,
      client_id: 4,
      config_id: 2,
      was_successful: true,
      start: new Date(),
      end: new Date(),
      error_code: '',
    },
    { id: 4,
      client_id: 4,
      config_id: 2,
      was_successful: true,
      start: new Date(),
      end: new Date(),
      error_code: '',
    },
  ];

  public findAll(): Log[] {
    return this.data;
  }

  public findById(id: number): Log|null {
    let item;
    for (item of this.data) {
      if (item.id === id) {
        return item;
      }
    }

    return null;
  }

}
