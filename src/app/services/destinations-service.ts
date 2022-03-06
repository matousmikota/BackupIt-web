import {Destination} from '../Models/destination';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DestinationsService {
  private data: Destination[] = [
    { id: 0,
      name: 'AWS #1',
      path: '\\\\AWS1\\backup',
      type: 'Network',
      login: 'admin',
      password: '12345678',
    },
    { id: 1,
      name: 'AWS #2',
      path: '\\\\AWS2\\backup',
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

  public findAll(): Destination[] {
    return this.data;
  }

  public findById(id: number): Destination|null {
    let item;
    for (item of this.data) {
      if (item.id === id) {
        return item;
      }
    }

    return null;
  }

}
