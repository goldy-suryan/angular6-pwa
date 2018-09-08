import { Component, OnInit } from '@angular/core';
import { DataService, Icomments } from '../data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Icomments[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.dataService.getComments()
      .subscribe(comments => {
        this.comments = comments.slice(450)
      },
        err => {
          throw err
        })
  }

}
