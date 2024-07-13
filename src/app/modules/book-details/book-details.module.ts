import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BookDetailsRoutingModule } from "./book-details-routing.module";
import { BookDetailsComponent } from "./book-details.component";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [BookDetailsComponent],
  imports: [CommonModule, BookDetailsRoutingModule, SharedModule],
})
export class BookDetailsModule {}
