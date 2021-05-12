import {NgModule} from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//Inventos
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatSnackBarModule } from "@angular/material/snack-bar";


@NgModule({
    imports: [
        MatTableModule,
        MatButtonModule,
        MatSidenavModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatCardModule,
        MatSelectModule,
        MatIconModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule
    ],
    exports: [
        MatTableModule,
        MatButtonModule,
        MatSidenavModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatCardModule,
        MatSelectModule,
        MatIconModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule
    ]
})

export class MaterialModule {}