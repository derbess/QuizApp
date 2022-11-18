import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from 'src/app/services/quizes.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {
  list: any | undefined;

  constructor(
    private quizService: QuizService,
    private formBuilder: FormBuilder,
    ) {}
  form: FormGroup | any;

  ngOnInit(): void {
    this.quizService.getPackageList().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }
  onSubmit() {
    if (!this.form.invalid) {
      const { name } = this.form.value;

      this.quizService.createPackage(name).subscribe((newPackage: any) => {        
        this.quizService.getPackageList().subscribe((data) => {
          this.list = data;
          console.log(this.list);
        });
      });

      } else {
        return;
      }
    
  }
  onClickDelete(id: number) {
    console.log("click", id);
    
    this.quizService.deletePackage(id);
    this.quizService.getPackageList().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
  }
}
