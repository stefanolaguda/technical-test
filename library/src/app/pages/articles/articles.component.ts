import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/model/Book';
import { DataServerService } from 'src/services/data/data-server.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  constructor(private dataService: DataServerService, private router: Router) {}

  booksDB$: IBook[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.dataService.getAllBooks().subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }

  getStringByServer = () => {
    this.dataService.getAllBooks().subscribe((response) => {
      console.log(response);
      this.booksDB$ = [...this.booksDB$];
    });
  };

  handleResponse(response: IBook[]) {
    this.booksDB$ = response;
  }

  handleError(error: Object) {
    this.errorMessage = error.toString();
  }

  deleteBook = (id: number) => {
    // console.log(id, this.book.title);
    this.dataService.deleteBook(id).subscribe((response) => {
      console.log(response);
    });

    this.booksDB$ = this.booksDB$.filter((item) => item.idBook != id);
  };

  editBook = (id: number) => {
    this.router.navigate(['formbook', id]);
  };
  // insertBook() {
  //   this.router.navigate(['formbook']);
  // }
}
