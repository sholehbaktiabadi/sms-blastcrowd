import { Injectable } from '@nestjs/common';
import { Env } from 'src/config/env-loader';
import { Twilio } from 'twilio';

@Injectable()
export class MessagerService {
  SendMessage(name: string, phoneNumber: string, message: string) {
    console.log(name, phoneNumber);
    const { TwilioSid, TwilioAuth, TwilioNumber } = Env();
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
}
