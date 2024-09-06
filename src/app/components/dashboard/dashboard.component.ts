import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { Job } from '../../models/interfaces/job/Job';
import { JobStatus } from '../../models/enums/JobStatus.enum';
import { DelimiterWordsPipe } from '../../pipes/delimiter-words.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,
            HeaderComponent,
            DelimiterWordsPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  jobs!: Array<Job>;
  jobIcon!: string;

  currentjobs!: Array<Job>;

  @ViewChild('sectionLate') late! : ElementRef;
  @ViewChild('sectionSchedule') schedule! : ElementRef;

  ngOnInit(): void {
    this.jobs = [
      {
        job_id: 1,
        delivery: new Date(),
        client_infos: {nome: 'Lucas Nunes'},
        status: JobStatus.WARN_OVERDUE
      },
      {
        job_id: 2,
        delivery: new Date(),
        client_infos: {nome: 'Barbara Renata'},
        status: JobStatus.DANG_OVERDUE
      },
      {
        job_id: 3,
        delivery: new Date(),
        client_infos: {nome: 'Afonso Teodoro'},
        status: JobStatus.DANG_OVERDUE
      },
      {
        job_id: 4,
        delivery: new Date(),
        client_infos: {nome: 'Marcos Pinheiro dos Santos'},
        status: JobStatus.DANG_OVERDUE
      }
    ]

    this.currentjobs = [
      {
        job_id: 1,
        delivery: new Date(new Date().getDate() + 10),
        client_infos: {nome: 'Lucas Nunes'},
        status: JobStatus.IN_PROGRESS
      },
      {
        job_id: 2,
        delivery: new Date(new Date().getDate() + 10),
        client_infos: {nome: 'Barbara Renata'},
        status: JobStatus.IN_PROGRESS
      },
      {
        job_id: 3,
        delivery: new Date(new Date().getDate() + 10),
        client_infos: {nome: 'Afonso Teodoro'},
        status: JobStatus.IN_PROGRESS
      },
      {
        job_id: 4,
        delivery: new Date(new Date().getDate() + 10),
        client_infos: {nome: 'Marcos Pinheiro dos Santos'},
        status: JobStatus.IN_PROGRESS
      }
    ]
  }

  verifyIcon(job: Job): string {

    switch(job.status) {
      case JobStatus.WARN_OVERDUE:
        return 'pi pi-exclamation-circle'

      case JobStatus.COMPLETE:
        return 'pi pi-check-circle';

      case JobStatus.IN_PROGRESS:
        return 'pi pi-cog'

      default:
        return 'null';
    }
  }

  showLateDemandTable() {
    this.late.nativeElement.classList.add('fade-out');
    this.schedule.nativeElement.classList.add('fade-out');
  }
}
