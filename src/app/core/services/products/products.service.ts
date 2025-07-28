import { baseUrl } from './../../environment/env';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  private readonly _httpClint = inject(HttpClient)

  getAllProduct():Observable<any>{
    return this._httpClint.get(`${baseUrl.url}`+'products')
  }

  getProductById(id: number): Observable<any> {
    return this._httpClint.get(`${baseUrl.url}`+'products/' + id);
  }
}
