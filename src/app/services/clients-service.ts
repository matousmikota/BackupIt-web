import {Client} from '../Models/client';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private data: Client[] = [
    { id: 0,
      device_name: 'DESKTOP-15E2U5T',
      mac_address: '1A-CA-88-03-61-43',
      ipv4_address: '18.234.12.122',
      last_backup: new Date(),
      last_seen: new Date()
    },
    { id: 1,
      device_name: 'DESKTOP-25E2U5T',
      mac_address: '2A-CA-88-03-61-43',
      ipv4_address: '28.234.12.122',
      last_backup: new Date(),
      last_seen: new Date()
    },
    { id: 2,
      device_name: 'DESKTOP-35E2U5T',
      mac_address: '3A-CA-88-03-61-43',
      ipv4_address: '38.234.12.122',
      last_backup: new Date(),
      last_seen: new Date()
    },
    { id: 3,
      device_name: 'DESKTOP-45E2U5T',
      mac_address: '4A-CA-88-03-61-43',
      ipv4_address: '28.234.12.122',
      last_backup: new Date(),
      last_seen: new Date()
    },
    { id: 4,
      device_name: 'DESKTOP-55E2U5T',
      mac_address: '5A-CA-88-03-61-43',
      ipv4_address: '28.234.12.122',
      last_backup: new Date(),
      last_seen: new Date()
    },
    { id: 5,
      device_name: 'DESKTOP-65E2U5T',
      mac_address: '6A-CA-88-03-61-43',
      ipv4_address: '28.234.12.122',
      last_backup: new Date(),
      last_seen: new Date()
    }
  ];

  public findAll(): Client[] {
    return this.data;
  }

  public findById(id: number): Client|null {
    let item;
    for (item of this.data) {
      if (item.id === id) {
        return item;
      }
    }

    return null;
  }

}
