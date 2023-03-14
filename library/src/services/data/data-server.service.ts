import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/model/Book';

@Injectable({
  providedIn: 'root',
})
export class DataServerService {
  constructor(private httpClient: HttpClient) {}

  getAllBooks = () => {
    return this.httpClient.get<IBook[]>('http://localhost:8050/book/all');
  };

  deleteBook = (id: number) => {
    return this.httpClient.delete(`http://localhost:8050/book/delete/${id}`);
  };

  editBook = (book: IBook) => {
    return this.httpClient.put(
      `http://localhost:8050/book/update/${book.idBook}`,
      book
    );
  };

  insertBook = (book: IBook) => {
    return this.httpClient.post('http://localhost:8050/book/insert', book);
  };

  getSingleBook = (id: number) => {
    return this.httpClient.get<IBook>(
      `http://localhost:8050/book/details/${id}`
    );
  };
}
