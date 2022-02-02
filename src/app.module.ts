import { Module } from '@nestjs/common';
import { MailBroadcastModule } from './services/mail-broadcast/mail-broadcast.module';
import { MessagerModule } from './services/messager/messager.module';
import { SmsBroadcastModule } from './services/sms-broadcast/sms-broadcast.module';

@Module({
  imports: [SmsBroadcastModule, MessagerModule, MailBroadcastModule],
})
export class AppModule {}
