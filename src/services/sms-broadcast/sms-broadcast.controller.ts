import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TransformInterceptor } from 'src/interceptor/transform.intercetor';
import { DataDto, FileUploaded } from 'src/utils/excel-parser';
import { SmsBroadcastService } from './sms-broadcast.service';

@UseInterceptors(TransformInterceptor)
@Controller('sms-broadcast')
export class SmsBroadcastController {
  constructor(private smsBroadcasterService: SmsBroadcastService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async excel2json(@UploadedFile('file') file: FileUploaded) {
    return await this.smsBroadcasterService.excelToJson(file).then(res=>res).catch(err=>err)
  }

  @Post('create-file')
  async json2excel(@Body() data: DataDto[]) {
    return await this.smsBroadcasterService.jsonToExcel(data).then(res=>res).catch(err=>err)
  }

  @Get()
  @UseInterceptors(FileInterceptor('file'))
  async test() {
    return "dataaaa"
  }

}
