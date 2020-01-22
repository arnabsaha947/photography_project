import { Component, OnInit,  } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, AbstractControl} from '@angular/forms'
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname: any;
  name: any;
  lname: any;
  email: any;
  phnno: any;
  surname: any;
  mail: any;

  constructor(private router:Router) { 
  }

  ngOnInit() {
  }


  registered()
  {
    this.name=this.fname;
    this.surname=this.lname;
    this.mail=this.email;
    console.log(" >>> ",this.name," >>> ",this.surname);

    
    this.router.navigate(['login']);
      
  }

}
