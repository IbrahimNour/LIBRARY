import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { Book } from "../models/book.model";
import { BookService } from "@core/services/book.service";

@Injectable({
  providedIn: "root",
})
export class BookResolver {
  constructor(private readonly bookService: BookService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Book> {
    return this.bookService.getBookById(+route.paramMap.get("id")!);
  }
}
