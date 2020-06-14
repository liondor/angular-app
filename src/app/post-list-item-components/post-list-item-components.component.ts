import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-components',
  templateUrl: './post-list-item-components.component.html',
  styleUrls: ['./post-list-item-components.component.scss']
})
export class PostListItemComponentsComponent implements OnInit {
  @Input() post;
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;


  constructor() {
if(this.post) {


  this.title = this.post.title;
  this.content = this.post.content;
  this.loveIts = this.post.loveIts;
  this.created_at = this.post.created_at;
}
    }

  ngOnInit(): void {
  }

  addLove() : void  {
    this.post.loveIts+=1;
    console.log(this.post.loveIts)
  }
  subsLove() : void  {
    this.post.loveIts-=1;
    console.log(this.post.loveIts)

  }

}
