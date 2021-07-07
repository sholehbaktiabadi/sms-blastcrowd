import { Injectable } from '@nestjs/common';
import { ExcelService, FileUploaded } from 'src/utils/csv-parser';

@Injectable()
export class SmsBroadcastService {
  constructor(private excelService: ExcelService) {}

  async parseFile(file: FileUploaded) {
    return await this.excelService.parse(file);
  }
}
