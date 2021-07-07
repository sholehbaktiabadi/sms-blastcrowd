import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DataDto, FileUploaded } from 'src/utils/excel-parser';
import { SmsBroadcastService } from './sms-broadcast.service';

@Controller('sms-broadcast')
export class SmsBroadcastController {
  constructor(private smsBroadcasterService: SmsBroadcastService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async excel2json(@UploadedFile('file') file: FileUploaded) {
    return await this.smsBroadcasterService.excelToJson(file);
  }

  @Post('create-file')
  async json2excel(@Body() data: DataDto[]) {
    return await this.smsBroadcasterService.jsonToExcel(data);
  }
}
