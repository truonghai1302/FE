import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../../../services/topic.service';
import { Topic } from '../../../../models/topic';

@Component({
  selector: 'ngx-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss'],
})
export class CreateTopicComponent implements OnInit {

  topic: Topic = new Topic();
  submitted = false;

  constructor(private topicService: TopicService,
    private router: Router) { }

  ngOnInit() {
  }

  newTopic(): void {
    this.submitted = false;
    this.topic = new Topic();
  }

  save() {
    this.topicService.createTopic(this.topic)
      // tslint:disable-next-line: no-console
      .subscribe(data => console.log(data), error => console.log(error));
    this.topic = new Topic();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['pages/manage/topic']);
  }

}
