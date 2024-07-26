import { Injectable, BadGatewayException } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  create({ description }: TaskDto) {
    try {
      const newTodo = this.taskRepository.create({
        description,
      });

      return this.taskRepository.save(newTodo);
    } catch (error) {
      throw new BadGatewayException('Error trying to create new todo');
    }
  }

  findAll() {
    try {
      return this.taskRepository.find();
    } catch (error) {
      throw new BadGatewayException('Error getting all todos');
    }
  }

  //Metodo utilizado para encontrar el objeto deseado y posteriormente cambiarle el valor de la columna "isDone"
  private findById(todoId: number) {
    try {
      return this.taskRepository.findOne({ where: { todoId } });
    } catch (error) {
      throw new BadGatewayException('Error getting one todo');
    }
  }

  remove(todoId: number) {
    try {
      return this.taskRepository.delete(todoId);
    } catch (error) {
      throw new BadGatewayException('Error deleting a todo');
    }
  }

  async switchTrueFalse(todoId: number) {
    try {
      const todo = await this.findById(todoId);

      todo.status = !todo.status;

      return this.taskRepository.save(todo);
    } catch (error) {
      throw new BadGatewayException(
        'Error trying to switch boolean value of todo',
      );
    }
  }
}
