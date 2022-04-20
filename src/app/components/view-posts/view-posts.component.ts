import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
 
  miPost: Post | any
  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute 
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
    
      let id = parseInt(params['idPost']);
      console.log(id)
      this.miPost = this.postsService.getById(id);
    })

  }

}
