import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { Categoria } from 'src/app/interfaces/categoria';
import { CATEGORIAS } from 'src/app/db/categorias.db';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

 

  arrCategorias : Categoria[];
  newPost : FormGroup;
  

  constructor(private postsService: PostsService) {
    this.newPost = new FormGroup({
      titulo: new FormControl('',[
        Validators.required,        
      ]),
      texto: new FormControl('',[
        Validators.required,        
      ]),
      autor: new FormControl('',[
        Validators.required,        
      ]),
      imagen: new FormControl('',[
        Validators.required,
        Validators.pattern(/^(www)?.+\.[a-z]{2,6}(\.[a-z]{2,6})?.+\.[a-z]{2,4}$/)
      ]),
      fecha: new FormControl('',[
        Validators.required,      
      ]),
      categoria: new FormControl('',[
        Validators.required,        
      ]),  
   
    })    

    this.arrCategorias = CATEGORIAS
   }

  ngOnInit(): void {
  }

  getDataForm() {
     this.postsService.agregarPost(this.newPost.value);
  }

  checkControl(controlName: string, errorName: string): boolean {
    if (this.newPost.get(controlName)?.hasError(errorName) && this.newPost.get(controlName)?.touched) {
      return true
    } else {
      return false
    }
  }

}
