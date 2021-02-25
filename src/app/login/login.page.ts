import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, userI } from '../services/user.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
// import { userI } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [UserService]
})
export class LoginPage implements OnInit {
  public loginForm: any;
  public showError:boolean;
  public textError:string;
  public usuario:userI;

  constructor(
    private formBuilder: FormBuilder,
    private _router:Router,
    private _userS:UserService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
			email :  ['', [Validators.required,Validators.email]],
			password :  ['', Validators.required]
		})
  }

  onLogin(form){
		//console.log(form.value);

		let user:userI = {
			email:form.value.email,
			password:form.value.password
		}

		console.log(user);
		
		this._userS.authUser(user).subscribe(
			result => {
				if(result.status == "200"){
					this._router.navigate(['/tabs/tab1']);	
          this.usuario = result.response[0];
          localStorage.setItem('user',JSON.stringify(this.usuario));
				}
			},
			error => {
				//console.log(error);
			}
		)
	}

  onRegister(){
    this._router.navigate(['/register']);		
  }

  onSubmit(){
    this._router.navigate(['/tabs']);
  }
}
