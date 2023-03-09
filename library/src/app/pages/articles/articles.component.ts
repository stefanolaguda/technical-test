import { Component, OnInit } from '@angular/core';
import { DataServerService } from 'src/services/data/data-server.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  constructor(private dataService: DataServerService) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  getStringByServer = () => {
    this.dataService
      .getStringByServer()
      .subscribe((response) => console.log(response));
  };
}
