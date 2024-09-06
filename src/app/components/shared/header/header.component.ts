import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private route = inject(Router);

  showNewDemandForm() {
    this.route.navigate(['new-demand'])
  }

  signUp() {
    this.route.navigate(['/']);
    localStorage.removeItem('USR_TOKEN');
  }
}
