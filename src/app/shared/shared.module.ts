import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgxOtpInputModule } from "ngx-otp-input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatChipsModule } from "@angular/material/chips";
import { MatMenuModule } from "@angular/material/menu";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";
import { NativeDateAdapter } from "@angular/material/core";
import { MatNativeDateModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDialogModule } from "@angular/material/dialog";
import { ErrorFormComponent } from "./components/error-form/error-form.component";
import { TranslateModule } from "@ngx-translate/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { CarouselModule } from "ngx-owl-carousel-o";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NgxSpinnerModule } from "ngx-spinner";
import { BaseChartDirective } from "ng2-charts";
import { NgApexchartsModule } from "ng-apexcharts";
import { HeaderComponent } from "./components/header/header.component";

const MATERIAL_MODULES = [
  FlexLayoutModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  NgxOtpInputModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatMenuModule,
  MatRadioModule,
  MatChipsModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatDialogModule,
  MatProgressBarModule,
  MatTabsModule,
  MatTableModule,
  CarouselModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  NgxSpinnerModule,
  BaseChartDirective,
  NgApexchartsModule,
];

const COMPONENTS = [ErrorFormComponent, HeaderComponent];
const MODULES = [TranslateModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ...MATERIAL_MODULES,
    ...MODULES,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES,
    ...COMPONENTS,
    ...MODULES,
  ],
  providers: [NativeDateAdapter],
})
export class SharedModule {}
