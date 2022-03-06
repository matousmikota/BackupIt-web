export class Log {
  public id: number = 0;
  public client_id: number = 0;
  public config_id: number = 0;
  public was_successful: boolean = true;
  public start: Date = new Date();
  public end: Date = new Date();
  public error_code: string = '';
}
