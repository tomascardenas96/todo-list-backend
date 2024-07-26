import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TodoSocketModule } from 'src/socket/socket.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), TodoSocketModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
