import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    subject: new FormControl(""),
    message: new FormControl("", [
      Validators.required      
    ])
  });

  onSubmit(){
    if(this.form.valid){
      console.info("Form sent: ", this.form.value);
      console.log(this.form.value.message);
    }
    else{
      console.warn("Invalid form!!");
    }
  }

}
