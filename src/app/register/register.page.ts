import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, userI } from '../services/user.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registerForm: any;
  public showError:boolean;
  public textError:string;

  constructor(
    private _router:Router,
    private formBuilder: FormBuilder,
    private _userS:UserService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name:  ['', Validators.required],
      lastname:  ['', Validators.required],
      date_born :  ['', Validators.required],
			email :  ['', [Validators.required,Validators.email]],
			password :  ['', Validators.required]
		})
  }

  onRegister(form){
		//console.log(form.value);

		let user:userI = {
      name:form.value.name,
      lastname:form.value.lastname,
			email:form.value.email,
			password:form.value.password
		}

		console.log(user);
		
		this._userS.createUser(user).subscribe(
			result => {
				console.log(result);
				if(result.status === "200"){
					this._router.navigate(['/tabs/tab1']);	
				}
			},
			error => {
				//console.log(error);
			}
		)
	}

  onLogin(){
    this._router.navigate(['/login']);
  }
}
