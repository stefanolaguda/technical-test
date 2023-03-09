import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ArticlesComponent } from './pages/articles/articles.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    LoginComponent,
    ErrorPageComponent,
    ArticleCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
