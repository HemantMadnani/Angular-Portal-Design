import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomService {
  documents: [];
  constructor(private http: HttpClient) {
    this.getDocuments().subscribe(data => {
    });
  }
  getDocuments(): Observable<any> {
    return this.http.get('./assets/data.json');
  }
}
