import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule
} from '@angular/material/autocomplete';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatTableModule
} from '@angular/material/table';
import {
  MatPaginatorModule
} from '@angular/material/paginator';
import {
  MatSortModule
} from '@angular/material/sort';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatMenuModule
} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';




@NgModule({
  imports: [MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTabsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatSlideToggleModule
  ],
  exports: [MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTabsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatSlideToggleModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
})
export class MaterialmodModule { }
