import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import { Observable } from 'rxjs';
//import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'custom-select-widget';

   form: FormGroup;
  
   control = new FormControl();
   phones: string[] = [
      'Mi', 'OnePlus', 'Vivo', 'Oppo', 'Realme', 'Samsung', 'Nokia', 'Motorola'
  ];
 
   constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
         phones: ['',Validators.required]
      });
   } 
  
     

}
