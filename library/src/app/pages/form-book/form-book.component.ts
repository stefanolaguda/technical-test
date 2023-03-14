import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/model/Book';
import { DataServerService } from 'src/services/data/data-server.service';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css'],
})
export class FormBookComponent implements OnInit {
  titleTypeForm: string = 'Modifica Libro';
  idBook: number = 0;
  isEditClicked: boolean = true;

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

  operationCompleted: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataServerService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.params['id'] > -1) {
      console.log('Selezionato articolo ' + this.route.snapshot.params['id']);
      this.idBook = this.route.snapshot.params['id'];
      this.isEditClicked = true;
      this.dataService.getSingleBook(this.idBook).subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this),
      });
    } else {
      this.titleTypeForm = 'Inserisci Nuovo Libro';
      this.isEditClicked = false;
    }
  }

  handleResponse(response: IBook) {
    this.bookSelected = response;
    // console.log(this.bookSelected);
  }

  handleError(error: Object) {
    this.errorMessage = error.toString();
  }

  save() {
    console.log(this.bookSelected);

    if (this.isEditClicked) {
      this.dataService.editBook(this.bookSelected).subscribe();
      this.operationCompleted = true;
    } else {
      this.dataService.insertBook(this.bookSelected).subscribe();
      this.operationCompleted = true;
    }
  }
}
