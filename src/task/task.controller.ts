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

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() taskDto: TaskDto) {
    return this.taskService.create(taskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Delete(':todoId')
  remove(@Param('todoId', ParseIntPipe) todoId: number) {
    return this.taskService.remove(todoId);
  }

  @Patch(':todoId')
  switchTrueFalse(@Param('todoId', ParseIntPipe) todoId: number) {
    return this.taskService.switchTrueFalse(todoId);
  }
}
