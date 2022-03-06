export class Client {
  public id: number = 0;
  public device_name: string = '';
  // public configs: Config[{new Config()}];
  public mac_address: string = '';
  public ipv4_address: string = '';
  public last_backup: Date = new Date();
  public last_seen: Date = new Date();
}
