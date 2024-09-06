import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { DividerModule } from 'primeng/divider';
import { PhoneFormatterPipe } from '../../../pipes/phone-formatter.pipe';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-demand',
  standalone: true,
  imports: [HeaderComponent,
            DividerModule,
            PhoneFormatterPipe,
            ReactiveFormsModule],
  templateUrl: './create-demand.component.html',
  styleUrl: './create-demand.component.scss'
})
export class CreateDemandComponent {

}
