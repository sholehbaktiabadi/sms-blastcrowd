import { Module } from '@nestjs/common';
import { ExcelService } from 'src/utils/excel-parser';
import { MessagerModule } from '../messager/messager.module';
import { SmsBroadcastController } from './sms-broadcast.controller';
import { SmsBroadcastService } from './sms-broadcast.service';

@Module({
  imports: [MessagerModule],
  providers: [SmsBroadcastService, ExcelService],
  controllers: [SmsBroadcastController],
})
export class SmsBroadcastModule {}
