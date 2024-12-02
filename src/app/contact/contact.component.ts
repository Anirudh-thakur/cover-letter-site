import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: any = '';
  email: any = '';
  message: any = '';

  submitForm() {
    console.log('Contact Form Submitted:', { name: this.name, email: this.email, message: this.message });
    alert('Thank you for reaching out! We will get back to you soon.');
  }
}