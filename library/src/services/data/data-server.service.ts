import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServerService {
  constructor(private httpClient: HttpClient) {}

  getStringByServer = (): Observable<Object> => {
    return this.httpClient.get('http://localhost:8050/api/books');
  };
}
