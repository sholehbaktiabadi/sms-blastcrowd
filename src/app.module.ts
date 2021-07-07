import { Module } from '@nestjs/common';
import { MessagerModule } from './services/messager/messager.module';
import { SmsBroadcastModule } from './services/sms-broadcast/sms-broadcast.module';

@Module({
  imports: [SmsBroadcastModule, MessagerModule],
})
export class AppModule {}
