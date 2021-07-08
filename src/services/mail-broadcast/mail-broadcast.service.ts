import { Injectable } from '@nestjs/common';
import { Env } from 'src/config/env-loader';
import { ExcelService, FileUploaded } from 'src/utils/excel-parser';
import { MessagerService } from '../messager/messager.service';
import { ExcelField } from '../sms-broadcast/dto/excel-field.dto';
const { OUTLOOK_MAIL, OUTLOOK_PASS } = Env();

@Injectable()
export class MailBroadcastService {
  constructor(
    private excelService: ExcelService,
    private messagerService: MessagerService,
  ) {}

  async sendMail(file: FileUploaded) {
    const data: ExcelField[] = [];
    const json: ExcelField = await this.excelService.parseToJson(file);
    for (const iterator in json) {
      data.push(json[iterator]);
    }
    console.log(data);
    return data.map(async (data) => {
      await this.messagerService.SendMail(data.name, data.email, data.message);
    });
  }
}
