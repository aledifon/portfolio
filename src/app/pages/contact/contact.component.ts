import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactPayLoad } from '../../models/contact-payload.model';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  // Sending form flags
  public isSubmitting = signal(false);  
  public isSuccess = signal(false);

  // Form fields declaration
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email,
      Validators.maxLength(100)
    ]),
    subject: new FormControl("", [      
      Validators.maxLength(70)
    ]),
    message: new FormControl("", [
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(700)     
    ])
  });

  // Form getters
  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get subject() {
    return this.form.get('subject');
  }
  get message() {
    return this.form.get('message');
  }

  constructor(private contactService: ContactService){}

  onSubmit(){
    if(this.isSubmitting())
      return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      // console.warn("Invalid form!!");      
      return;
    } 

    // console.info("Form sent: ", this.form.value);
    // console.log(this.form.value.message);

    this.sendContactForm();

  }
  
  resetForm(){
    this.form.reset();            // Clean all the field values
    this.form.markAsPristine();   // Set as never was modified
    this.form.markAsUntouched();  // Clean untouched logic errors
  }

  sendContactForm(){

    // Create the message data
    const payload = this.form.getRawValue() as ContactPayLoad;    

    // Set initial state of form flags
    this.isSuccess.set(false);
    this.isSubmitting.set(true);
    console.log('➡️ submitting START:', this.isSubmitting());

    this.contactService.sendContactMessage(payload).subscribe({
      next: (result) => {  
        setTimeout(() => {                          // Applied just for UX purposes
          console.log('✅ response received');
          console.log(`Message sent properly`, result);        

          this.isSubmitting.set(false);                // Update the form flags state
          this.isSuccess.set(true);
          console.log('SUCCESS ON');

          console.log('➡️ submitting END (success):', this.isSubmitting());

          this.resetForm();

          // Delayed reset of the success sending form flag
          setTimeout(() => { console.log('SUCCESS OFF'); this.isSuccess.set(false); }, 2000);

        }, 150);
      },
      error: (err) => {
        console.error('❌ error:', err);
        this.isSubmitting.set(false);
        console.log('➡️ submitting END (error):', this.isSubmitting());
      }
    });    
  }
}
