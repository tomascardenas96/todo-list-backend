import { Module } from '@nestjs/common';
import { TodoSocketGateway } from './socket.gateway';
@Module({
  providers: [TodoSocketGateway],
  exports: [TodoSocketGateway]
})
export class TodoSocketModule {}
