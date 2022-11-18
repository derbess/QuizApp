import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from 'src/app/services/quizes.service';

@Component({
  selector: 'app-package-create',
  templateUrl: './package-create.component.html',
  styleUrls: ['./package-create.component.scss']
})
export class PackageCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private quizService: QuizService) { }

  form: FormGroup | any;
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });

  }
  onSubmit() {
    if (this.form.valid) {
      const { name } = this.form.value;
      this.quizService.createPackage(name).subscribe((data: any) => {        
        console.log(data);
        
      });
    } else {
      return;
    }


  }

}

