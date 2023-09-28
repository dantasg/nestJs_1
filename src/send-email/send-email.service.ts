import { Injectable } from '@nestjs/common';

import { createTransport } from 'nodemailer';

@Injectable()
export class SendEmailService {
  transporter: any;
  constructor() {
    this.transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: `${process.env.AUTH_USER}`,
        pass: `${process.env.AUTH_PASS}`,
      },
    });
  }

  async send(email: string, name: string, subject: string, content: string) {
    await this.transporter
      .sendMail({
        from: `Genival Dantas <${process.env.AUTH_USER}`,
        to: email,
        subject: subject,
        text: `Hello ${name} | ${content}`,
      })
      .then(message => {
        console.log(message);
        return;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
