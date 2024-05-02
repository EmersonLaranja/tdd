import { Task } from "../../entities/task";
import { ListTasksRepository } from "../../usecases/repository/listTasksRepository";

export class DbListTasks implements ListTasksRepository {
  constructor(private readonly listTasksRepository: ListTasksRepository) {}
  async list(): Promise<Task[]> {
    await this.listTasksRepository.list();
    return [];
  }
}