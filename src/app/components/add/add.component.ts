import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {


  

}
