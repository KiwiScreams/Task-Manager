import { NgIf } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports:
    [
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      NgIf
    ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{
  constructor(private router: Router, private authService: AuthService) { }
  visible: boolean = true;
  changeType: boolean = true;
  errorMessage:string = '';
  ngOnInit(): void {

  }
  signupForm: FormGroup = new FormGroup
    ({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })

  ShowPassword() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }
  RedirectToLogin() {
    this.router.navigateByUrl('');
  }
  Register()
  {
    this.errorMessage = '';
    let User = 
    {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    }
    this.authService.UserRegister(User).subscribe((res: any)=> 
    {
      console.log(res);
      alert("You have successfully registered");
      this.router.navigateByUrl('');
    }, (err: any)=>
    {
      this.errorMessage = "Email is exist";
    console.log(err);
    })
  }
}
