import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Output() categoria: EventEmitter<string>

  arrCategorias: string[] = [];


  constructor(private postService: PostsService) {
    this.categoria = new EventEmitter()

   }

  ngOnInit(): void {
    this.arrCategorias = this.postService.getAllCategoria();

  }

  filtrarCategoria($event: any) {
    
    this.categoria.emit($event.target.value);
    console.log($event.target.value)

  }

}
