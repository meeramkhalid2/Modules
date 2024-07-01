import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone:true,
  imports:[CommonModule, FormsModule]

})
export class LoginComponent {
  email: string='';
  password: string='';

  constructor(private route: Router) {}

  onSubmit(form: any) {
    // Retrieve stored user data using parse to convert to array 
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (form.value.email === userData.email && form.value.password === userData.password) {
        alert('Login successful!');
      } else {
        alert('Invalid credentials. Please try again.');
        
      }
    } 
  }

  navigateToUrl(url:string){
    this.route.navigateByUrl(url)
  }
}
