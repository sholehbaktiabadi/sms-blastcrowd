import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploaded } from 'src/utils/csv-parser';
import { SmsBroadcastService } from './sms-broadcast.service';

@Controller('sms-broadcast')
export class SmsBroadcastController {
  constructor(private smsBroadcasterService: SmsBroadcastService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async parse(@UploadedFile('file') file: FileUploaded) {
    return await this.smsBroadcasterService.parseFile(file);
  }
}
