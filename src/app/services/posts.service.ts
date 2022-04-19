import { Injectable } from '@angular/core';
import { POST } from '../db/post.db';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPost : Post[]

  id: number = 3

  constructor() { 

    this.arrPost = POST
  }

  getAll(): Post[] {
    return this.arrPost

  }
}
