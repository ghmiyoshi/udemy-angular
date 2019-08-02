import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from './comment.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comentario: Observable<Comment[]>;

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]>{
    return this.http.get<Comment[]>("http://jsonplaceholder.typicode.com/comments");
  }

}
