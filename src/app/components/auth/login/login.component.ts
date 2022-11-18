import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  form: FormGroup | any;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (!this.form.invalid) {
      const { username, password } = this.form.value;

      this.authService.login(username, password).subscribe((data: any) => {        
        if (data.access) {
          console.log("login")
          console.log(data);
          
          localStorage.setItem('token', JSON.stringify(data));
          this.router.navigate(['/']);
        }
      });

      } else {
        return;
      }
    
  }
}
