import { Module } from '@nestjs/common';
import { ExcelService } from 'src/utils/csv-parser';
import { SmsBroadcastController } from './sms-broadcast.controller';
import { SmsBroadcastService } from './sms-broadcast.service';

@Module({
  providers: [SmsBroadcastService, ExcelService],
  controllers: [SmsBroadcastController],
})
export class SmsBroadcastModule {}
