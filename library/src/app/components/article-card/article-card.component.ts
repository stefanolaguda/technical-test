import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/model/Book';
import { DataServerService } from 'src/services/data/data-server.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent implements OnInit {
  constructor(private dataService: DataServerService, private router: Router) {}

  @Input()
  book: IBook = {
    idBook: 0,
    title: '',
    author: '',
    codec: 0,
    dataAddedStore: new Date(),
    dataDeleteStore: new Date(),
    story: '',
    numLecturesCompleted: 0,
  };

  @Output()
  delete = new EventEmitter();

  @Output()
  edit = new EventEmitter();

  ngOnInit(): void {}

  // delete(id: number) {
  //   console.log(id, this.book.title);
  //   this.dataService.deleteBook(id).subscribe((response) => {
  //     console.log(response);
  //   });
  // }

  editBook = (id: number) => {
    console.log(id);
    this.router.navigate(['formbook', id]);
  };

  detailsBook = (id: number) => {
    this.router.navigate(['details', id]);
  };

  deleteBookEmit = () => this.delete.emit(this.book.idBook);
  editBookEmit = () => this.edit.emit(this.book.idBook);
}
