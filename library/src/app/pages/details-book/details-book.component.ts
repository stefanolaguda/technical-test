import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/model/Book';
import { DataServerService } from 'src/services/data/data-server.service';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css'],
})
export class DetailsBookComponent implements OnInit {
  idBook: number = 0;
  bookSelected: IBook = {
    idBook: 0,
    title: '',
    author: '',
    codec: 0,
    dataAddedStore: new Date(),
    dataDeleteStore: new Date(),
    story: '',
    numLecturesCompleted: 0,
  };
  errorMessage: string = '';

  constructor(
    private dataService: DataServerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idBook = this.route.snapshot.params['id'];
    this.dataService.getSingleBook(this.idBook).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }

  handleResponse(response: IBook) {
    this.bookSelected = response;
    // console.log(this.bookSelected);
  }

  handleError(error: Object) {
    this.errorMessage = error.toString();
  }
}
