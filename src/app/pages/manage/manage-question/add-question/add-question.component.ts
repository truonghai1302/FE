import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../../services/question.service';
import { Question } from '../../../../models/question';

@Component({
  selector: 'ngx-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {

  question: Question = new Question();
  submitted = false;

  constructor(private questionService: QuestionService,
    private router: Router) { }

  ngOnInit() {
  }

  newQuestion(): void {
    this.submitted = false;
    this.question = new Question();
  }

  saveQ() {
    this.questionService.createQuestion(this.question)
      // tslint:disable-next-line: no-console
      .subscribe(data => console.log(data), error => console.log(error));
    this.question = new Question();
    this.gotoListQ();
  }

  onSubmitQ() {
    this.submitted = true;
    this.saveQ();
  }

  gotoListQ() {
    this.router.navigate(['pages/manage/question']);
  }

}
