import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { Comment } from './comment.modelo';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];

  constructor(private commentsService: CommentService) { }
  
  ngOnInit() {
    this.commentsService.getComments()
      .subscribe(
        dados => { // Pego o retorno do que está vindo, pego minha lista (Array) e recebo o retorno   
          this.comments = dados;
          console.log('DEU CERTO');
        },
        erro => {
          console.log('DEU ERRO' + erro.message);
        }); 
  }

}
