import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs'
import { Task } from '../interfaces';
import { TASKS } from '../data/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }



  listAllTasks(): Observable<Task[]> {

    const TASKS: any = localStorage.getItem('tasks')
    const data = JSON.parse(TASKS)

    console.log(typeof(data) );
    
    return of( Array(data))
  }

}
