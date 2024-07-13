import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookResolver } from "@core/resolvers/book.resolver";
import { ModulesComponent } from "./modules.component";

const routes: Routes = [
  {
    path: "",
    component: ModulesComponent,
    children: [
      {
        path: "landing-page",
        loadChildren: () =>
          import("./landing-page/landing-page.module").then(
            (m) => m.LandingPageModule
          ),
      },
      {
        path: "book/:id",
        loadChildren: () =>
          import("./book-details/book-details.module").then(
            (m) => m.BookDetailsModule
          ),
        // resolve: { book: BookResolver },
      },
      {
        path: "auther/:id",
        loadChildren: () =>
          import("./auther-details/auther-details.module").then(
            (m) => m.AutherDetailsModule
          ),
      },
      {
        path: "",
        redirectTo: "landing-page",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
