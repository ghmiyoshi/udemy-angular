import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentService } from './comments/comment.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // import necessário para trabalhar com http
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})

/* ERRO NullInjectorError: StaticInjectorError(AppModule)[HttpClient]
   Ocorre quando não declaro o service na lista de providers do módulo
   raiz
*/

export class AppModule { }


