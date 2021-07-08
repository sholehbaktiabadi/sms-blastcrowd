import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploaded } from 'src/utils/excel-parser';
import { MailBroadcastService } from './mail-broadcast.service';

@Controller('mail-broadcast')
export class MailBroadcastController {
  constructor(private mailBroadcastService: MailBroadcastService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async SendMail(@UploadedFile('file') file: FileUploaded) {
    return await this.mailBroadcastService.sendMail(file);
  }
}
