import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-components',
  templateUrl: './post-list-components.component.html',
  styleUrls: ['./post-list-components.component.scss']
})
export class PostListComponentsComponent implements OnInit {
  @Input() listOfPosts;

  constructor() {
    console.log(this.listOfPosts)
  }

  ngOnInit(): void {
  }

}
