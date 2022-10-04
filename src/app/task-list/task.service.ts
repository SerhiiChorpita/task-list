import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = [
    { name: 'First task', isDone: false },
    { name: 'Second task', isDone: true },
    { name: 'Third task', isDone: false }
  ]

  constructor() { }

  getTask() {
    return this.tasks;
  }

  getSize() {
    return this.tasks.length;
  }

  createTasks(taskName: string) {
    if (typeof taskName !== undefined) {
      return this.tasks.push({ name: taskName, isDone: false });
    }
    return;
  }

  removeTask(index: number) {
    if (typeof index !== undefined) {
      return this.tasks.splice(index, 1);
    }
    return;
  }
}
