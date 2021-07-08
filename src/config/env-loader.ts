import * as dotenv from 'dotenv';
dotenv.config();

export const Env = () => ({
  SERVER_ENV: +process.env.SERVER_ENV,
  SERVER_PORT: +process.env.SERVER_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: +process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  SMTP_SERVER: process.env.SMTP_SERVER,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_MAIL: process.env.SMTP_MAIL,
  SMTP_APIKEY: process.env.SMTP_APIKEY,
  TwilioSid: process.env.TWILIO_ACCOUNT_SID,
  TwilioAuth: process.env.TWILIO_AUTH_TOKEN,
  TwilioNumber: process.env.TWILIO_PHONE_NUMBER,
  OUTLOOK_MAIL: process.env.OUTLOOK_MAIL,
  OUTLOOK_PASS: process.env.OUTLOOK_PASS,
});
