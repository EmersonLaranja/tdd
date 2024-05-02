import { ListTasks } from "../../../usecases/listTasks";
import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import {
  noContent,
  ok,
} from "../../presentations/api/httpResponses/httpResponses";

export class ListTasksController implements Controller {
  constructor(private readonly listTasks: ListTasks) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const tasks = await this.listTasks.list();
    return tasks.length > 0 ? ok(tasks) : noContent();
  }
}