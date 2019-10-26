import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {TopicService} from '../../../services/topic.service';
import {Topic} from '../../../models/topic';

@Component({
  selector: 'ngx-manage-topic',
  templateUrl: './manage-topic.component.html',
  styleUrls: ['./manage-topic.component.scss'],
})
export class ManageTopicComponent implements OnInit {
  topics: Observable<Topic[]>;

  constructor(private topicService: TopicService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.topics = this.topicService.getTopicList();
  }

  deleteTopic(id: number) {
    this.topicService.deleteTopic(id)
      .subscribe(
        data => {
          // tslint:disable-next-line: no-console
          console.log(data);
          this.reloadData();
        },
        // tslint:disable-next-line: no-console
        error => console.log(error));
  }

  // topicDetails(id: number){
  //   this.router.navigate(['topic/details', id]);
  // }

}
