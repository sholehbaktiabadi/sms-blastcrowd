import { Module } from '@nestjs/common';
import { MessagerService } from './messager.service';

@Module({
  providers: [MessagerService],
})
export class MessagerModule {}
