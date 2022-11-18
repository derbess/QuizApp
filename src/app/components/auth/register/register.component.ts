import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  form: FormGroup | any ;
  ngOnInit(): void {


    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      // birthday: [monthAgo, Validators.required],
      surname: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    
    this.authService.register((this.form.value)).subscribe((data: any) => {        
      
        console.log("register")
        console.log(data);
        
        localStorage.setItem('token', JSON.stringify(data));
        this.router.navigate(['/']);
      
    })
    
    this.router.navigate(['/']);
    
  }
}
