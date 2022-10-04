import { Component, OnInit } from '@angular/core';

import { TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: any;
  count!: number;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.taskService.getTask();
    this.count = this.taskService.getSize();
  }

  removeTask(index: number) {
    this.taskService.removeTask(index);
    this.count = this.taskService.getSize();
  }

  valueChange(count: number) {
    this.count = count;
  }

}
