import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../../services/question.service';
import {Question} from '../../../models/question';

@Component({
  selector: 'ngx-manage-question',
  templateUrl: './manage-question.component.html',
  styleUrls: ['./manage-question.component.scss'],
})
export class ManageQuestionComponent implements OnInit {

  questions: Observable<Question[]>;

  constructor(private questionService: QuestionService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.questions = this.questionService.getQuestionList();
  }

  deleteQuestion(id: number) {
    this.questionService.deleteQuestion(id)
      .subscribe(
        data => {
          // tslint:disable-next-line: no-console
          console.log(data);
          this.reloadData();
        },
        // tslint:disable-next-line: no-console
        error => console.log(error));
  }

  // questionDetails(id: number){
  //   this.router.navigate(['question/details', id]);
  // }


}
