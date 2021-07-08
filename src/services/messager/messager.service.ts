import { Injectable } from '@nestjs/common';
import { Env } from 'src/config/env-loader';
import { Twilio } from 'twilio';
import * as nodemailer from 'nodemailer';
const { TwilioSid, TwilioAuth, TwilioNumber, OUTLOOK_MAIL, OUTLOOK_PASS } =
  Env();

@Injectable()
export class MessagerService {
  SendSMS(name: string, phoneNumber: string, message: string) {
    console.log(name, phoneNumber);

    const client = new Twilio(TwilioSid, TwilioAuth);
    try {
      return client.messages
        .create({
          from: TwilioNumber,
          to: phoneNumber,
          body: `Haii ${name}, ` + message,
        })
        .then((resp) => ({
          status: resp.status,
          from: resp.from,
          to: resp.to,
        }));
    } catch (err) {
      return {
        error: err.message,
        stack: err.stack,
        code: err.code,
      };
    }
  }

  async SendMail(name: string, to: string, message: string) {
    let transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: OUTLOOK_MAIL,
        pass: OUTLOOK_PASS,
      },
    });

    return await transporter
      .sendMail({
        from: OUTLOOK_MAIL,
        to: 'sholehbaktiabadi@gmail.com',
        subject: 'Laratech Id - Promotion Code',
        text: 'Laratechid Verification : ',
        html: `<b> haii ${name}, ${message}</b>`,
      })
      .then(() => {
        return { status: 'sent', to };
      })
      .catch((err) => {
        return { status: 'failed', data: err };
      });
  }
}
