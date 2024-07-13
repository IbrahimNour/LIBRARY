import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutherDetailsComponent } from "./auther-details.component";

const routes: Routes = [{ path: "", component: AutherDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutherDetailsRoutingModule {}
