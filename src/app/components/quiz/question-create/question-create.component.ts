import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Answer, CreateQuestion } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quizes.service';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss'],
})
export class QuestionCreateComponent implements OnInit {
  topics: any | undefined;
  packageList: any | undefined;

  constructor(
    private quizService: QuizService,
    private formBuilder: FormBuilder
  ) {}
  form: FormGroup | any;

  ngOnInit(): void {
    this.quizService.getTopicList().subscribe((data) => {
      this.topics = data;
      console.log(this.topics);
    });
    this.quizService.getPackageList().subscribe((data) => {
      this.packageList = data;
      console.log(this.packageList);
    });
    this.form = this.formBuilder.group({
      content: ['', Validators.required],
      topic_id: ['', Validators.required]
    });
  }



  // Form Answer
  formAnswer = this.formBuilder.group({
    answers: this.formBuilder.array([]),
  });

  get answers() {
    return this.formAnswer.controls['answers'] as FormArray;
  }

  addAnswer() {
    const answerForm = this.formBuilder.group({
      content: ['', Validators.required],
      is_correct: [false, Validators.required],
      explanation: ['', Validators.nullValidator]
    });
    this.answers.push(answerForm);
  }

  deleteAnswer(answerIndex: number) {
    this.answers.removeAt(answerIndex);
  }


  // Package ids
  formPackage = this.formBuilder.group({
    package_ids: this.formBuilder.array([]),
  });

  get packages() {
    return this.formPackage.controls['package_ids'] as FormArray;
  }

  addPackage() {
    const packageForm = this.formBuilder.group({
      id: ['', Validators.required],
  })
    this.packages.push(packageForm);
  }

  deletePackage(packageIndex: number) {
    this.packages.removeAt(packageIndex);
  }






  onSubmit() {
    if (!this.formAnswer.invalid && !this.form.invalid && !this.formPackage.invalid) {
      const {content, topic_id} = this.form.value;
      const answers: Answer[] = this.answers.value;

      const package_ids: number[] = [];
      this.packages.value.forEach((element: { id: any; }) => {
        package_ids.push(Number(element.id))
      });      
      console.log(this.formAnswer.value);
      console.log(this.form.value);
      console.log(this.formPackage.value);

      const bodyData: CreateQuestion = {
        content,
        topic_id,
        answers,
        package_ids

      }
      // const { content } = this.formAnswer.value;

      this.quizService.createQuestion(bodyData).subscribe((newTopic: any) => {
        console.log('response');
        console.log(newTopic);
        
        
      });
    } else {
      return;
    }
  }
}
