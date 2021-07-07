import { Injectable } from '@nestjs/common';
import { DataDto, ExcelService, FileUploaded } from 'src/utils/excel-parser';

@Injectable()
export class SmsBroadcastService {
  constructor(private excelService: ExcelService) {}

  async excelToJson(file: FileUploaded) {
    return await this.excelService.parseToJson(file);
  }

  async jsonToExcel(data: DataDto[]) {
    return await this.excelService.parseToExcel(data);
  }
}
