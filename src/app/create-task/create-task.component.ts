import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TaskService } from '../task-list/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  @Input() taskCount!: number;
  @Output() changeValue = new EventEmitter<number>();

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }
  createTask(taskName: string) {
    this.taskService.createTasks(taskName);
    this.taskCount = this.taskService.getSize();
    this.changeValue.emit(this.taskCount);
  }
}
