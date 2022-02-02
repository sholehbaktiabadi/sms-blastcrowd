import { ExcelField } from 'src/services/sms-broadcast/dto/excel-field.dto';
import * as xlsx from 'xlsx';

export interface DataDto {
  name: string;
  email: string;
}

export interface FileUploaded {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}

export class ExcelService {
  async parseToJson(file: FileUploaded) {
    const read = xlsx.read(file.buffer);
    const sheetName = read.SheetNames[0];
    const sheetValue = read.Sheets[sheetName];
    try {
      return xlsx.utils.sheet_to_json(sheetValue);
    } catch (error) {
      return error;
    }
  }

  async parseToExcel(data: DataDto[]) {
    const excelData = xlsx.utils.json_to_sheet(data);
    return excelData;
  }
}
