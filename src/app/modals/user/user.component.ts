import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { userI } from '../../models/user';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() id:BigInteger;
  @Input() name:string;
  @Input() lastname:string;
  @Input() email:string;

  public updateForm: any;
  public idUser:BigInteger;
  public nameUser:string;
  public lastnameUser:string;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private _userS:UserService
    ) { 

    }

  ngOnInit(
  ) {
    this.updateForm = this.formBuilder.group({
      name:  ['', Validators.required],
      lastname:  ['', Validators.required],
			email :  ['', [Validators.required,Validators.email]],
			password :  ['', Validators.required]
		})

    console.log(this.id);
    console.log(this.name);
    // this.idUser = this.id;
    // this.nameUser = this.name;
    // console.log(this.idUser);
    // console.log(this.nameUser);
  }

  onUpdate(form){
		//console.log(form.value);

		let user:userI = {
      id:this.id,
      name:form.value.name,
      lastname:form.value.lastname,
			email:form.value.email,
			password:form.value.password
		}

		console.log(user);
		
		// this._userS.createUser(user).subscribe(
		// 	result => {
		// 		console.log(result);
		// 		if(result.status === "200"){
		// 			this._router.navigate(['/tabs/tab1']);	
		// 		}
		// 	},
		// 	error => {
		// 		//console.log(error);
		// 	}
		// )
	}

  closeModal(){
    this.modalController.dismiss();
  }
}
