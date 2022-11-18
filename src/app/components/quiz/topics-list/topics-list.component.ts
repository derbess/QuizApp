import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from 'src/app/services/quizes.service';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  list: any | undefined;

  constructor(
    private quizService: QuizService,
    private formBuilder: FormBuilder,
    ) {}
  form: FormGroup | any;

  ngOnInit(): void {
    this.quizService.getTopicList().subscribe((data) => {
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

      this.quizService.createTopic(name).subscribe((newTopic: any) => {        
        this.quizService.getTopicList().subscribe((data) => {
          this.list = data;
          console.log(this.list);
        });
      });

      } else {
        return;
      }
    
  }
  
}
