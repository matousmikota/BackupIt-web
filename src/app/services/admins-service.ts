import {Admin} from '../Models/admin';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminsService {
  private data: Admin[] = [
    { id: 0,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
    { id: 1,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
    { id: 2,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
    { id: 3,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
    { id: 4,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
    { id: 5,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
    { id: 6,
      name: 'Jana',
      login: 'admin',
      password: '12345678',
      send_report_email: true,
      email_cron: '0 23 ? * MON-FRI'
    },
  ];

  public findAll(): Admin[] {
    return this.data;
  }

  public findById(id: number): Admin|null {
    let item;
    for (item of this.data) {
      if (item.id === id) {
        return item;
      }
    }

    return null;
  }

}
