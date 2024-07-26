import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './dto/task.dto';
import { Task } from './entities/task.entity';
import { DeleteResult } from 'typeorm';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() taskDto: TaskDto): Promise<Task> {
    return this.taskService.create(taskDto);
  }

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Delete(':todoId')
  remove(@Param('todoId', ParseIntPipe) todoId: number): Promise<DeleteResult> {
    return this.taskService.remove(todoId);
  }

  @Patch(':todoId')
  switchTrueFalse(
    @Param('todoId', ParseIntPipe) todoId: number,
  ): Promise<Task> {
    return this.taskService.switchTrueFalse(todoId);
  }
}
