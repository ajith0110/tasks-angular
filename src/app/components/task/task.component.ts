import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../interfaces';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

 @Input() task:Task|null=null

 @Output() onDelete= new EventEmitter()


 onRemove(){
      this.onDelete.emit()
 }

}
