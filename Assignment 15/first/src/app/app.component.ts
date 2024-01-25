import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]+$/),
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        ]
      ],
      city: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(/^[a-zA-Z]+$/)
        ]
      ],
      state: ['', [Validators.required]],
      zipCode: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]+$/),
          Validators.minLength(5),
          Validators.maxLength(5)
        ]
      ],
      comments: [
        '',
        [
          Validators.required,
          Validators.minLength(30)
        ]
      ],
      // Add similar controls for other form fields with validators
    });
  }

  // Add getter methods for form controls for easier access in HTML
  get firstName() {
    return this.contactForm.get('firstName');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get city() {
    return this.contactForm.get('city');
  }

  get state() {
    return this.contactForm.get('state');
  }

  get zipCode() {
    return this.contactForm.get('zipCode');
  }

  get comments() {
    return this.contactForm.get('comments');
  }

  // Add similar getter methods for other form controls

  onSubmit() {
    // Handle form submission logic here
    console.log(this.contactForm.value);
  }
}
