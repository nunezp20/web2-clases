import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  constructor(private http: HttpClient) { }

  getNoticias(q: string): Observable<any> {
    const url = `${environment.apiUrl}everything?q=${q}&sortBy=publishedAt&apiKey=${environment.apiKey}`;
    return this.http.get(url)
  }
}
