import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrPosts : Post[] = []

  constructor(private postService: PostsService) {

   }

  ngOnInit(): void {
    this.arrPosts = this.postService.getAll();
    console.log(this.arrPosts)
  }

 
  onCategoria($event: string) {

    this.arrPosts = this.postService.getByCategoria($event);
    console.log(this.arrPosts)
  }

}
