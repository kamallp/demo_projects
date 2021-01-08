import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../helper/must-match.validator';

@Component({
  selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css'] 
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    alert:boolean = false
    constructor(private formBuilder: FormBuilder, private resto:RestoService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            dob: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.registerForm.get('firstName').value);
        this.resto.createUser(this.registerForm.value).subscribe((result)=>{
          this.alert = true;
        })
        this.onReset();
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
    closeAlert(){
      this.alert = false;
    }
  
  
}
