import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
   MatFormFieldModule, 
   MatSelectModule, 
   MatIconModule,
   MatInputModule,
   MatToolbarModule, 
   MatButtonModule,
   MatAutocompleteModule
 } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MySelectComponent } from './my-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectFilterModule } from 'mat-select-filter';

@NgModule({
  declarations: [
    AppComponent, MySelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatSelectModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatSelectFilterModule, MatAutocompleteModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
