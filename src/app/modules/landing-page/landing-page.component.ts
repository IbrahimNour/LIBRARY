import { Component, OnInit } from "@angular/core";
import { ComponentBase } from "@core/base/common-base";
import { BookService } from "@core/services/book.service";
import { takeUntil } from "rxjs";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrl: "./landing-page.component.scss",
})
export class LandingPageComponent extends ComponentBase implements OnInit {
  constructor(private readonly bookService: BookService) {
    super();
  }

  ngOnInit(): void {
    this.bookService
      .getBooks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        console.log("res => ", res);
      });
  }
}
