import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'my-select',
    template: `
    <mat-toolbar color="primary">
      <p class="title-center"> Select box </p>
    </mat-toolbar>

    <form class="example-form">
      <mat-form-field class="example-full-width" appearance="outline"> 
        <mat-label> Top Best Selling Phones </mat-label>
        <input matInput type="search" placeholder="search here" [formControl]="ctrl"
          [matAutocomplete]="auto" #itemName>
          <button matSuffix mat-icon-button color="primary" (click)="addItem(itemName.value)">
              <mat-icon>add_circle</mat-icon>
          </button>
        <mat-autocomplete #auto="matAutocomplete" class="example-full-width" 
          panelClass="example-long-panel">
            <mat-option *ngFor="let option of Phones | async">
              {{option}}
            </mat-option>
        </mat-autocomplete> 
      </mat-form-field> 
    </form>
   `,
    styleUrls: ['./app.component.css']
  })

  export class MySelectComponent {
  
    @Input() ctrl: FormControl;
  
    phones: string[] = [
      'Mi', 'OnePlus', 'Vivo', 'Oppo', 'Realme', 'Samsung', 'Nokia', 'Motorola'
    ]; 
    
    Phones: Observable<string[]>;
  
    ngOnInit() {
        this.Phones = this.ctrl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
      }
    
      private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.phones.filter(option => option.toLowerCase().includes(filterValue));
         
      }    

      addItem(newPhones) {
         this.phones.push(newPhones);
         console.log(this.phones);
         //return this.phones;
      } 
  
  }