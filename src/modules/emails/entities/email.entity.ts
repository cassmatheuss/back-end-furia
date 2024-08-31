export class EmailEntity {
  id: string;
  name: string;
  email: string;
  message: string;
  send_at: Date;

  constructor(init: Partial<EmailEntity>) {
    Object.assign(this, init);
  }
}
