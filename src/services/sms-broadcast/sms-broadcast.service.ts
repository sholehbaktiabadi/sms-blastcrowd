import { Injectable } from '@nestjs/common';
import { DataDto, ExcelService, FileUploaded } from 'src/utils/excel-parser';
import { MessagerService } from '../messager/messager.service';
import { ExcelField } from './dto/excel-field.dto';

@Injectable()
export class SmsBroadcastService {
  constructor(
    private excelService: ExcelService,
    private messagerService: MessagerService,
  ) {}

  async excelToJson(file: FileUploaded) {
    const data: ExcelField[] = [];
    const json: ExcelField = await this.excelService.parseToJson(file);
    for (const iterator in json) {
      data.push(json[iterator]);
    }
    return data.map((data) => {
      this.messagerService.SendMessage(data.name, data.phone, data.message);
    });
  }

  async jsonToExcel(data: DataDto[]) {
    return await this.excelService.parseToExcel(data);
  }
}
