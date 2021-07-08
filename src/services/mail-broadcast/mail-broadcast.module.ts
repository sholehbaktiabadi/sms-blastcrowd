import { Module } from '@nestjs/common';
import { MailBroadcastService } from './mail-broadcast.service';
import { MailBroadcastController } from './mail-broadcast.controller';
import { ExcelService } from 'src/utils/excel-parser';
import { MessagerModule } from '../messager/messager.module';

@Module({
  imports: [MessagerModule],
  providers: [MailBroadcastService, ExcelService],
  controllers: [MailBroadcastController],
})
export class MailBroadcastModule {}
