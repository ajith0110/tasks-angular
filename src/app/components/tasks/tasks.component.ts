import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../interfaces';
import { TASKS } from '../../data/tasks';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.listAllTasks()
  }

  listAllTasks() {
    console.log('get');

    this.taskService.listAllTasks().subscribe({
      next: (result: any) => {
        this.tasks = result
      },
      error(err:any) {
        console.log(err);

      },
    })
  }

  removeTask(id: string | undefined) {
    console.log(id);

    this.tasks = this.tasks.filter(res=> id!==res.id)
  }



}
