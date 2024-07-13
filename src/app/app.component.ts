import { Component, OnInit } from "@angular/core";
import { ComponentBase } from "@core/base/common-base";

import { Store } from "@ngrx/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent extends ComponentBase implements OnInit {
  title = "LIBRARY";
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
