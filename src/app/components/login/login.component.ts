import { Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

//RXJS
import { Subject, takeUntil } from 'rxjs';
//PrimeNG
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { LoginService } from '../../services/login/login.service';

import { SignInRequest } from '../../models/interfaces/login/SignInRequest';
import { RegisterRequest } from '../../models/interfaces/register/RegisterRequest';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,
            FormsModule,
            ToastModule,
            ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService],
  animations: [
    trigger('moveForms',[
      state('start', style({
        transform: 'translateX(0)'
      })),
      state('left', style({
        transform: 'translateX(-400px)',
      })),
      transition('start => left', animate('600ms ease-in-out')),
      transition('left => start', animate('600ms ease-in-out')),
    ]),
  ]
})
export class LoginComponent implements OnDestroy {

  @ViewChild('login') login?: ElementRef;
  @ViewChild('register') register?: ElementRef;

  state = 'start';

  private destroy$ = new Subject<void>();
  private formBuilder = inject(FormBuilder);
  private loginService = inject(LoginService);
  private messageService = inject(MessageService)
  private route = inject(Router);
  public showRegister = false;


  protected loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required,
                      Validators.min(4)]]
  });

  protected registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required,
                      Validators.min(4)]]
  });

  handleLoginSubmit():void {
    this.loginService.signIn(this.loginForm.value as SignInRequest)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: ((response) => {
        localStorage.setItem('USR_TOKEN', JSON.stringify(response.token));
        this.messageService.add({
          severity: 'sucess',
          summary: 'Dashboard',
          detail: `Bem-vindo novamente ${response.username}`,
          life: 3000,
        });
        this.route.navigate(['dashboard']);
      }),
      error: ((error) => {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: error.error.message,
            life: 3000,
          });
      })
    })
    this.route.navigate(['dashboard']);
  }

  handleRegisterSubmit():void {
    this.loginService.register(this.registerForm.value as RegisterRequest)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: ((response) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Aconteceu um erro inesperado ao tentar se cadastrar!',
          life: 3000
        })
      }),
      error: ((error) => {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Aconteceu um erro inesperado ao tentar se cadastrar!',
            life: 3000
          })
      })
    })
  }

  toogleLogin(link: string): void {
    if(link === 'login') {
      this.login?.nativeElement.classList.add('option-selected');
      this.register?.nativeElement.classList.remove('option-selected');
      this.state = 'start'

    }else {
      this.state = 'left'
      this.register?.nativeElement.classList.add('option-selected');
      this.login?.nativeElement.classList.remove('option-selected');
    }

    this.loginForm.reset();
    this.registerForm.reset();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
