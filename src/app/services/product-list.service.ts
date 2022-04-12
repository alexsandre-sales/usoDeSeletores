import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class ProductListService {
  private URL = 'http://localhost:3000/bookstore'

  httpOptions = {
    Headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  constructor(
    private http:HttpClient
    ){}

  getBook(){
    return this.http.get(this.URL)
  }
}
