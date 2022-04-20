import { Injectable } from '@angular/core';
import { POST } from '../db/post.db';
import { Categoria } from '../interfaces/categoria';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPost : Post[]
  private id :number 

  

  constructor() { 

    this.arrPost = POST
    this.id= this.arrPost.length + 1;
  }

   getAll(): Post[] {
    return this.arrPost

  }

   getAllCategoria( ): string[] {

    let categoria = this.arrPost.map(post => post.categoria);
    categoria = [...new Set(categoria)];
    return categoria;
   }

   getByCategoria(pCategoria: string) : Post[] {

    if(pCategoria !== "") {

      return this.arrPost.filter(post => post.categoria === pCategoria);
      
      
    }else {
      return this.arrPost
    }
   }
 

  agregarPost(pForm: any) : boolean {

    let post: Post = {id: this.id, ...pForm};
    

    this.arrPost.push(post)
    this.id++;
  
    return true;
  }

  getById(pId: number) : Post | undefined {

      return this.arrPost.find(post => post.id === pId) 
    }
  

}
