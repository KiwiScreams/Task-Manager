import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports:
    [
      NgIf,
      FormsModule,
      ReactiveFormsModule,
      RouterModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }
  visible: boolean = true;
  changeType: boolean = true;
  loginForm: FormGroup = new FormGroup
    ({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  errorMessage: string = '';
  ngOnInit(): void {

  }
  ShowPassword() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }
  RedirectToSignUp() {
    this.router.navigateByUrl('signup');
  }
  LoginSubmit() {
    const { email, password } = this.loginForm.value as
      {
        email: string,
        password: string
      }
    this.authService.UserLogin(email, password).subscribe((res) => {
      console.log(res);
      const accessToken = res.token.accessToken;
      const refreshToken = res.token.refreshToken;
      const user = res.user;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));
      this.errorMessage = '';
      alert("You have successfully logged in to your account!");
      this.router.navigateByUrl('header/dashboard');
    }, (err: any) => {
      this.errorMessage = 'Email or password is invalid';
      console.log(err.error);
    });
  }
}