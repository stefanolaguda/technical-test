import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { DetailsBookComponent } from './pages/details-book/details-book.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FormBookComponent } from './pages/form-book/form-book.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'formbook/:id', component: FormBookComponent },
  { path: 'details/:id', component: DetailsBookComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
