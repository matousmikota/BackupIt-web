export class Config {
  public id: number = 0;
  public name: string = '';
  public type: string = '';
  public backup_cron: string = '';
  public max_count: number = 0;
  public max_size: number = 0; // in MB
  public compress_into_archive: boolean = false;
}
