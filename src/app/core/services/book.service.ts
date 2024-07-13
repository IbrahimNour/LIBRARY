import { Injectable } from "@angular/core";
import { Book } from "@core/models/book.model";
import { ApiService } from "@core/services/api.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private readonly apiService: ApiService) {}

  getBooks(): Observable<Book[]> {
    return this.apiService.get<Book[]>("books/want-to-read.json");
  }

  getBookById(id: number): Observable<Book> {
    return this.apiService.get<Book>("books/want-to-read.json/" + id);
  }
}
