import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutherDetailsRoutingModule } from "./auther-details-routing.module";
import { SharedModule } from "@shared/shared.module";
import { AutherDetailsComponent } from "./auther-details.component";

@NgModule({
  declarations: [AutherDetailsComponent],
  imports: [CommonModule, AutherDetailsRoutingModule, SharedModule],
})
export class AutherDetailsModule {}
